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
  const yetkiliamqs = new Discord.MessageEmbed()
    .setColor("#36393f")
      .setAuthor("🔥 EF&DA'in YETKİLİ (2) Menüsüne hoşgeldin! 🔥")
    .setTitle(`:gem: EF&DA'in Yetkili Menüye hoşgeldin! Prefix \`${prefix}\``)
    .setTimestamp()
  .setImage('https://cdn.glitch.com/478cc1e8-9c56-49a4-b910-3247fb1894aa%2Fyetk%C4%B1l%C4%B1.png?v=1621708531738')
    .setDescription(
      `> **» ${prefix}ototag** : Sunucuya Giren Üyelere Otomatik Tag Vermenizi Sağlar.\n> **» ${prefix}otorol** : Sunucuya Giren Üyelere Otomatik Rol Vermenizi Sağlar.\n> **» ${prefix}nerede** : Etiketlenen Üyenin Nerede Olduğunu Ve Sesli İletişim Bilgilerini Verir.\n> **» ${prefix}capsengel** : CapsLock Engel Açıp Kapatırsınız.\n> **» ${prefix}rol-rengi** : Yazdığınız Kod İle Etiketlenen Rolün Rengini Değiştirir.\n> **» ${prefix}duyuru** : Yazılan Yerde Duyuru Yapar.\n> **» ${prefix}sunucu-kur** : Çok Yönlü Efsane Otomatik Sunucu Kurar.\n> **» ${prefix}isim-değiştir** : Etiketlenen Kişinin İsmini Sizin Yazdığınızla Değiştirir.\n> **» ${prefix}roller** : Sunucudaki Kaç Rol Olduğunu Ve Rolleri Atar.\n> **» ${prefix}kanal-res** : Yazılan Kanala Restart Atar.\n> **» ${prefix}modlog** : Silinen Mesajlar Düzenlenen Mesajları Belirttiğiniz Kanala Yollar .\n> **» ${prefix}rol-oluştur** : Size Belirttiğiniz Ad da ve renk de Rol Oluşturur .\n> **» ${prefix}kick** : Bot Etiketlediğiniz Kişi Kickler.\n> **» ${prefix}unban** : Bot Banlanan Bir Kişinin Banını Açmasını Sağlar.\n> **» ${prefix}ban** : Bot Etiketlediğiniz Kişiyi Onaylama Şeklinde Banlama Sunar.\n> **» ${prefix}sil** : Bot Berillediğiniz kadar mesaj siler.\n> **» ${prefix}banlist** : Bot O Sunucuda Yasaklanan Kişileri Gösterir.\n> **» ${prefix}otoisim** : Bot Sunucuya Girenlere Yazdığınız Oto isim Verir.`
    );
    
  message.channel.send(yetkiliamqs);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y2", "yetkili2", "moderasyon2"],
  permLevel: 0
};

exports.help = {
  name: "moderasyon2",
  category: "kullanıcı",
  description: "yetkili Menüsü.",
  usage: "!yetkili"
};
//sayaç