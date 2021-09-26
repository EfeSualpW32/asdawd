const Discord = require('discord.js');
const ayarlar = require('../../config');
const db = require('quick.db');
const ms = require('ms')
exports.run = async (client, message, args) => {
let kişi = message.mentions.members.first() 
if (!kişi) return message.reply('Kişi Belirt')

  let parası = await db.fetch(`para_${message.author.id}`) 
  let hesap =  await db.fetch(`hesap-${message.guild.id}`)
  
  if (kişi.bot) return message.reply('Botlar Para Alamaz?')
    if (kişi.id === message.author.id) return message.reply('Kendine Para Gönderemezssin')

let paragönderme = args.slice(1).join(' ')

if (!paragönderme) return message.reply('Miktar Belirt')
  
  ///yenı komut yerı acıyorum tamam
  if (isNaN(paragönderme)) return message.reply('Para Miktarını Nası Sayısız Yazıcaksın?')
  
  if (parası < paragönderme) return message.reply('Paradan Büyük Miktar Gönderemezssin')

  
  db.add(`para_${kişi.id}`, paragönderme)
  db.add(`para_${message.author.id}`, -paragönderme)
  return message.reply(new Discord.MessageEmbed().setColor("#36393f").setTitle('PARA HAVALE').setDescription(`${kişi} Adlı Kullanıcıya <:tl:891668420066672650>**${paragönderme}** Kadar Para Gönderildi Ve Parandan <:tl:891668420066672650>**${paragönderme}** Kadar Düştü!`))
  
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {

  name: 'para-gönder'
};