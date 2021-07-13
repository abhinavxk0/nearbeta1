const Discord = require('discord.js');
const client = new Discord.Client();
const { config } = require('dotenv');
const fs = require('fs');
const DisTube = require('distube');
const prefix = 'n!';
const { afk } = require('./Collection')
const moment = require('moment')

require('dotenv').config()

client.cooldowns = new Discord.Collection();
client.commands = new Discord.Collection();
client.snipes = new Discord.Collection();

client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true, leaveOnEmpty: true, });
client.distube.on("playSong", (message, queue, song) => message.channel.send(
    new Discord.MessageEmbed()
        .setColor('#2f3136')
        .setAuthor(`Now Playing`)
        .setDescription(`[${song.name}](${song.url}) - \`${song.formattedDuration}\``)
        .setThumbnail(song.thumbnail)
        .setFooter(`Added by: ${song.user.username}`, song.user.displayAvatarURL({ size: 4096, dynamic: true }))
))
client.distube.on("addSong", (message, queue, song) => message.channel.send(
    new Discord.MessageEmbed()
        .setColor('#2f3136')
        .setAuthor(`Added`)
        .setDescription(`[${song.name}](${song.url}) - \`${song.formattedDuration}\``)
        .setThumbnail(song.thumbnail)
        .setFooter(`Added by: ${song.user.username}`, song.user.displayAvatarURL({ size: 4096, dynamic: true }))
))
client.distube.on("empty", message => message.channel.send(
    new Discord.MessageEmbed()
        .setColor('#2f3136')
        .setAuthor('Clearing queue and leaving channel!')
        .setFooter('Reason: Disconnect because voice channel is empty!')
))


const commandFolders = fs.readdirSync('./commands');
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}
client.once('ready', () => {
    console.log('NearBeta is online.')
    client.user.setPresence({
        activity: {
            name: 'n!help || n!ping',
            type: "LISTENING"
        },
        status: 'online'
    })
        .catch(console.error);
})


client.on('message', async message => {
    
    const mentionedMember = message.mentions.members.first();
    
        if (mentionedMember) {
            const data = afk.get(mentionedMember.id);
    
            if (data) {
                const [timestamp, reason] = data;
                const timeAgo = moment(timestamp).fromNow()
    
            message.channel.send(
                new Discord.MessageEmbed()
                    .setDescription(`${mentionedMember} is AFK : ${reason} - (${timeAgo})`)
                    .setColor('#defafe')
            ).then(msg => {msg.delete({ timeout: 5000 });})
            }
        }
    
        const getData = afk.get(message.author.id);
        if (getData) {
            afk.delete(message.author.id)
            message.channel.send(
                new Discord.MessageEmbed()
                    .setDescription(`You're back, ${message.member}? I reset your AFK!`)
                    .setColor('#defafe')
            ).then(msg => {msg.delete({ timeout: 5000 });})
        }
        if (!message.content.startsWith(prefix) || message.author.bot || (!message.guild)) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command) return;
        if (command.args && !args.length) {
            return message.channel.send(`> You didn't provide any arguments, ${message.author}!`);
        }
        const { cooldowns } = client;
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Discord.Collection());
        }
        const now = Date.now();
        const timestamps = cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || 3) * 1000;
        if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                return message.channel.send(`A little too fast here!\n Wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
            }
        }
        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    
        try {
            command.execute(client, command, message, args, Discord);
        } catch (error) {
            console.error(error);
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#defafe')
                    .setDescription(`There was an error performing this task.`)
            );
        }
    
        
    });
client.on("message", message => {
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(client.user.id)) {
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setTitle('NearBeta')
                .setDescription(
                    `The prefix for ${client.user} is \`n!\`!\nTo see all ${client.user.username}'s commands go to the **[website](https://nearbeta.gitbook.io/nearbeta/)**!\n
                    **[Invite NearBeta](https://discord.com/oauth2/authorize?client_id=822424076491554827&scope=bot&permissions=8) | [Support Server](https://discord.gg/CHg3UDcEuJ) | [Website](https://nearbeta.gitbook.io/nearbeta/)**`
                )
                .setFooter('Thank you for choosing NearBeta!')
        );
    };
});
client.on('messageDelete', message => {
    let snipes = client.snipes.get(message.channel.id) || [];
    if (snipes.length > 5) snipes = snipes.slice(0, 4)

    snipes.unshift({
        msg: message,
        image: message.attachments.first()?.proxyURL || null,
        time: Date.now(),
    })
    
    client.snipes.set(message.channel.id, snipes)
})

client.login(process.env.BOT_TOKEN);