//const Discord = require('discord.js');

const { Client, Intents } = require('discord.js');
require('dotenv').config();
const decode = require('./commands.js')


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

console.log(Date());
client.once('ready', () => {
  console.log('OG Bot is online');
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  } else if (commandName === 'beep') {
    await interaction.reply('Boop!');
  }
});

client.on('messageCreate', async (msg) => {
  //if (msg.content === 'Hello') msg.reply('Hi');
  let m = await decode(msg.content, msg);
  if (m != null && !(msg.author.bot)) msg.reply(m);
});


client.login('private');