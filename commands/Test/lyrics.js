const Genius = require("genius-lyrics");
const Client = new Genius.Client(""); 

module.exports = {
    name: 'lyrics',
    async execute(client, command, message, args, Discord){
        const searches = await Client.songs.search(args.join(''));
        const firstSong = searches[0];
        const lyrics = await firstSong.lyrics();

        try {message.channel.send("**Lyrics of the Song:**\n" + lyrics);
        } catch (err){
            console.log(err)
        }
    }
}