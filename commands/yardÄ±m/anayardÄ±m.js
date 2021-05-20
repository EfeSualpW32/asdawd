const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
  const sgmk = new Discord.MessageEmbed()
    .setColor("#36393f")
    .setAuthor(
      `🔥 EF&DA'Yardım Paneline Hoşgeldin 🔥`,
      client.user.displayAvatarURL({ dynamic: true, format: "png" })
    )
    .setFooter(
      `www.efdabot.ml\n [${prefix}davet] Yazarak Beni Davet Edebilrisiniz\n`,
      client.user.displayAvatarURL({ dynamic: true, format: "png" })
    )
    .setTitle(
      `<a:AyarGif:820286392647024741> Prefix \`${prefix}\` Help EFDA <a:AyarGif:820286392647024741>`
    )
    .setTimestamp()
    .setDescription(
      `\`\`\`bash\n"EFDA Menüler"\n\`\`\`\`\`\`asciidoc\n[Prefixi Değiştirmek için ${prefix}prefix]\n\`\`\`\n\`${prefix}yenilikler : Yenilikler Menüsüne Gidersiniz\`  \`${prefix}efday\`\n\n\`${prefix}destek-sunucu : Destek Sunucusuna gidersiniz\`  \`${prefix}d\`\n\n\`${prefix}kayıt-menü : Kayıt Menüsüne Gidersiniz\`  \`${prefix}kayıtm\`\n\n\`${prefix}yetkili : Yetkili Menüsüne Gidersiniz\`  \`${prefix}y\`\n\n\`${prefix}yetkili2 : Yetkili (2) Menüsüne Gidersiniz\`  \`${prefix}y2\`\n\n\`${prefix}logo : Logo Menüye Gidersiniz\`  \`${prefix}lg\`\n\n\`${prefix}menü : Menüye Gidersiniz\`  \`${prefix}m\`\n\n\`${prefix}menü2 : 2. Menüye Gidersiniz\`  \`${prefix}m2\`\n\n\`${prefix}menü3 : 3. Menüye Gidersiniz\`  \`${prefix}m3\`\n\n**🍭SORUN KOMUTLARI**\`\`\`fix\n${prefix}bugbildir : Bot daki Bugları Bildirmenize Yarar\n\n${prefix}şikayet : Botu Şikayet Etmenize Yarar\`\`\``
    )
    .setImage("https://media.giphy.com/media/1kIASFJWJ5jjBkzbvo/giphy.gif");
  message.channel.send(sgmk);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["help", "yardım", "yardımcı"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "yardım",
  category: "kullanıcı",
  description: "Moderasyon Menüsü.",
  usage: "!moderasyon"
};
