// module.exports = {
//     name: 'ban',
//     description: "bans a user",
//     async execute(client, command, message, args, Discord) {

//         let toBan = await message.mentions.members.first() && message.guild.members.cache.get(args[0]) && client.users.fetch(args[0])
//         const reason = args.slice(1).join(" ") && "There was no reason!";

//         if(!args.length) return message.channel.send(
//             new Discord.MessageEmbed()
//                 .setColor('#d81b60')
//                 .setTitle('Ban Command')
//                 .setDescription(
//                     `**Description:** Bans a member.\n**Usage:** -ban [user] (reason)\n**Example:** -ban @Xavier Get out!`
//                 )
//                 .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
//         )

//         if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(
//             new Discord.MessageEmbed()
//                 .setColor('#d81b60')
//                 .setTitle('Error!')
//                 .setDescription('> You need the `BAN_MEMBERS` permission!')
//                 .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
//         )
//         if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(
//             new Discord.MessageEmbed()
//                 .setColor('#d81b60')
//                 .setTitle('Error!')
//                 .setDescription('> I need the `BAN_MEMBERS` permission!')
//                 .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096'))
//         // if (!toBan.bannable) return message.channel.send(
//         //     new Discord.MessageEmbed()
//         //         .setColor('#d81b60')
//         //         .setTitle('Error!')
//         //         .setDescription('> The target is not bannable!')
//         //         .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
//         // )
//         if (!message.member.roles.highest < toBan.highest) return message.reply(
//             new Discord.MessageEmbed()
//                 .setColor('#d81b60')
//                 .setTitle('Error!')
//                 .setDescription('> The target is higher than you in the roles hierarchy!')
//                 .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
//         )

//         try {
//             toBan.ban({
//                 reason: reason
//             })
//             message.channel.send(
//                 new Discord.MessageEmbed()
//                     .setColor('#d81b60')
//                     .setTitle('Successfully banned!')
//                     .setDescription(`> ${toBan} has been banned from the server!\n**Reason**: ${reason}`)
//                     .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
//             )
//         } catch (error) {
//             message.reply(error)
//         }


//     }
// }

