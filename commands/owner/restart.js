module.exports = {
    name: 'restart',
    async execute(client, command, message, args, Discord){
        
        if (message.author.id !== '307777831625293825') return;

        await message.channel.send('restarting...')
        process.exit();

    }
}