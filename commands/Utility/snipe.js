const moment = require('moment')

module.exports = {
    name: 'snipe',
    async execute(client, command, message, args, Discord){
        const snipes = client.snipes.get(
            message.channel.id
        )
        if(!snipes) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription('There are no deleted messages in this channel!')
        )
        const snipe = +args[0] - 1 || 0;
        const target = snipes[snipe];
        if(!target) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription(`There is only ${snipes.length} messages!`)
        )
        const { msg, time, image } = target;
        message.channel.send(
            new Discord.MessageEmbed()
                .setAuthor(msg.author.tag, msg.author.displayAvatarURL({dynamic: true}))
                .setImage(image)
                .setFooter(`${moment(time).fromNow()} | ${snipe + 1} / ${snipes.length}`)
                .setColor('#defafe')
                .setDescription(msg.content)
        )
    }
}