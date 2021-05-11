module.exports = {
    name: 'djrolecreate',
    execute(client, command, message, args, Discord){

        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(
            'You need the `MANAGE_ROLES` permission to execute this command!'
        )
        if(!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send(
            'I do not have permissions to create a DJ role!'
        )
        if(message.member.guild.roles.cache.find(role => role.name === "DJ")) return message.channel.send(
            'There is already a DJ role!\nDo `givedj` to get it!'
        )

        const { guild } = message
            guild.roles.create({
                data: {
                    name: 'DJ',
                    color: '#3BA55C',
                },
                reason: 'There was no DJ role!'
            })
            message.channel.send('I created a DJ role! Do `givedj` to get it!')

            
    }
}