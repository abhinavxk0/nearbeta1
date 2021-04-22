const DisTube = require('distube');

module.exports = {
    name: 'skip',
    category: "music",
    description: 'skips music',
    async execute(client, command, message, args, Discord){
        if (!message.member.voice.channel) return message.channel.send('> You must be in a voice channel to execute this command!')
        if(!message.member.roles.cache.some(role => role.name === 'DJ')) return message.channel.send('> You need the `DJ` role to skip songs!\n To skip songs make a role named `DJ`!')


        client.distube.skip(message)
    }
}