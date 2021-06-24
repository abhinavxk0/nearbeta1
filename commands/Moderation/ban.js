module.exports = {
    name: 'ban',
    cooldown: 10,
    async execute(client, command, message, args, Discord){
        // Variables
        const target = await message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || client.users.fetch(args[0]) 
        let reason = args.slice(1).join(' ') || 'No specified reason.'

        // Permission error checking
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#9a0000')
                .setDescription(`You don't have the \`BAN_MEMBERS\` permission!`)
        )
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#9a0000')
                .setDescription(`I don't have the \`BAN_MEMBERS\` permission.`)
        )
        if (target.id === client.user.id) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#9a0000')
                .setDescription(`You can't ban me.`)
        )
        if(target.id === message.author.id) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#9a0000')
                .setDescription("You can't ban yourself.")
        )
        // execution of task
        try {
            const memberTarget = message.guild.members.cache.get(target.id)
            memberTarget.ban({reason})
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#defafe')
                    .setDescription(`${target} has been banned.\nReason: ${reason}`)
                    .setFooter(`Banned by ${message.author.username}`)
            )
        } catch (err) {
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#9a0000')
                    .setDescription(`There was an error performing this task.`)
            )
        }
    }
}