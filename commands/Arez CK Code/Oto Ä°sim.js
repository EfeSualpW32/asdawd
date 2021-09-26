const Discord = require('discord.js');
const qdb = require('quick.db');
module.exports.run = async(client, message, args) => {
  
  if (args[0] == 'aç') {
      var arezreiz = args.slice(1).join(' ')
        if(!arezreiz) return message.channel.send('Bir isim belirt dostum!')
    if(qdb.has(`otoisim_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle(`Sistem zaten açık.`))
      qdb.set(`otoisim_${message.guild.id}`, arezreiz)
      return message.reply(`Oto İsim Ayarlandı!`)
    qdb.set(`otoisim_${message.guild.id}`, '✅')
      message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle('Reklam Engel başarıyla açıldı! `Üyeleri Yasakla` yetkisine sahip olanların reklamı engellenmicektir.'))
  }   
    if (args[0] == 'sıfırla') {
        if(!qdb.has(`otoisim_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle(`Sistem zaten kapalı.`))
    qdb.delete(`otoisim_${message.guild.id}`)
      message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle('Reklam Engel başarıyla kapatıldı! Artık herkes reklam yapabilir.'))
  }
};


module.exports.conf = {aliases: [], permLevel: 3};
module.exports.help = {name: "otoisim"}