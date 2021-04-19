const { execute } = require("./avatar");

module.exports = {
    name: 'queue',
    category: "music",
    description: 'shows song queue',
    async execute(client, command, message, args, Discord){
        if (!message.member.voice.channel) return message.channel.send('> You must be in a voice channel to execute this command!')
        
        let queue = client.distube.getQueue(message);
        message.channel.send('> Current queue:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));
    }
}