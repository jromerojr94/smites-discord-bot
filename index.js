//https://discord.com/oauth2/authorize?client_id=818749311512870953&scope=bot&permissions=3214400
require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '!albertono') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play('/root/beastly-bot/the-price-is-right-losing-horn.mp3', { volume: 0.5 });
      dispatcher.on('finish', () => {
        console.log('Finished playing!');
        dispatcher.destroy(); // end the stream
        connection.disconnect();
      });
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});

client.login(process.env.TOKEN);
