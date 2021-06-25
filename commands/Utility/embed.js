const Discord = require('discord.js')

module.exports = {
    name: "embed",
    description: "make embed",
    async execute(client, command, message, args, Discord) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setTitle(`Error!`)
                
                .setDescription("You need `MANAGE_MESSAGES` permission!"))
        let title = args[0] // args[0] is the first word or number after the command name
        let color = args[1]
        let description = args.slice(2).join(" ") // args.slice(2).join(" ") means we're taking all the arguments including and after the second argument. An argument is just a word or number.
        const error = new Discord.MessageEmbed()
            .setColor('#defafe')
            .setTitle('Error!')
            .setDescription('Usage - `n!embed {Title} {Color} {Description}`\nInfo - Title can only contain one argument, Color has to be specified in **caps**, Description can contain more than one argument.')
        if (!title) return message.channel.send(error) // ! means no, so if there's no title, return and send the error embed
        if (!color) return message.channel.send(error)
        if (!description) return message.channel.send(error)


        const embed = new Discord.MessageEmbed()
            .setTitle(`**${title}**`)
            .setColor(color)
            .setDescription(description)
            .setFooter(`Embed created by ${message.author.username}`)
        message.delete() // this deletes the command

        message.channel.send(embed)
    }
}