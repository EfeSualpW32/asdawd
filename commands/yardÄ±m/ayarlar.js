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
  let reklam = await db.fetch(`reklam_${message.guild.id}`) || 'Kapalı'
  let caps = await db.fetch(`caps_${message.guild.id}`) || 'Kapalı'
  const sgmk = new Discord.MessageEmbed()
   .setDescription(
`Reklam Engel (${reklam})
Küfür Engel (${caps})`)
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
