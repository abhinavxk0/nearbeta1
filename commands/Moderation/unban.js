module.exports = {
    name: 'unban',
    async execute(client, command, message, args, Discord) {

        const target = await client.users.fetch(args[0])
        const reason = args.join('') || "There was no reason!";

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

        try {
            message.guild.members.unban(target, reason)
            message.channel.send(
                new Discord.MessageEmbed()
                .setColor('#d81b60')
                .setTitle('Successfully unbanned!')
                .setDescription(`> ${target} has been unbanned from the server!`)
                .setFooter(`Unbanned by ${message.author.username}`)
        )} catch (err){
            console.log(err)
        }
        
        
    }
}