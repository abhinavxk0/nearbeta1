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
            .setDescription(
                `The prefix for ${client.user} is \`n!\`!\nTo see all ${client.user.username}'s go to the **[website](https://nearbeta.gitbook.io/nearbeta/)**!\n
                **[Invite NearBeta](https://discord.com/oauth2/authorize?client_id=822424076491554827&scope=bot&permissions=8) | [Support Server](https://discord.gg/CHg3UDcEuJ) | [Website](https://nearbeta.gitbook.io/nearbeta/)**`
            )
            .setFooter('Thank you for choosing NearBeta!')
    message.channel.send(helpEmbed)
    }
}


