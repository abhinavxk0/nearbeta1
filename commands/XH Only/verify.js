module.exports = {
    name: 'verify',
    async execute(client, command, message, args, Discord){
        
        const { guild } = message
        const { name } = guild
        const icon = guild.iconURL({ size: 4096, dynamic: true })

        if (message.guild.id !== '768453184464748634') return message.reply('This command can only be used in another server.');

        let role = message.member.guild.roles.cache.find(role => role.name === "꒷꒦︰Members ⋆˚. ✦");
        if (role) message.guild.members.cache.get(message.author.id).roles.add(role);

        let role1 = message.member.guild.roles.cache.find(role1 => role1.name === "──────Levels──────");
        if (role1) message.guild.members.cache.get(message.author.id).roles.add(role1);

        let role2 = message.member.guild.roles.cache.find(role2 => role2.name === "──────Self Roles──────");
        if (role2) message.guild.members.cache.get(message.author.id).roles.add(role2);

        let role3 = message.member.guild.roles.cache.find(role3 => role3.name === "──────Ping Roles──────");
        if (role3) message.guild.members.cache.get(message.author.id).roles.add(role3);

        let role4 = message.member.guild.roles.cache.find(role4 => role4.name === "──────Arcade Access──────");
        if (role4) message.guild.members.cache.get(message.author.id).roles.add(role4);

        message.channel.send(
            new Discord.MessageEmbed()
            .setDescription('You have been verified!')
            .setColor('#00FFFF')
            .setFooter(name, icon)
        )
        client.channels.cache.get('858983724191318048').send(
            new Discord.MessageEmbed()
            .setColor('#00FFFF')
            .setDescription(`${message.author} used \`n!verify\`!`)
            .addFields(
                {
                    name: 'Roles Given',
                    value: `<@&806823435350573088>\n<@&768460407189798952>\n<@&807536591459450881>\n<@&825285084830892038>\n<@&822367042329509889>`
                }
            )
        )
        
    }
}