module.exports = {
    name: 'gayrate',
    aliases: ['howgay'],
    description: 'simp lol',
    execute(client, command, message, args, Discord){
        const simp = Math.floor(Math.random() * 100) + 1  

        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user;
        } else {
            user = message.author;
        }
        return message.channel.send(
            new Discord.MessageEmbed()
            .setTitle(`Gay Calculator`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
            .setColor('#d81b60')
            .setDescription(`${user} is ${simp}% gay!`)
        )
    }
}