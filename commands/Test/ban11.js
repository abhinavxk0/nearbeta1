// module.exports = {
//     name: 'ban11',
//     description: 'Diagnosing Ban Command',
//     async execute(client, command, message, args, Discord){
//         // Variables
//         const member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || client.users.fetch(args[0])
//         const reason = args.slice(1).join(" ") || "There was no reason!";

//         if(!args.length) return message.channel.send('Mention a target.')
//         if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`${message.author} does not have the permission.`)
//         if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`I do not have the permission.`)
//         // if (
//         //     message.member.roles.highest.postion <=
//         //     member.roles.highest.postion
//         // ) 
//         //     return message.channel.send(
//         //         'Role Perm Error 1'
//         //     )
// try {
//     message.guild.members.ban(member, reason)
//     message.guild.members.ban(member.id, reason)
//     message.channel.send(`${member} has been banned.\n${reason}`)
// } catch (err){
//     message.member.send(err)
// }
//     }
// }