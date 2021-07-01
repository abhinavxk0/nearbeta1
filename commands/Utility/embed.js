module.exports = {
    name: "embed",
    async execute(client, command, message, args, Discord) {

        let title = args[0]
        let description = args.slice(2).join(" ")
        const error = new Discord.MessageEmbed()
            .setColor('#defafe')
            .setTitle('Error!')
            .setDescription('Usage - `n!embed {Title} {Color} {Description}')
        if (!title) return message.channel.send(error) 
        if (!color) return message.channel.send(error)
        if (!description) return message.channel.send(error)

        const embed = new Discord.MessageEmbed()
            .setTitle(title)
            .setColor('#defafe')
            .setDescription(description)
            .setFooter(`Embed created by ${message.author.username}`, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
        message.delete() // this deletes the command

        message.channel.send(embed)
    }
}