const emotes = require("discord-emotes");

module.exports = {
    name: 'kiss',
    async execute(client, command, message, args, Discord){
        
        emotes.kiss().then(gif =>{    
        const embed = new Discord.MessageEmbed()
        embed.setColor('RANDOM')
        embed.setImage(gif)    

    if (args[0]){
        let user = message.mentions.members.first();
            embed.setTitle(':)')
            embed.setDescription(`${message.author.username} hugs ${args[0]}!`)
    } else {
            embed.setTitle(':)')
            embed.setDescription(`${message.author.username} wants a hug!`)
    }
    message.channel.send(embed);
    message.react('835016803683794986');
    })
    
}
}
