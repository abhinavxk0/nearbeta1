module.exports = {
    name: 'kick',
    cooldown: 10,
    description: 'kicks ppl',
    async execute(client, command, message, args, Discord) {
        // Variables
        const target = await message.mentions.users.first() ||
        message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") ||
        x.user.username === args[0]) || client.users.fetch(args[0])

        const reason = args.slice(1).join(' ') || 'No specified reason.'


        // Permissions Checking
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription("You don't have the `KICK_MEMBERS` permission.")
        )
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription('> I need the `KICK_MEMBERS` permission!')
        )


        // Input Checking
        if (target.id === client.user.id) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`You can't ban me.`)
        )
        if (target.id === message.author.id) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription("You can't ban yourself.")
        )


        // Execution of Task
        try {
            const memberTarget = message.guild.members.cache.get(target.id)
            memberTarget.kick({ reason });
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#defafe')
                    .setDescription(`${target} has been kicked.\nReason: ${reason}`)
                    .setFooter(`Kicked by ${message.author.username}`, message.author.displayAvatarURL({dynamic:true}))
            )
        } catch {
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setDescription("There was an error performing this task.")
            )
        }

    }
}