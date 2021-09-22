const Discord = require('discord.js')
const db = require('quick.db');


exports.run = async (client, message, args) => {
  
  if (!args[0]) return message.reply(`Mevcut Markettekiler : \n\n\`\`\`\n Bıçak : 500 TL\n Silah : 1000 TL\n Haydar : 150 TL`)
  
  if (args[0] === 'Silah') {
    let para = await db.get(`para_${message.author.id}`) 
    let fiyatcık = 1000 // istediğiniz fiyat
    
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "aktifdir")
    db.add(`para_${message.author.id}`, -fiyatcık)
    
    return message.reply(`Ürünü Başarıyla Aldınız`)
  }
    if (!args[0]) return message.reply(`Mevcut Markettekiler : `)
  
  if (args[0] === 'Bıçak') {
    let para = await db.get(`para_${message.author.id}`) 
    let fiyatcık = 500 // istediğiniz fiyat
    
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "aktifdir")
    db.add(`para_${message.author.id}`, -fiyatcık)
    
    return message.reply(`Ürünü Başarıyla Aldınız`)
  }
    if (args[0] === 'haydar') {
    let para = await db.get(`para_${message.author.id}`) 
    let fiyatcık = 150 // istediğiniz fiyat
    
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "aktifdir")
    db.add(`para_${message.author.id}`, -fiyatcık)
    
    return message.reply(`Ürünü Başarıyla Aldınız`)
  }


  
}
exports.conf = {
  
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'market'
}