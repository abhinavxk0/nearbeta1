module.exports = {
    name: 'givedj',
    execute(client, command, message, args, Discord){
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(
            'You need the `MANAGE_ROLES` permission to execute this command!'
        )
        let role = message.member.guild.roles.cache.find(role => role.name === "DJ");
        if (role) message.guild.members.cache.get(message.author.id).roles.add(role);
        message.channel.send('Gave you the `DJ` role!')
    }
}