const emotes = require("discord-emotes");

module.exports = {
    name: 'kiss',
    async execute(client, command, message, args, Discord) {

        emotes.kiss().then(gif => {
            const embed = new Discord.MessageEmbed()
            embed.setColor('#d81b60')
            embed.setImage(gif)

            if (args[0]) {
                let user = message.mentions.members.first();
                embed.setTitle(':)')
                embed.setDescription(`${message.author.username} kisses ${args[0]}!`)
            } else {
                embed.setTitle(':)')
                embed.setDescription(`${message.author.username} wants a kiss!`)
            }
            message.channel.send(embed);
        })

    }
}
