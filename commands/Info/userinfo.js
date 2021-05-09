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
          .setColor('#7fffd4')
          .addFields(
            {
              name: '<:5727_GreenTick:839167561341992981>  User tag',
              value: user.tag,
              inline: true 
            },
            {
              name: '<:5727_GreenTick:839167561341992981>  Is bot',
              value: user.bot,
              inline: true 
            },
            {
              name: '<:5727_GreenTick:839167561341992981>  Nickname',
              value: member.nickname || 'None',
              inline: true 
            },
            {
              name: '<:5727_GreenTick:839167561341992981>  Joined Server',
              value: new Date(member.joinedTimestamp).toLocaleDateString(),
              inline: true 
            },
            {
              name: '<:5727_GreenTick:839167561341992981>  Joined Discord',
              value: new Date(user.createdTimestamp).toLocaleDateString(),
              inline: true 
            },
            {
              name: '<:5727_GreenTick:839167561341992981>  Roles',
              value: member.roles.cache.size - 1,
              inline: true 
            }
          )
    
        message.channel.send(embed)
      
    }
}
