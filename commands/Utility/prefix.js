module.exports = {
    name: 'prefix',
    async execute(client, command, message, args, Discord) {
        const embed = new Discord.MessageEmbed()
            .setTitle('Help Command')
            .setColor('#defafe')
            .setThumbnail(client.user.displayAvatarURL({ size: 4096, dynamic: true }))
            .setDescription(
                `The prefix for ${client.user} is \`n!\`
        **[Invite NearBeta](https://discord.com/oauth2/authorize?client_id=822424076491554827&scope=bot&permissions=8)**
        `)
        message.lineReply(embed)
    }
}