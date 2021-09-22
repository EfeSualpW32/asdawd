const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../../config.json')
//message
exports.run = async (client, message, args) => {
    var e = db.fetch(`prefix_${message.guild.id}`)
    if(e){
      var p = e
    }
    if(!e){
      var p = "?"
    }
    var renk = '#36393f'
   if (!args[0]) {
 message.channel.send(new Discord.MessageEmbed().setTitle('CapsLock Engel Sistemi').setColor(renk).setDescription(`**Örnek Kullanım:** \n\n \`\`\`\n${p}capslock-engel aç/kapat\n\`\`\``))
  }

  if(args[0] === 'aç') {
    db.set(`capslock_${message.guild.id}`, true)
    db.push(`caps_${message.guild.id}`,'Açık')
    message.channel.send(new Discord.MessageEmbed().setDescription("CapsLock Engel Sistemi Başarıyla Aktfileştirildi <a:evet:814802902954016768>\n İyi Sohbetler Dileriz.").setColor(renk))
  return
     if(db.has(`capslock_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle(`Sistem zaten açık.`))
}

if (args[0] === 'kapat') {
  db.delete(`capslock_${message.guild.id}`)
   db.delete(`caps_${message.guild.id}`)
message.channel.send(new Discord.MessageEmbed().setColor(renk).setDescription("CapsLock Engel Sistemi Başarıyla Devre Dışı Bırakıldı <a:hayr:814802919542620211>\n İyi Sohbetler Dileriz"))
return
}

  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capsengel'],
  permLevel: 2
};
exports.help = {
  name: 'capslock-engel',
  description: 'capsengel',
  usage: 'capsengel'
};