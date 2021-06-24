module.exports = {
    name: 'hackban',
    cooldown: 10,
    async execute(client, command, message, args, Discord) {


        // Variables
        const userID = args[0]
        const reason = args.slice(1).join(' ') || 'No specified reason.'


        // Permissions Checking
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription(`You don't have the \`BAN_MEMBERS\` permission!`)
        )
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription(`I don't have the \`BAN_MEMBERS\` permission.`)
        )


        // Input Checking
        if (isNaN(userID)) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription('The user ID should be number.')
        )
        if (userID === message.author.id) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription("You can't ban yourself.")
        )
        if (userID === client.user.id) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription(`You can't ban me.`)
        )


        // Execution of Task
        client.users.fetch(userID).then(async (user) => {
            await message.guild.members.ban(user.id, { reason: reason })
            message.channel.send(new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription(`<@${user.id}> was banned.\nReason: ${reason}`))

        }).catch(err => {
            console.log(err)
            return message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setDescription(`There was an error performing this task.`)
            )
        })


    }
}