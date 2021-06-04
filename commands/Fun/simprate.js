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
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
            .setColor('#d81b60')
            .setDescription(`${user} is ${simp}% simp!`)
        )
    }
}