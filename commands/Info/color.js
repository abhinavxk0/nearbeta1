module.exports = {
    name: 'color',
    description: 'sends a random color',
    execute(client, command, message, args, Discord){
        const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

        message.channel.send(
            new Discord.MessageEmbed()
                .setTitle(`Here's your color! - ${randomColor}`)
                .setColor(randomColor)
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
        )
    }
}