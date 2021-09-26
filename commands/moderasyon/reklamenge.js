const db = require('quick.db')
const Discord = require('discord.js')
 let ayarlar = ['aç','kapat']
   const talkedRecently = new Set();
exports.run = async (bot, message, args) => {

   var e = db.fetch(`prefix_${message.guild.id}`)
  if(e){
    var p = e
  }
  if(!e){
    var p = "?"
  }

  if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle('Hey Bu Ayarı Kullanabilmek için `aç` yada `kapat` yazmalısın.\n**Örnek** ⬇️').setDescription(`\n\n\`${p}reklam-engel aç\`\n\n\`${p}reklam-engel kapat\``))
  if(!ayarlar.includes(args[0])) return message.channel.send(`Geçerli parametreleri kullanmalısın.\nParametreler: ${ayarlar.join(' - ')}`)
 
  if (args[0] == 'aç') {
    if(db.has(`reklam_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle(`Sistem zaten açık.`))
    db.set(`reklam_${message.guild.id}`, '✅')
      message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle('Reklam Engel başarıyla açıldı! `Üyeleri Yasakla` yetkisine sahip olanların reklamı engellenmicektir.'))
  }
  if (args[0] == 'kapat') {
        if(!db.has(`reklam_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle(`Sistem zaten kapalı.`))
    db.delete(`reklam_${message.guild.id}`)
      message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle('Reklam Engel başarıyla kapatıldı! Artık herkes reklam yapabilir.'))
  }
 
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reklamengel','reklam','reklam-engel'],
  permLevel: 1
};
 
exports.help = {
  name: 'reklam-engelle',
  description: '[Admin Komutu]',
  usage: 'reklam-engelle'
};