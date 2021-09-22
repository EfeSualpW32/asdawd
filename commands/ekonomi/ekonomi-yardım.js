const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message) => {

  if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
    const y = new Discord.MessageEmbed()
    .setAuthor('EFDA BASİT EKONOMİ')
    .setColor('RANDOM')
    .addField(':small_red_triangle_down:',`\`${prefix}günlük-para : Günlük Para (24 Saatte Bir Kullanılabilir)\``)
    .addField(':small_red_triangle_down:',`\`${prefix}hesap-aç : Banka Hesap Açar (+20 Lira Verir)\``)
    .addField(':small_red_triangle_down:',`\`${prefix}hesabımı-sil : Banka Hesabınızı Siler\``)
    .addField(':small_red_triangle_down:',`\`${prefix}hesap : Banka Hesabınız Hakkında Bilgi Verir\``)
    .addField(':small_red_triangle_down:',`\`${prefix}para-gönder : Belirttiğiniz Kişiye Belirttiğiniz Miktarda Para Gönderir\``)
    .addField(':small_red_triangle_down:',`\`${prefix}para : Bankadaki Paranızı Belirtir\``)
    .addField(':small_red_triangle_down:',`\`${prefix}market : Markteti Gösterir\``)
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail('https://cdn.glitch.com/478cc1e8-9c56-49a4-b910-3247fb1894aa%2Fezgif.com-gif-maker-6c3ab6491a5e480d7.gif?v=1621708715117') 
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'e-yardım'
};