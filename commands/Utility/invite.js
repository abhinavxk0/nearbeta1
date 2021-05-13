module.exports = {
    name: 'invite',
    aliases: ['inv'],
    execute(client, command, message, args, Discord) {
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#d81b60')
                .setTitle('Invite NearBeta from here!')
                .setURL('https://discord.com/oauth2/authorize?client_id=822424076491554827&scope=bot&permissions=8')
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')

        )
    }
}