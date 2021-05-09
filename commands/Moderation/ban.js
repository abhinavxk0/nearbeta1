module.exports = {
    name: 'ban',
    category: "moderation",
    description: "bans a user",
    execute(client, command, message, args, Discord) {
        let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args(0));
        
        const perm1Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription('> You need the `BAN_MEMBERS` permission!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(perm1Embed)

        const perm2Embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Error!')
        .setDescription('> I need the `BAN_MEMBERS` permission!')
        .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(perm2Embed)

        const perm4Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription('> The target is higher than you in the roles hierarchy!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        if (!message.member.roles.highest.position < toBan.roles.highest.position) return message.reply(perm4Embed)

        const perm3Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription('> The target is not bannable!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
         if (!toBan.bannable) return message.channel.send(perm3Embed)



        const reason = args[1] || "There was no reason!";

        const bannedEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Successfully banned!')
            .setDescription(`> ${toBan} has been banned from the server!\n**Reason**: ${reason}`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        
        try{
            toBan.ban({
                reason: reason
            })
            message.channel.send(bannedEmbed)
        } catch (error){
            message.reply(error)
        }


    }
}

