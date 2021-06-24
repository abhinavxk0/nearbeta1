module.exports = {
    name: 'clear',
    aliases: ['purge', 'delete'],
    cooldown: 10,
    description: "Clears messages!",
    async execute(client, command, message, args, Discord) {
        // Permission error checking
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#9a0000')
                .setDescription(`You don't have the \`BAN_MEMBERS\` permission.`)
        )
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#9a0000')
                .setDescription(`I don't have the \`BAN_MEMBERS\` permission.`)
        )
        // Input error checking
        if (isNaN(args[0])) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#9a0000')
                .setDescription(`The amount of messages to be cleared has to be a number.`)
        );
        if (args[0] > 250) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#9a0000')
                .setDescription(`The amount of messages to be cleared has to be between 1 and 250.`)
        );
        if (args[0] < 1) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#9a0000')
                .setDescription(`The amount of messages to be cleared has to be between 1 and 250.`)
        );
        // Execution of task
        try {
            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages)
            });
            message.delete()
        } catch (err) {
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#9a0000')
                    .setDescription('There was an error performing this task.')
            )
        }
    }
}




