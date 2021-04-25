module.exports = {
    name: 'nickname',
    cooldown: 10,
    aliases: ['nick'],
    async execute(client, command, message, args, Discord) {
        //_________________________________________EMBEDS___________________________________________________________
        const perm1Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription('> You need the `MANAGE_NICKNAMES` permission!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        
        const perm2Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription('> I need the `MANAGE_NICKNAMES` permission!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')

        const err1Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription(`> Please specify a user!`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')

        const err2Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription("> Please specify a nickname!")
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')

        const err3Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription("> I do not have permission to set" + member.toString() + " nickname!")
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        //__________________________________________________________________________________________________________
        if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(perm1Embed)
        if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(perm2Embed)

        const member = message.mentions.members.first() || message.member;

        if (!member) return message.channel.send(err1Embed);

        const arguments = args.slice(1).join(" ");

        if (!arguments) return message.channel.send(err2Embed)

        try {
            member.setNickname(arguments)
        } catch (err) {
            message.channel.send(err3Embed)
            console.log(err)
        }
        message.delete()
    }
}