module.exports = {
    name: 'servers',
    async execute(client, command, message, args, Discord) {
        const sEmbed = new Discord.MessageEmbed()
            .setColor('#defafe')
            .setAuthor(`Currently in ${client.guilds.cache.size} servers!`)

        message.channel.send(sEmbed)
    }
}