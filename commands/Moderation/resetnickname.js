module.exports = {
    name: 'resetnickname',
    cooldown: 10,
    aliases: ['resetnick'],
    async execute(client, command, message, args, Discord) {

        if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#9a0000')
            .setDescription("You don't have the `MANAGE_NICKNAMES` permission.")
        )
        if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#9a0000')
            .setDescription("I don't have the `MANAGE_NICKNAMES` permission.")
        )


        const member = message.mentions.members.first() || message.member;

        if (!member) return message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#9a0000')
            .setDescription(`Please specify a member.`)
        );

        try {
            member.setNickname(null)
        } catch (err) {
            message.channel.send(
                new Discord.MessageEmbed()
                .setColor('#9a0000')
                .setDescription(`There was an error performing this task.`)
            )
        }
    }

}