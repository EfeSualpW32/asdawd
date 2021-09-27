const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async(client, message, args) => {
if(!message.member.permissions.has("MANAGE_GUİLD")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bu komutu kullanabilmek için `SUNUCUYU YÖNET` yetkisine sahip olmalısın!"))
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Lütfen bir komut belirtin! \`oto-cevap aç / oto-cevap kapat\`"))
if(args[0] === "aç"){
  if(db.has(`otocevap_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Oto Cevap Zaten Açık!"))
  db.set(`otocevap_${message.guild.id}`, "aktif");
    db.set(`otocvp_${message.guild.id}`, `<:onn:891927243574628382>`);
  return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Oto Cevap açıldı!"))
};
if(args[0] === "kapat"){//Main'e gel
    db.delete(`otocvp${message.guild.id}`)
  if(!db.has(`otocevap_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Oto Cevap Zaten Kapalı!")) //açma kapamayı deneyelim gel Arezcik <3 sunucusuna 
  db.delete(`otocevap_${message.guild.id}`)
  db.delete(`otocvp_${message.guild.id}`)
  return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Oto Cevap Kapatıldı!"))//Normalde bu kadar yeter ama seninki azcık gelişmiş olsn
};
};
module.exports.conf = {aliases: [], permLevel: 0};
module.exports.help = {name: "oto-cevap"}