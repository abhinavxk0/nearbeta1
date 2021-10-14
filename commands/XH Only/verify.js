module.exports = {
    name: 'verify',
    async execute(client, command, message, args, Discord){
        
        const { guild } = message
        const { name } = guild
        const icon = guild.iconURL({ size: 4096, dynamic: true })

        if (message.guild.id !== '768453184464748634') return message.reply('This command can only be used in another server.');

        let role = message.member.guild.roles.cache.find(role => role.id === "768460407189798952");
        if (role) message.guild.members.cache.get(message.author.id).roles.add(role);

        let role1 = message.member.guild.roles.cache.find(role1 => role1.id === "806823435350573088");
        if (role1) message.guild.members.cache.get(message.author.id).roles.add(role1);

        let role2 = message.member.guild.roles.cache.find(role2 => role2.id === "807536591459450881");
        if (role2) message.guild.members.cache.get(message.author.id).roles.add(role2);

        let role3 = message.member.guild.roles.cache.find(role3 => role3.id === "825285084830892038");
        if (role3) message.guild.members.cache.get(message.author.id).roles.add(role3);

        let role4 = message.member.guild.roles.cache.find(role4 => role4.id === "822367042329509889");
        if (role4) message.guild.members.cache.get(message.author.id).roles.add(role4);

        let role5 = message.member.guild.roles.cache.find(role5 => role5.id === "884478480190943272");
        if (role5) message.guild.members.cache.get(message.author.id).roles.add(role5);

        let role6 = message.message.guild.roles.cache.find(role6 => role6.id === '892725421102206986');
        if (role6) message.guild.members.cache.get(message.author.id).roles.add(role6);

        

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
        )
        
    }
}