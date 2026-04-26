const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content.includes("discord.gg") || message.content.includes("discord.com/invite")) {
    message.delete().catch(() => {});
    message.channel.send(`${message.author}, no invite links allowed!`);
  }
});

client.login(process.env.TOKEN);
