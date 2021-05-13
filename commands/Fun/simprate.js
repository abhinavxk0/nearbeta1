module.exports = {
    name: 'simprate',
    aliases: ['howsimp'],
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
            .setTitle(`Simp Calculator`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
            .setColor('#2f3136')
            .setDescription(`${user} is ${simp}% simp!`)
        )
    }
}