module.exports = {
    name: 'reply',
    cooldown: 10,
    category: "info",
    description: "sends the ping of the bot",
    execute(client, command, message, args, Discord) {
        const replyEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`Replied!`)

        message.reply(replyEmbed)

    }
}