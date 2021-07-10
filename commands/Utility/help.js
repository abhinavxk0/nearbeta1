module.exports = {
    name: 'help',
    aliases: ['commands'],
    category: "info",
    description: "help command",
    execute(client, command, message, args, Discord) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#defafe')
            .setTitle('Help Command')
            .setThumbnail(client.user.displayAvatarURL({ size: 4096, dynamic: true }))
            .addField([
                `**Info:** \`anime, avatar, color, corona, mcserver, membercount, role-info, serverinfo, spotify, userinfo, youtube\``,
                `**Moderation:** \`ban, clear, drag, hackban, kick, nick, resetnick, unban\``,
                `**Actions:** \`hug, kiss, pat\``,
                `**Fun:**\`8ball, afk, crackrate, dankmeme, simprate, wholesomememe\``,
                `**Utility:** \`embed, help, invite, ping, servers, steal\``
            ])
            .setDescription(
                `The prefix for ${client.user} is \`n!\`!\n
                [Invite NearBeta](https://discord.com/oauth2/authorize?client_id=822424076491554827&scope=bot&permissions=8) | [Support Server](https://discord.gg/CHg3UDcEuJ)`
            )
            .setFooter('Thank you for choosing NearBeta!')
    message.channel.send(helpEmbed)
    }
}


