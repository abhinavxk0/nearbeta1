module.exports = {
    name: 'resetnickname',
    cooldown: 10,
    aliases: ['resetnick'],
    async execute(client, command, message, args, Discord) {
        const member = message.mentions.members.first() || message.member;

        if (!member) return message.channel.send(`> Please specify a member, ${message.author.username}!`);

        try {
            member.setNickname(null)
        } catch (err) {
            message.channel.send("> I do not have permission to reset" + member.toStringe() + "nickname!")
        }
    }

}