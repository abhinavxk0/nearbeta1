module.exports = {
    name: 'serverinfo',
    async execute(client, command, message, args, Discord){
        const { guild } = message

        const { name, region, memberCount, owner, afkTimeout, rulesChannel, premiumSubscriptionCount, premiumTier, id, banner } = guild
        const icon = guild.iconURL({ size: 4096, dynamic: true })

    let embed = new Discord.MessageEmbed()
      .setTitle('Server Info')
      .setThumbnail(icon)
      .setColor('#d81b60')
      .addFields(
        {
          name: 'Server Name',
          value: name,
          inline: true, 
        },
        {
          name: 'Server ID',
          value: id,
          inline: true,
        },
        {
          name: 'Region',
          value: region,
          inline: true,
        },
        {
          name: 'Members',
          value: memberCount,
          inline: true,
        },
        {
          name: 'Owner',
          value: owner.user.tag,
          inline: true,
        },
        {
          name: 'AFK Timeout',
          value: afkTimeout / 60 || '<:RedTick:839690444320276532> None',
          inline: true,
        },
        {
          name: 'Rules Channel',
          value: rulesChannel || '<:RedTick:839690444320276532> None',
          inline: true,
        },
        {
          name: 'Boosts',
          value: premiumSubscriptionCount || '<:RedTick:839690444320276532> None',
          inline: true,
        },
        {
          name: 'Boost Level',
          value: premiumTier || '<:RedTick:839690444320276532> None',
          inline: true,
        },
      )

    message.channel.send(embed)
    }
}