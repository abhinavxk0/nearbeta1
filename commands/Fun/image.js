var Scraper = require('images-scraper');
const google = new Scraper({
    puppeteer: {
      headless: false,
    },
  });

module.exports = {
    name: 'image',
    async execute(client, command, message, args, Discord){
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send(
            'Please enter an image name!'
        );
        const image_results = await google.scrape(image_query, 1);
        message.channel.send(
            image.results[0].url
        );
    }
}