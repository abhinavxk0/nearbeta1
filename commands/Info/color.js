module.exports = {
    name: 'color',
    description: 'sends a random color',
    execute(client, command, message, args, Discord){
        const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

        message.channel.send(
            new Discord.MessageEmbed()
                .setTitle(`Here's your color! - ${randomcolor}`)
                .setColor(randomColor)
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        )
    }
}