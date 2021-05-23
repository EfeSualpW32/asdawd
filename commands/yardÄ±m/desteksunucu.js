const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const talkedRecently = new Set();

 if (talkedRecently.has(message.author.id)) {
           return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setTitle('UYARI !').setDescription(`\`5\` Saniye de Bir Kullanabilirsin - <@!${message.author.id}>`))
     .then(x => {x.delete({timeout: 3000})})
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }

  if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
  const desteklann = new Discord.MessageEmbed()
    .setColor("#d205fe")
    .setAuthor("🔥 EF&DA'DESTEK 🔥")
    .setTitle(
      `☎️ <a:1417_Bell:814532977337171989> EF&DA'in DESTEK SEKMESİNE hoşgeldin! Prefix \`${prefix}\``
    )
    .setTimestamp()
    .setDescription(
      "__**» BOTUN DESTEK SUNUCUSUNA GİTMEK İÇİN:**__\n\n <a:UrlGif:820284492509347931> **https://www.efdabot.ml/** <a:UrlGif:820284492509347931>\n\n\n\n```fix\n BENİM SAHİBİM EFE SUALP SÖZÜGERÇEK\n``` "
    )
  
    .setImage("https://cdn.glitch.com/478cc1e8-9c56-49a4-b910-3247fb1894aa%2FEFDA%20DESTEK.png?v=1621708553406");
  message.channel.send(desteklann);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [
    "ds",
    "destek",
    "desteksunucu",
    "destek-sunucu",
    "desteksunucusu",
    "destek-sunucusu",
    "d"
  ],
  permLevel: 0
};

exports.help = {
  name: "destek",
  category: "kullanıcı",
  description: "Destek Suncu Menüsü.",
  usage: "!destek"
};
