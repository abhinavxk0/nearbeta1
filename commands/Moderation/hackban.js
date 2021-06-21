const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'hackban',
    async execute(client, command, message, args, Discord){
        
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

        let userID = args[0]
        let reason = args.slice(1).join(' ') || 'No specified reason.'

        if(isNaN(userID)) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription('The user ID should be number.')
        )
        if(userID === message.author.id) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription("You can't ban yourself.")
        )
        if (userID === client.user.id) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription(`You can't ban me.`)
        )

        client.users.fetch(userID).then(async(user) => {
            await message.guild.members.ban(user.id, {reason: reason})
            message.channel.send(new Discord.MessageEmbed()
            .setColor('#defafe')
            .setDescription(`<@${user.id}> was banned.\n${reason}`))
            
        }).catch(err => {
            console.log(err)
            return message.channel.send(
                new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription(`There was an error performing this task.`)
            )
        }
        ) 
    }
}