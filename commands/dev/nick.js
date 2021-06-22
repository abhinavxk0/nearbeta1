const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'nick',
    async execute(client, command, message, args, Discord) {

        const member = message.mentions.members.first() || client.users.fetch(args[0])


        if (!member) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription('Specify a member.')
        );

        const arguments = args.slice(1).join(" ");

        if (!arguments) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor("#defafe")
                .setDescription('Specify a nickname.')
        );

        if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription(`You don't have the \`MANAGE_NICKNAMES\` permission!`)
        )
        if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription(`I don't have the \`MANAGE_NICKNAMES\` permission.`)
        )

        try {

            const memberTarget = message.guild.members.cache.get(member.id)
            memberTarget.setNickname(arguments);

        } catch (err) {
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#defafe')
                    .setDescription(`There was an error performing this task.`)
            )
        }
    }
}