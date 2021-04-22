module.exports = {
    name: 'ban',
    category: "moderation",
    description: "bans a user",
    execute(client, command, message, args, Discord) {
        let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args(0));

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("> You need the `BAN_MEMBERS` permission!")
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("> I do not have the `BAN_MEMBERS` permission!")

        const reason = args[1] || "There was no reason!";

        toBan.ban({
            reason: reason
        })
        message.channel.send(`> ${toBan} has been banned from the server!\n**Reason**: ${reason}`)
    }
}

