module.exports = {
    name: 'membercount',
    execute(client, command, message, args, Discord) {


        // Variables
        const { guild } = message
        const { memberCount } = guild
        const botSize = message.guild.members.cache.filter( m => m.user.bot).size
        const humans = memberCount - botSize
    

        // Execution of Task
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setAuthor('Members')
                .setDescription(`Human count : ${humans}\nBot count : ${botSize}`)
                .setTimestamp()
        )


    }
}