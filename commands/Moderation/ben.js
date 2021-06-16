module.exports = {
    name: 'ben',
    aliases: ['bon'],
    description: 'fake ban',
    execute(client, command, message, args, Discord){
        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user;
        } else {
            user = message.author;
        }

        const reason = args.slice(1).join(" ") || "There was no reason!";

        message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#d81b60')
                .setTitle('Successfully banned!')
                .setDescription(`> ${user} has been banned from the server!\n**Reason**: ${reason}`)
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
        )
    }
}