//https://discord.com/oauth2/authorize?client_id=818749311512870953&scope=bot&permissions=3214400
require('dotenv').config()
const messageHandler = require('./handlers/message').messageHandler;
const voiceHandler = require('./handlers/voice-state').voiceHandler;
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', messageHandler);

client.on('voiceStateUpdate', voiceHandler);

client.login(process.env.TOKEN);
