
const Discord = require('discord.js');
const ayarlar = require('../../config');
const db = require('quick.db');
const ms = require('ms')
exports.run = async (client, message, args) => {
let kişi = message.mentions.users.first() || message.author

let parapara = await db.fetch(`para_${kişi.id}`) || 0  
  
  message.channel.send(`\`\`\`\n${parapara}\n\`\`\`\nTl'niz Var`)
};
exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'para'
};