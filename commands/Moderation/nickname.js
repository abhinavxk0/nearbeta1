module.exports = {
    name: 'nickname',
    cooldown: 10,
    aliases: ['nick'],
    async execute(client, command, message, args, Discord) {
        const member = message.mentions.members.first() || message.member;

        if (!member) return message.channel.send(`> Please specify a member, ${message.author.username}!`);

        const arguments = args.slice(1).join(" ");

        if (!arguments) return message.channel.send(`> Please specify a nickname, ${message.author.username}!`)

        try {
            member.setNickname(arguments)
        } catch (err) {
            console.log(err);
            message.channel.send("> I do not have permission to set" + member.toString() + " nickname!")
        }
    }
}