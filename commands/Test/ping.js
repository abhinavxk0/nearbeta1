module.exports = {
    name: 'ping',
    cooldown: 10,
    category: "info",
    description: "sends the ping of the bot",
    execute(client, command, message, args, Discord) {
        const pingEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`🏓  Pong! ${client.ws.ping}ms`)

        message.channel.send(pingEmbed)

    }
}