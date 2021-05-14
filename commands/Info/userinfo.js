const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'userinfo',
    aliases: ['whois'],
    async execute(client, command, message, args, Discord){
        const { guild, channel } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)
    
        const embed = new MessageEmbed()
          .setAuthor(`User info for ${user.username}`, user.displayAvatarURL({ size: 4096, dynamic: true }))
          .setColor('#d81b60')
          .addFields(
            {
              name: 'User tag',
              value: user.tag,
              inline: true 
            },
            {
              name: 'Is bot',
              value: user.bot || 'Not a bot',
              inline: true 
            },
            {
              name: 'Nickname',
              value: member.nickname || 'None',
              inline: true 
            },
            {
              name: 'Joined Server',
              value: new Date(member.joinedTimestamp).toLocaleDateString(),
              inline: true 
            },
            {
              name: 'Joined Discord',
              value: new Date(user.createdTimestamp).toLocaleDateString(),
              inline: true 
            },
            {
              name: 'Roles',
              value: member.roles.cache.size - 1,
              inline: true 
            }
          )
    
        message.channel.send(embed)
      
    }
}
