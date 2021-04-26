module.exports = {
    name: 'resetnickname',
    cooldown: 10,
    aliases: ['resetnick'],
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
            .setDescription(`> Please specify a member, ${message.author.username}!`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')

        const err2Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription(`> I do not have permission to reset ${args[0]}'s nickname!`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        //_________________________________________EMBEDS___________________________________________________________

        if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(perm1Embed)
        if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(perm2Embed)

        const member = message.mentions.members.first() || message.member;

        if (!member) return message.channel.send(err1Embed);

        try {
            member.setNickname(null)
        } catch (err) {
            message.channel.send(err2Embed)
        }
    }

}