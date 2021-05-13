module.exports = {
    name: 'resetnickname',
    cooldown: 10,
    aliases: ['resetnick'],
    async execute(client, command, message, args, Discord) {
        if(!args.length) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#d81b60')
                .setTitle('Nickname Command')
                .setDescription(
                    `**Description:** Resets a members's nickname.\n**Usage:** -resetnickname [user]\n**Example:** -resetnickname @Xavier`
                )
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        )

        if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Error!')
            .setDescription('> You need the `MANAGE_NICKNAMES` permission!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        )
        if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Error!')
            .setDescription('> I need the `MANAGE_NICKNAMES` permission!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        )

        const member = message.mentions.members.first() || message.member;

        if (!member) return message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Error!')
            .setDescription(`> Please specify a member, ${message.author.username}!`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        );

        try {
            member.setNickname(null)
        } catch (err) {
            message.channel.send(
                err2Embed = new Discord.MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Error!')
            .setDescription(`> I do not have permission to reset ${args[0]}'s nickname!`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
            )
        }
    }

}