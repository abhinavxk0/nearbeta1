module.exports = {
    name: 'invite',
    aliases: ['inv'],
    execute(client, command, message, args, Discord) {
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setTitle('Invite NearBeta from here!')
                .setURL('https://discord.com/oauth2/authorize?client_id=822424076491554827&scope=bot&permissions=8')
                

        )
    }
}