module.exports = {
    name: 'kick',
    category: "moderation",
    description: 'kicks ppl',
    async execute(client, command, message, args, Discord) {
        const target = message.mentions.users.first();

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("> You need the `KICK_MEMBERS` permission!")
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("> I do not have the `KICK_MEMBERS` permission!")

        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("> User has been kicked");
            message.react('🦵')
        } else {
            message.channel.send(`> You coudn't kick that member!`);
        }
    }
}