const moment = require('moment')

module.exports = {
    name: 'serverinfo',
    async execute(client, command, message, args, Discord){
      const guild = message.guild
      const embed = new Discord.MessageEmbed()
        .setTitle(message.guild.name)
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        .setColor('defafe')
        .addField('__General Info__', [
              `**ID**: ${guild.id}`,
              `**Name**: ${guild.name}`,
              `**Owner**: ${guild.owner}`
        ])
        .addField('__Counts__', [
          `**Role:** ${guild.roles.cache.size} Roles`,
          `**Channels**: ${
            guild.channels.cache.size
          } Total (__Text__: ${guild.channels.cache.filter(
            (ch) => ch.type === 'text'
          ).size}, __Voice__: ${guild.channels.cache.filter(
            (ch) => ch.type === 'voice'
          ).size})`,
          `**Emojis**: ${guild.emojis.cache.size} (__Regular__: ${guild.emojis.cache.filter(
            (e) => !e.animated).size}, __Animated__: ${guild.emojis.cache.filter(
              (e) => e.animated).size
          })`
        ])
        .addField("__Additional Information__", [
          `**Created**: ${moment(guild.createdTimestamp).format('LLL')}, ${moment(
            guild.createdTimestamp
          ).fromNow()}`,
          `**Region**: ${guild.region.toUpperCase()}`
        ])
        .addField('__Boost Information__', [
          `**Boost Tier**: ${guild.premiumTier ? `Tier ${guild.premiumTier}` : 'None'}`,
          `**Boost Count**: ${guild.premiumSubscriptionCount || '0'} Boosts`
        ])


        message.channel.send(embed)
    }
}