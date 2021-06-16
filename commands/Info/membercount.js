module.exports = {
    name: 'membercount',
    execute(client, command, message, args, Discord){
        let myGuild = client.guilds.cache.get("703315963583528991");
        let memberCount = myGuild.members.cache.filter(member => !member.user.bot).size;
    message.channel.send('Members: ' + memberCount);
    }
}