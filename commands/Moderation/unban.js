const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'unban',
    async execute(client, command, message, args, Discord) {

        const id = args[0]
        const reason = args.join('') || "There was no reason!";
        const bannedMembers = await message.guild.fetchBans();

        if (!bannedMembers.find((user) => user.user.id === id)) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`\`${id}\` does not exist or is not banned in this guild!`)
        )

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

        

        try {
            message.guild.members.unban(id, reason)
            message.channel.send(
                new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription(`<@${id}> has been unbanned.`)
                .setFooter(`Unbanned by ${message.author.username}`, message.author.displayAvatarURL({dynamic : true}))
        )} catch (err){
            console.log(err)
        }
        
        
    }
}