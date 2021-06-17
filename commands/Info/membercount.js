module.exports = {
    name: 'membercount',
    execute(client, command, message, args, Discord){
        let myGuild = client.guilds.cache.get("768453184464748634");
        let memberCount = myGuild.members.cache.filter(member => !member.user.bot).size;
    message.channel.send('Members: ' + memberCount);
    }
}