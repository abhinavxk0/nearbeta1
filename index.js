const Discord = require('discord.js');
const client = new Discord.Client();
const { config } = require('dotenv');
const fs = require('fs');
const DisTube = require('distube');
const prefix = 'n!';

require('dotenv').config()

client.cooldowns = new Discord.Collection();

client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true, leaveOnEmpty: true, });
client.distube.on("playSong", (message, queue, song) => message.channel.send(
    new Discord.MessageEmbed()
        .setColor('#2f3136')
        .setTitle(`Now Playing`)
        
        .setDescription(`${song.name} - ${song.formattedDuration}`)
        .setThumbnail(song.thumbnail)
        .addFields(
            {
                name: 'Likes',
                value: song.likes,
                inline: true,
            },
            {
                name: 'Dislikes',
                value: song.dislikes,
                inline: true,
            },
            {
                name: 'Views',
                value: song.views,
                inline: true,
            },
        )
        .setFooter(`Added by: ${song.user.username}`, song.user.displayAvatarURL({ size: 4096, dynamic: true }))
))
client.distube.on("addSong", (message, queue, song) => message.channel.send(
    new Discord.MessageEmbed()
        .setColor('#2f3136')
        .setTitle(`Added`)
        
        .setDescription(`${song.name} - ${song.formattedDuration}`)
        .setThumbnail(song.thumbnail)
        .addFields(
            {
                name: 'Likes',
                value: song.likes,
                inline: true,
            },
            {
                name: 'Dislikes',
                value: song.dislikes,
                inline: true,
            },
            {
                name: 'Views',
                value: song.views,
                inline: true,
            },
        )
        .setFooter(`Added by: ${song.user.username}`, song.user.displayAvatarURL({ size: 4096, dynamic: true }))
))
client.distube.on("empty", message => message.channel.send(
    new Discord.MessageEmbed()
        .setColor('#2f3136')
        .setTitle('Clearing queue and leaving channel!')
        
        .setDescription('**Reason:** Disconnect because voice channel is empty!')
))


client.commands = new Discord.Collection();
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
            return message.channel.send(`> Chile, a little too fast here!\n Wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
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


client.login(process.env.BOT_TOKEN);