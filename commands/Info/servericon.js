module.exports = {
    name: 'servericon',
    execute(client, command, message, args, Discord){
        const { guild } = message
        const icon = guild.iconURL()
        const name = guild.name
        message.channel.send(
            new Discord.MessageEmbed()
            .setTitle(name)
            .setImage(icon)
        )
    }
}