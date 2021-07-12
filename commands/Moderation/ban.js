const { WebhookClient } = require('discord.js')

module.exports = {
    name: 'ban',
    cooldown: 10,
    async execute(client, command, message, args, Discord){


        // Variables
        const target = await message.mentions.users.first() || 
        message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || 
        x.user.username === args[0]) || client.users.fetch(args[0]) 

        const reason = args.slice(1).join(' ') || 'No specified reason.'
        const Areason = `Banned by ${message.author.id}, Reason:  ${args.slice(1).join(' ')}` || 'No specified reason.'


        // Permissions Checking
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`You don't have the \`BAN_MEMBERS\` permission!`)
        )
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`I don't have the \`BAN_MEMBERS\` permission.`)
        )


        // Input Checking
        if (target.id === client.user.id) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`You can't ban me.`)
        )
        if(target.id === message.author.id) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription("You can't ban yourself.")
        )
        if (!message.guild.member(target.id)) return message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription('That member does not exist in this server.')
        )


        // Execution of Task
        try {
            const memberTarget = message.guild.members.cache.get(target.id)
            memberTarget.ban({Areason})
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#defafe')
                    .setDescription(`${target} has been banned.\nReason: ${reason}`)
                    .setFooter(`Banned by ${message.author.username}`, message.author.displayAvatarURL({dynamic:true}))
            )
        } catch (err) {
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setDescription(`There was an error performing this task.`)
            )
        }


    }
}