// module.exports = {
//     name: 'slowmode',
//     description: '',
//     async execute(client, command, message, args, Discord){
//         if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(perm1Embed)
//         if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(perm2Embed)
//         if (isNaN(args[0])) return message.channel.send(perm3Embed)

//     const perm1Embed = new Discord.MessageEmbed()
//         .setColor('RANDOM')
//         .setTitle('Error!')
//         .setDescription('> You need the `MANAGE_CHANNELS` permission!')
//         .setAuthor('NearBot Beta', 
//         'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')

//     const perm2Embed = new Discord.MessageEmbed()
//         .setColor('RANDOM')
//         .setTitle('Error!')
//         .setDescription('> I need the `MANAGE_CHANNELS` permission!')
//         .setAuthor('NearBot Beta', 
//         'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')

//     const perm3Embed = new Discord.MessageEmbed()
//         .setColor('RANDOM')
//         .setTitle('Error!')
//         .setDescription('> The argument should be number!')
//         .setAuthor('NearBot Beta', 
//         'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')        
    
//         message.channel.setRateLimitPerUser(args[0])
//         message.channel.send(`set to ${args[0]}s`)
//     }
// }