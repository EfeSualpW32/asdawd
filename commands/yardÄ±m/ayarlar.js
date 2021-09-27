const Discord = require("discord.js");
const db = require("quick.db");
  const talkedRecently = new Set();

exports.run = async (client, message, args) => {

  if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
let reklam = await db.fetch(`reklam88_${message.guild.id}`) || '❌'
let caps = await db.fetch(`caps_${message.guild.id}`) || '❌'
let küfür = await db.fetch(`küfür_${message.guild.id}`) || '❌'
let otocvp = await db.fetch(`otocvp_${message.guild.id}`) || '❌'
let hgbb = await db.fetch(`hgbb_${message.guild.id}`) || '❌'
let sayaçs = await db.fetch(`sayaçs_${message.guild.id}`) || '❌'

  const sgmk = new Discord.MessageEmbed()
  .setTitle('EFDA BOT AYARLAR SİSTEMİ')
   .setDescription(
`Reklam Engel (${reklam})
CapsLock Engel (${caps})
Küfür Engel (${küfür})
Oto Cevap (${otocvp})
Hg-Bb (${hgbb})
Sayaç (${sayaçs})`)
  message.channel.send(sgmk);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['efda-ayarlar','e-ayar'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "ayarlar",
  category: "kullanıcı",
  description: "Moderasyon Menüsü.",
  usage: "!moderasyon"
};
