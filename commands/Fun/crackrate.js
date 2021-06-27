module.exports = {
    name: 'crackrate',
    aliases: ['crack'],
    async execute(client, command, message, args, Discord){
        const crack = Math.floor(Math.random() * 100) + 1  

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
            .setTitle(`Crack Calculator`)
            
            .setColor('#defafe')
            .setDescription(`${user} is ${crack}% cracked!`)
        )
    }
}