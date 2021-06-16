module.exports = {
    name: 'servericon',
    execute(client, command, message, args, Discord){
        const { guild } = message
        const icon = guild.iconURL({ size: 4096, dynamic: true })
        const name = guild.name
        message.channel.send(
            new Discord.MessageEmbed()
            .setTitle(name)
            .setImage(icon)
            .setColor('#d81b60')
        )
    }
}