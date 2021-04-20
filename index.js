const Discord = require('discord.js');
const client = new Discord.Client();
const { config } = require('dotenv');
const fs = require('fs');
const db = require('quick.db');
const got = require('got');
const DisTube = require('distube');
const prefix = '-';
client.cooldowns = new Discord.Collection();

client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
client.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `> Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `> Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
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
            name: 'xavier fixing bugs',
            type: "LISTENING"
        }, 
        status: 'online' })
        .catch(console.error);
    // client.user.setActivity(db.get(`status`))
})

client.on('message', async message => {

    if (!message.content.startsWith(prefix) || message.author.bot || (!message.guild)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    //commmand sorting and executing bullshit

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
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
            return message.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
        }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
        command.execute(client, command, message, args, Discord);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});
client.login('ODIyNDI0MDc2NDkxNTU0ODI3.YFSEGw.kyYrZoqQq74LWNXHd_JekcLaGgw');






