module.exports = {
    name: 'resetnick',
    aliases: ['resetnickname', 'reset'],
    async execute(client, command, message, args, Discord) {


        // Permissions Checking
        if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription(`You don't have the \`MANAGE_NICKNAMES\` permission!`)
        )
        if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription(`I don't have the \`MANAGE_NICKNAMES\` permission.`)
        )


        // Variables
        const member = message.mentions.members.first() || client.users.fetch(args[0])


        // Input Checking
        if (!member) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription('Specify a member.')
        );


        // Execution of Task
        try {
            const memberTarget = message.guild.members.cache.get(member.id)
            memberTarget.setNickname(null);
        } catch (err) {
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#defafe')
                    .setDescription(`There was an error performing this task.`)
            )
        }


    }
}