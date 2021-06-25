module.exports = {
    name: 'membercount',
    execute(client, command, message, args, Discord) {


        // Variables
        const { guild } = message
        const { memberCount, id } = guild
    

        // Execution of Task
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setAuthor('Members')
                .setDescription(memberCount)
                .setTimestamp()
        )


    }
}