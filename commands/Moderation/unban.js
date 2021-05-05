module.exports = {
    name: 'unban',
    category: "moderation",
    description: 'Unbans user!',
    async execute(client, command, message, args, Discord) {
        let toBan = await client.users.fetch(args[0])

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(perm1Embed)
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(perm2Embed)

        const reason = args[1] || "There was no reason!";
        const perm1Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription('> You need the `BAN_MEMBERS` permission!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')

        const perm2Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription('> I need the `BAN_MEMBERS` permission!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')

        const ubEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Successfully unbanned!')
            .setDescription(`> ${toBan} has been unbanned from the server!`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        message.guild.members.unban(toBan, reason)

        message.channel.send(ubEmbed)
    }
}