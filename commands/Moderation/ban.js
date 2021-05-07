module.exports = {
    name: 'ban',
    category: "moderation",
    description: "bans a user",
    execute(client, command, message, args, Discord) {
        let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args(0));

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(perm1Embed)
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(perm2Embed)
        if(!toBan.hasPermission("ADMINISTRATOR")) return message.channel.send(perm3Embed)
        
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

        const perm3Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription('> The target is an **ADMIN**!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')


        const reason = args[1] || "There was no reason!";

        const bannedEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Successfully banned!')
            .setDescription(`> ${toBan} has been banned from the server!\n**Reason**: ${reason}`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        
        toBan.ban({
            reason: reason
        })
        message.channel.send(bannedEmbed)
    }
}

