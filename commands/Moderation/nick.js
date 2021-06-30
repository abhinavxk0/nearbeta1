module.exports = {
    name: 'nick',
    aliases: ['setnick', 'nickname'],
    cooldown: 10,
    async execute(client, command, message, args, Discord) {


        // Variables
        const member = message.mentions.members.first() || client.users.fetch(args[0])
        const arguments = args.slice(1).join(" ");


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


        // Input Checking
        if (!member) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#defafe')
                .setDescription('Specify a member.')
        );
        if (!arguments) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor("#defafe")
                .setDescription('Specify a nickname.')
        );


        // Execution of Task
        try {
            const memberTarget = message.guild.members.cache.get(member.id)
            memberTarget.setNickname(arguments);
        } catch (err) {
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#defafe')
                    .setDescription(`There was an error performing this task.`)
            )
        }


    }
}