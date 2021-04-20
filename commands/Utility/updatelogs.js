module.exports = {
    name: 'updatelogs',
    alias: ['changelogs'],
    async execute(client, command, message, args, Discord){
        const logEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Update Logs')
        .setURL('https://docs.google.com/document/d/1To1od5L7xTVI_ZKeLrHxat9Liu-qa4HiUnp8fOXV8GA/edit?usp=sharing')
        .setDescription('NearBot Beta')
    message.channel.send(logEmbed);
    }
}