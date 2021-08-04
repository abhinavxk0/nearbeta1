const Discord = require("discord.js")
module.exports = {
    name: "iosalert",
    aliases: ['iosnotif'],
    description: "Make any alert on the iOS Lock Screen.",
    async execute(client, command, message, args, Discord) {
        const sentence = args.join(" ")
        if (!sentence) return message.channel.send('Please specify an alert.')
        let embed = new Discord.MessageEmbed()
            .setTitle('iOS Alert')
            .setImage(`https://api.popcatdev.repl.co/alert?text=${encodeURIComponent(sentence)}`)
            .setColor('RANDOM')
            .setFooter(' ');
        message.channel.send(embed)
    }
}