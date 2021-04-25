const emotes = require("discord-emotes");

module.exports = {
    name: 'pat',
    async execute(client, command, message, args, Discord){
        emotes.pat().then(gif =>{    
            const embed = new Discord.MessageEmbed()
            embed.setColor('RANDOM')
            embed.setImage(gif)    
    
        if (args[0]){
            let user = message.mentions.members.first();
                embed.setTitle(':)')
                embed.setDescription(`${message.author.username} pats ${args[0]}!`)
        } else {
                embed.setTitle(':)')
                embed.setDescription(`${message.author.username} wants to get pat!`)
        }
        message.channel.send(embed);
        message.react('835016803683794986');
        })
    }
}