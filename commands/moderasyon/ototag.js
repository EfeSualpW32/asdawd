const qdb = require('quick.db');
const Discord = require('discord.js');
exports.run = async(client, message, args) => {
      var renks = `#36393f`
  if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = qdb.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
   if(!args[0]) return message.reply (new Discord.MessageEmbed()
        .setColor(renks)
        .setTitle('Oto-Tag Yardım')
        .addField(`${prefix}ototag ayarla kanal`,'Ototag kanalını ayarlar')
        .addField(`${prefix}ototag ayarla tag `,"Ototag  ayarlar")
        .addField(`${prefix}ototag sıfırla`,"Ototag veritabanını sıfırlar")
        .setFooter("EFDA OTOROL"))
  if (!message.member.permissions.has("ADMINISTRATOR")) return;
  if(!args[0] || args[0] !== "sıfırla"){
      if(args[0] == "ayarla" || args[0] == "aç") {
        var tag = args[2]
  if(!tag) return message.channel.send("Bir tag belirt!")
           if(args[1] == "kanal" ||args[1] == "channel") {
        var ales = message.mentions.channels.first() || message.guild.channel.cache.get(args[2]);
    if(!ales) return message.reply('Bir kanal belirtiniz.')
    qdb.set(`ototagkanali_${message.guild.id}`, ales.id)
    return message.reply(new Discord.MessageEmbed().setColor(renks).setDescription('Ototag kanalı başarı ile ayarlandı.'))}
    qdb.set(`ototag_${message.guild.id}`, tag)
          qdb.set(`ototags_${message.guild.id}`,`<:onn:891927243574628382>`)
    return message.channel.send("Oto Tag Ayarlandı!")
  }}
  if(args[0] == "sıfırla"){
         qdb.delete(`ototags_${message.guild.id}`)
    qdb.delete(`ototag_${message.guild.id}`)
      qdb.delete(`ototagkanali_${message.guild.id}`)
    return message.channel.send("Oto Tag Sıfırlandı!")
    
  }
}
exports.conf = {
 aliases: ["oto-tag"],
  permLevel: 0
}
exports.help = {
  name: "ototag"
}