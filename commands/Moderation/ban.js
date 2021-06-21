module.exports = {
    name: 'ban',
    async execute(client, command, message, args, Discord){
        const target = await message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || client.users.fetch(args[0]) 
        const reason = args.slice(1).join(" ") || "No specified reason."; 

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
        if (target.id === client.user.id) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription(`You can't ban me.`)
        )
        if(target.id === message.author.id) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription("You can't ban yourself.")
        )

        try {
            const memberTarget = message.guild.members.cache.get(target.id)
            memberTarget.ban({reason})
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#defafe')
                    .setDescription(`${target} was banned.`)
            )
        } catch (err) {
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#defafe')
                    .setDescription(`There was an error performing this task.`)
            )
        }
    }
}