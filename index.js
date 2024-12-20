require('dotenv').config()
const Discord = require('discord.js');
require('discord-reply')
const client = new Discord.Client();
const fs = require('fs');
const DisTube = require('distube');
const { afk } = require('./Collection')
const moment = require('moment')
const db = require('quick.db')
let prefix;

client.cooldowns = new Discord.Collection();
client.commands = new Discord.Collection();
client.snipes = new Discord.Collection();

client.distube = new DisTube(client,
    { searchSongs: false, emitNewSongOnly: true }
);

client.distube.on("playSong", (message, queue, song) => message.channel.send(
    new Discord.MessageEmbed()
        .setColor('#2f3136')
        .setDescription(`**Now Playing:**\n[${song.name}](${song.url}) - \`${song.formattedDuration}\``)
        .setFooter(`Added by: ${song.user.username}`, song.user.displayAvatarURL({ size: 4096, dynamic: true }))
).then(message => { message.delete({ timeout: 60000 }); }))

client.distube.on("addSong", (message, queue, song) => message.channel.send(
    new Discord.MessageEmbed()
        .setColor('#2f3136')
        .setDescription(`**Added:**\n[${song.name}](${song.url}) - \`${song.formattedDuration}\``)
        .setFooter(`Added by: ${song.user.username}`, song.user.displayAvatarURL({ size: 4096, dynamic: true }))
).then(message => { message.delete({ timeout: 10000 }); }))

client.distube.on("empty", message => message.channel.send(
    new Discord.MessageEmbed()
        .setColor('#2f3136')
        .setAuthor('Clearing queue and leaving channel!')
        .setFooter('Reason: Disconnect because voice channel is empty!')
))
client.distube.on("initQueue", queue => {
    queue.autoplay = false;
    queue.volume = 100;
});


const commandFolders = fs.readdirSync('./commands');
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
            name: '@NearBeta prefix',
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
                    .setDescription(`${mentionedMember} is AFK for **${timeAgo}**!\n${reason}`)
                    .setColor('#defafe')
            ).then(msg => { msg.delete({ timeout: 10000 }); })
        }

    }

    const getData = afk.get(message.author.id);
    if (getData) {
        afk.delete(message.author.id)
        message.channel.send(
            new Discord.MessageEmbed()
                .setDescription(`Welcome back ${message.member}! I reset your AFK!`)
                .setColor('#defafe')
        ).then(msg => { msg.delete({ timeout: 10000 }); })
    }

    let prefixes = await db.fetch(`prefix.${message.guild.id}`)
    if (prefixes == null) {

        let mentionRegex = message.content.match(new RegExp(`^<@!?(${client.user.id})>`, "gi"));
        if (mentionRegex) {
            prefix = `${mentionRegex[0]}`;
        } else {
            prefix = "n!"
        }
    } else {
        prefix = prefixes;
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

client.on('messageDelete', message => {
    let snipes = client.snipes.get(message.channel.id) || [];
    if (snipes.length > 5) snipes = snipes.slice(0, 4)
    if (message.author.bot) return;

    snipes.unshift({
        msg: message,
        image: message.attachments.first()?.proxyURL || null,
        time: Date.now(),
    })

    client.snipes.set(message.channel.id, snipes)
})

client.on("message", async message => {
    let customPrefix;
    const dbprefix = await db.fetch(`prefix.${message.guild.id}`)

    if (dbprefix == null){
        customPrefix = 'n!';
    } else {
        customPrefix = dbprefix;
    }

    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(client.user.id) && message.content.includes("prefix")) {
        message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#defafe')
            .setDescription(
                `The prefix for ${client.user} is \`${customPrefix}\`
            **[Invite NearBeta](https://discord.com/oauth2/authorize?client_id=822424076491554827&scope=bot&permissions=8)**
            `
            )
        );
    };
});
client.login(process.env.BOT_TOKEN);