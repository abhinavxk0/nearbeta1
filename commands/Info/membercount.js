module.exports = {
    name: 'membercount',
    execute(client, command, message, args, Discord) {


        // Variables
        const { guild } = message
        const { memberCount, id } = guild
        const humanCount = memberCount - message.guild.members.cache.filter((m) => m.user.bot).size
    

        // Execution of Task
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setAuthor('Members')
                .addFields(
                    {
                        name: 'Total Count',
                        value: memberCount,
                        inline: true,
                    },
                    {
                        name: 'Human Count',
                        value: humanCount,
                        inline: true,
                    },
                    {
                        name: 'Bot Count',
                        value: message.guild.members.cache.filter((m) => m.user.bot).size,
                        inline: true,
                    }
                )
                .setTimestamp()
        )


    }
}