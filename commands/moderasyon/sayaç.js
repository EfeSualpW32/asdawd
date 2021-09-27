const Discord = require('discord.js');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {
  var renk = '#36393f'
    if(args[0] !== "sıfırla"){
      var kanal = message.mentions.channels.first();
      if(!kanal) return message.reply("Lütfen Sayaç sistemini Ayarlamak İçin Kanal Ayarlayınız ❌")
      var sayı = args[1]
      if(!sayı) return message.reply(new Discord.MessageEmbed().setTitle('Uyarı !').setColor(renk).setDescription("Sayaç Ayarlamam İçin Bir Sayı Belirtmelisiniz ❌"))
      if(isNaN(sayı)) return message.reply(new Discord.MessageEmbed().setTitle('Uyarı !').setColor(renk).setDescription("Lütfen Sayı Giriniz Harf Değil ❌\n\n`Bir Daha Deneğiniz`"))
      if(sayı < message.guild.memberCount) return message.reply(new Discord.MessageEmbed().setTitle('Uyarı !').setColor(renk).setDescription("Ayarlamaya Çalıştığınız Sayaç Sayısını Zaten Sunucu Başarmıştır ❌\n\n`Lütfen Birdaha Deneyiniz`"))
      qdb.set(`sayackanali_${message.guild.id}`, kanal.id)
      qdb.set(`sayachedef_${message.guild.id}`, sayı)
      qdb.set(`sayaçs_${message.guild.id}`,`<:onn:891927243574628382>`)
      return message.reply(new Discord.MessageEmbed().setTitle('Başarılı !').setColor(renk).setDescription("Başarıyla Sunucu Sayacı Ayarlanmıştır ✅"))
    }
    if(args[0] === "sıfırla"){
      qdb.delete(`sayaçs_${message.guild.id}`)
      qdb.delete(`sayackanali_${message.guild.id}`)
      qdb.delete(`sayachedef_${message.guild.id}`)
      return message.reply(new Discord.MessageEmbed().setTitle('Başarılı !').setColor(renk).setDescription("Ayarladığınız Sayaç Başarıyla Sıfırlandı ✅"))
    }
}
module.exports.conf = {permLevel: 3, aliases: []}; module.exports.help = {name: "sayaç"}