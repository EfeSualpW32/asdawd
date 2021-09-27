const Discord = require("discord.js");
const qdb = require("quick.db");
exports.run = async (client, message, args) => {
  var e = qdb.fetch(`prefix_${message.guild.id}`);
  if (e) {
    var prefix = e;
  }
  if (!e) {
    var prefix = "?";
  }
  if (!args[0])
    return message.reply(
      `Bir komut belirtiniz eğer nasıl kullanılır bilmiyorsanız **${prefix}hg-bb yardım**`
    );
  if (args[0] === "ayarla" || args[0] === "aç") {
    if (!args[1])
      return message.reply(
        `Bir komut belirtiniz eğer nasıl kullanılır bilmiyorsanız **${prefix}hg-bb yardım**`
      );
    if (args[1] === "kanal") {
      qdb.set(`hgbb_${message.guild.id}`,`<:onn:891927243574628382>`)
      var kanal = message.mentions.channels.first();
      if (!kanal) return message.reply("Bir kanal belirtiniz!");
      qdb.set(`hgbbkanali_${message.guild.id}`, kanal.id);
      return message.reply("Giriş kanalı başarıyla ayarlandı!");
    }
    if (args[1] === "rol") {
      var teyitci = message.mentions.roles.first();
      if (!teyitci) return message.reply("Bir rol belirtiniz!");
      qdb.set(`teyitci_${message.guild.id}`, teyitci.id);
      return message.reply("Kayıt Görevlisi rolü başarıyla ayarlandı!");
    }
    if (args[1] === "tag") {
      var tag = args.slice(2).join(" ");
      if (!tag) return message.reply("Tag'ınızı belirtin");
      qdb.set(`tag_${message.guild.id}`, tag);
      return message.reply("Tag başarıyla ayarlandı!");
    }
  }
  if (args[0] === "kapat" || args[0] === "sıfırla") {
    if (!args[1])
      return message.reply(
        `Bir komut belirtiniz eğer nasıl kullanılır bilmiyorsanız **${prefix}hg-bb yardım**`
      );
    if (args[1] === "kanal") {
            qdb.delete(`hgbb_${message.guild.id}`)
      qdb.delete(`hgbbkanali_${message.guild.id}`);
      return message.reply("Giriş kanalı veritabanı sıfırlandı!");
    }
    if (args[1] === "rol") {
      qdb.delete(`teyitci_${message.guild.id}`);
      return message.reply("Kayıt Görevlisi rolü başarıyla sıfırlandı!");
    }
    if (args[1] === "tag") {
      qdb.delete(`tag_${message.guild.id}`);
      return message.reply("Tag veritabanı başarıyla sıfırlandı");
    }
  }
  if (args[0] === "yardım" || args[0] === "help") {
    const embedimsi = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle(
        `${client.user.username} <a:5430_Diamond:814532975948726272>Giriş-Çıkış<a:5430_Diamond:814532975948726272>`
      )
      .addField(
        `<:okeys:820285379298328607> ${prefix}hg-bb yardım`,
        "Yardım Menüsü"
      )
      .addField(
        `<:okeys:820285379298328607> ${prefix}hg-bb ayarla kanal #kanal`,
        "Giriş çıkış kanalını ayarlar."
      )
      .addField(
        `<:okeys:820285379298328607> ${prefix}hg-bb ayarla rol @rol`,
        "Kayıt sorumlusu rolünü ayarlar."
      )
      .addField(
        `<:okeys:820285379298328607> ${prefix}hg-bb ayarla tag <tagınız>`,
        "Tag'ı ayarlar."
      )
      .addField(
        `<:okeys:820285379298328607> ${prefix}hg-bb sıfırla kanal`,
        "Giriş çıkış kanalını sıfırlar."
      )
      .addField(
        `<:okeys:820285379298328607> ${prefix}hg-bb sıfırla rol`,
        "Kayıt sorumlusu rolünü sıfırlar."
      )
      .addField(
        `<:okeys:820285379298328607> ${prefix}hg-bb sıfırla tag`,
        "Tag'ı sıfırlar"
      )
      .setFooter(message.author.username + " kullandı!");
    message.channel.send(embedimsi);
  }
};
exports.conf = { aliases: [], permLevel: 3 };
exports.help = {
  name: "hg-bb",
  description: "",
  usage: "prefix?hg-bb"
};
