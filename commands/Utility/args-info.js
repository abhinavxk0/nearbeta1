module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
    args: true,
	execute(client, command, message, args, Discord) {
		    if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`> Arguments: ${args}\n> Arguments length: ${args.length}`);
	},
};