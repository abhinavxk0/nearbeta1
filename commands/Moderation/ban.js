module.exports = {
    name: 'ban',
    async execute(client, command, message, args, Discord){
        if(!args.length) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#81de0a')
                .setDescription('Mention a user to ban.')
        )

        const target = await message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || client.users.fetch(args[0]) 
        const reason = args.slice(1).join(" ") || "There was no reason!"; 

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#81de0a')
                .setDescription('You dont have the ban members permission!')
        )
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#81de0a')
                .setDescription('I dont have the ban members permission!')
        )
        if (target.id === client.user.id) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#81de0a')
                .setDescription('You cant ban me!')
        )



        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id)
            memberTarget.ban({reason})
            message.channel.send(`${target} has been successfully eliminated`)
        } else {
            message.channel.send('`you couldnt eliminate that target mission failed`')
        }

        
    }
}