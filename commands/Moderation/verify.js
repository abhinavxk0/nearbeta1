module.exports = {
    name: 'verify',
    async execute(client, command, message, args, Discord){

        if (message.guild.id !== '768453184464748634') return message.reply('This command can only be used in another server.');

        if(!args.length) return message.channel.send('This command, verifies a user!')

        let user = message.author


        let role = user.guild.roles.cache.find(role => role.name === "⭒₊˚・Members");
        if (role) user.guild.members.cache.get(user.id).roles.add(role);

        let role1 = user.guild.roles.cache.find(role1 => role1.name === "──────Levels──────");
        if (role1) user.guild.members.cache.get(user.id).roles.add(role1);

        let role2 = user.guild.roles.cache.find(role2 => role2.name === "──────Self Roles──────");
        if (role2) user.guild.members.cache.get(user.id).roles.add(role2);

        let role3 = user.guild.roles.cache.find(role3 => role3.name === "──────Ping Roles──────");
        if (role3) user.guild.members.cache.get(user.id).roles.add(role3);

        let role4 = user.guild.roles.cache.find(role4 => role4.name === "──────Arcade Access──────");
        if (role4) user.guild.members.cache.get(user.id).roles.add(role4);

        message.channel.send(
            new Discord.MessageEmbed()
            .setDescription('You have been verified!')
        )
        
    }
}