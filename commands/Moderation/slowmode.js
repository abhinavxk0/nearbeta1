const ms = require('ms')

module.exports = {
    name: 'slowmode',
    cooldown: 30,
    async execute(client, command, message, args, Discord){
        const perm1Embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Error!')
        .setDescription('> You need the `MANAGE_CHANNELS` permission!')
        .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')

        const perm2Embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Error!')
        .setDescription('> I need the `MANAGE_CHANNELS` permission!')
        .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')

        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(perm1Embed)
        if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(perm2Embed)
        if(!args[0]){
            message.channel.setRateLimitPerUser(0);
            return message.channel.send('> Slowmode has been removed!')
        }
        const raw = args[0]
        const milliseconds = ms(raw);

        if(isNaN(milliseconds)) return message.channel.send('> This is not a valid time!')

        if(milliseconds < 1000) return message.channel.send('> The minimum slowmode is 1 second.')

        message.channel.setRateLimitPerUser(milliseconds / 1000);
        message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#b0e0e6')
            .setTitle(`Slowmode updated!`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
            .setDescription(`The slowmode for this channel has been set to ${ms(milliseconds, {
                long: true
            })}!`)
        )
    }
}