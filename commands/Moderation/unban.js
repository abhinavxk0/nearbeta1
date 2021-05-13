module.exports = {
    name: 'unban',
    category: "moderation",
    description: 'Unbans user!',
    async execute(client, command, message, args, Discord) {
        if(!args.length) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#d81b60')
                .setTitle('Unban Command')
                .setDescription(
                    `**Description:** Unbans a user.\n**Usage:** -unban [user id]\n**Example:** -unban 536991182035746816`
                )
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        )

        let toBan = await client.users.fetch(args[0])
        const reason = args.join('') || "There was no reason!";

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Error!')
            .setDescription('> You need the `BAN_MEMBERS` permission!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        )
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Error!')
            .setDescription('> I need the `BAN_MEMBERS` permission!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        )

        message.guild.members.unban(toBan, reason)

        message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Successfully unbanned!')
            .setDescription(`> ${toBan} has been unbanned from the server!`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        )
    }
}