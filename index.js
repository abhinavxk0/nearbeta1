const Discord = require('discord.js');
const client = new Discord.Client();
const { config } = require('dotenv');
const fs = require('fs');
const db = require('quick.db');
const got = require('got');
const DisTube = require('distube');
const prefix = '-';

client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
client.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `> Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `> Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}


client.once('ready', () => {
    console.log('NearBeta is online.')
    client.user.setActivity(db.get(`status`))
})

client.on('message', async message => {

    if (!message.content.startsWith(prefix) || message.author.bot || (!message.guild)) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    //commmand sorting and executing bullshit

    if (command === 'ping') {
        client.commands.get('ping').execute(client, command, message, args, Discord);
    } else if (command === 'help') {
        client.commands.get('help').execute(client, command, message, args, Discord);
    } else if (command === 'dankmeme') {
        client.commands.get('dankmeme').execute(client, command, message, args, Discord);
    } else if (command === 'avatar') {
        client.commands.get('avatar').execute(client, command, message, args, Discord);
    } else if (command === 'mcserver') {
        client.commands.get('mcserver').execute(client, command, message, args, Discord);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(client, command, message, args, Discord);
    } else if (command === 'unban') {
        client.commands.get('unban').execute(client, command, message, args, Discord);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(client, command, message, args, Discord);
    } else if (command === 'wholesomememe') {
        client.commands.get('wholesomememe').execute(client, command, message, args, Discord);
    } else if (command === 'play') {
        client.commands.get('play').execute(client, command, message, args, Discord);
    } else if (command === 'stop') {
        client.commands.get('stop').execute(client, command, message, args, Discord);
    } else if (command === 'skip') {
        client.commands.get('skip').execute(client, command, message, args, Discord);
    } else if (command === 'status'){
        client.commands.get('status').execute(client, command, message, args, Discord);
    } else if (command === 'queue'){
        client.commands.get('queue').execute(client, command, message, args, Discord);
    } else if (command === '3d'){
        client.commands.get('3d').execute(client, command, message, args, Discord);
    } else if (command === 'bassboost'){
        client.commands.get('bassboost').execute(client, command, message, args, Discord);
    } else if (command === 'echo'){
        client.commands.get('echo').execute(client, command, message, args, Discord);
    } else if (command === 'karaoke'){
        client.commands.get('karaoke').execute(client, command, message, args, Discord);
    } else if (command === 'nightcore'){
        client.commands.get('nightcore').execute(client, command, message, args, Discord);
    } else if (command === 'vaporwave'){
        client.commands.get('vaporwave').execute(client, command, message, args, Discord);
    } else if (command === 'loop'){
        client.commands.get('loop').execute(client, command, message, args, Discord);
    } else if (command === 'corona'){
        client.commands.get('corona').execute(client, command, message, args, Discord);
    } else if (command === 'reportbug'){
        client.commands.get('reportbug').execute(client, command, message, args, Discord);
    } else if (command === 'anime'){
        client.commands.get('anime').execute(client, command, message, args, Discord);
    } else if (command === 'clear'){
        client.commands.get('clear').execute(client, command, message, args, Discord);
    }
});



client.login('ODIyNDI0MDc2NDkxNTU0ODI3.YFSEGw.yRhKr4BQKMR2QrPzbLdpr9nPPUE');



