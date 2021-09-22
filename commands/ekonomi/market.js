const Discord = require('discord.js')
const db = require('quick.db');


exports.run = async (client, message, args) => {
  
  if (!args[0]) return message.reply("Mevcut Markettekiler : \n\`\`\`\n bıçak : 4061 TL\n silah : 100000 TL\n haydar : 1600 TL\n\`\`\` ```bash\n \"Not\": Marketten Aldığınız Eşyalardan Fazla Almak Herhangi bişi ifade etmez \n``` ")
  
  if (args[0] === 'silah') {
     db.push(`silah_${message.author.id}`, "Var")
    let para = await db.get(`para_${message.author.id}`) 
    let fiyatcık = 100000// istediğiniz fiyat
    
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "aktifdir")
    db.add(`para_${message.author.id}`, -fiyatcık)
    
    return message.reply(`Ürünü Başarıyla Aldınız`)
  }
    if (!args[0]) return message.reply(`Mevcut Markettekiler : `)
  
  if (args[0] === 'bıçak') {
   db.push(`bıçak_${message.author.id}`, "Var")
    let para = await db.get(`para_${message.author.id}`) 
    let fiyatcık = 4061 // istediğiniz fiyat
    
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "aktifdir")
    db.add(`para_${message.author.id}`, -fiyatcık)
    
    return message.reply(`Ürünü Başarıyla Aldınız`)
  }
    if (args[0] === 'haydar') {
    db.push(`haydar_${message.author.id}`,"Var")
    let para = await db.get(`para_${message.author.id}`) 
    let fiyatcık = 1600 // istediğiniz fiyat
    
    
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