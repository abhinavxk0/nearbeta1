const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'hackban',
    async execute(client, command, message, args, Discord){
        
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('You do not have the permission \`BAN_MEMBERS\`')
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply('I do not have the permission \`BAN_MEMBERS\`')

        let userID = args[0]
        let reason = args.slice(1).join(' ') || 'No reason specified.'

        if(!userID) return message.reply('Please specify a user ID to ban.')
        if(isNaN(userID)) return message.reply('The user ID must be a number.')

        if(userID === message.author.id) return message.reply('You cannot ban yourself ;-;')
        if(userID == client.user.id) return message.reply('This is not cool, you cannot ban me with my own command.')

        client.users.fetch(userID).then(async(user) => {
            await message.guild.members.ban(user.id, {reason: reason})
            const bannedEmbed = new MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Hackban successful!')
            .setDescription(`<@${user.id}> was hack-banned by ${message.author}\n${reason}`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
            .setFooter('Hackbanning is basically banning a person who is not in the server you want to ban them from. It does not involve hacking.')
            message.channel.send(bannedEmbed)
            
        }).catch(err => {
            return message.reply(`There has been an error: **${err}**`)
        }) 
        
    }
}