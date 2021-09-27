const Discord = require('discord.js');
const qdb = require('quick.db');
module.exports.run = async(client, message, args) => {
    if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = qdb.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
   var domdom = args.slice(0).join(' ')
   if(!domdom)  return message.channel.send(new Discord.MessageEmbed().setTitle('OTO İSİM SİSTEMİ').setDescription(`Oto İsim Belirlemek İçin ↓\n\n\`${prefix}otoisim ayarla (verilcek isim)\`\n\n\`${prefix}otoisim sıfırla\` `))
   
   
  if(args[0] == 'ayarla') {
      var arezreiz = args.slice(1).join(' ')
        if(!arezreiz) return message.channel.send('Bir isim belirt dostum!')
    if(qdb.has(`otoisim_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle(`Sistem zaten açık. Kapatmak için ${prefix}otoisim sıfırla`))
      qdb.set(`otoisim_${message.guild.id}`, arezreiz)
      return message.reply(`Oto İsim Ayarlandı!`)
    qdb.set(`otoisim_${message.guild.id}`, '✅')
      message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle('Oto İsim başarıyla açıldı!'))
  }   
    if (args[0] == 'sıfırla') {
        if(!qdb.has(`otoisim_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle(`Sistem zaten kapalı.`))
   var arezreiz = qdb.delete(`otoisim_${message.guild.id}`)
      message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle('Oto İsim  başarıyla kapatıldı!'))
  }
};


module.exports.conf = {aliases: [], permLevel: 3};
module.exports.help = {name: "otoisim"}