const Discord = require('discord.js')
const db = require('quick.db');


exports.run = async (client, message, args) => {
  
  if (!args[0]) return message.reply("Mevcut Markettekiler : \n\`\`\`\n bıçak : 4061 TL\n silah : 100000 TL\n haydar : 1600 TL\n\n MESLEK ↓\n\n Taxici : 1000 & 300 Tl Maaş\n Dolmuş : 1500 & 600 Tl Maaş\n Aşçı : 2200 & 1400 Tl Maaş\n Kuyumcu : 7000 & 5000 Tl Maaş\`\`\` ```bash\n \"Not\": Marketten Aldığınız Eşyalardan Fazla Almak Herhangi bişi ifade etmez \n``` ")
  
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
  if (args[0] === 'taxici') {
    db.push(`taxici_${message.author.id}`,"Taxi Şöförü")
    let para = await db.get(`para_${message.author.id}`) 
    let fiyatcık = 1000 // istediğiniz fiyat
    
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "aktifdir")
    db.add(`para_${message.author.id}`, -fiyatcık)
    
    return message.reply(`Başarıyla Meslek Sahibi Oldunuz`)
  }
  if (args[0] === 'dolmuşcu') {
    db.push(`dolmuşcu_${message.author.id}`,"Dolmuş Şöförü")
    let para = await db.get(`para_${message.author.id}`) 
    let fiyatcık = 1500 // istediğiniz fiyat
    
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "aktifdir")
    db.add(`para_${message.author.id}`, -fiyatcık)
    
    return message.reply(`Başarıyla Meslek Sahibi Oldunuz`)
  }
  if (args[0] === 'aşcı') {
    db.push(`aşçı_${message.author.id}`,"aşcı")
    let para = await db.get(`para_${message.author.id}`) 
    let fiyatcık = 2200 // istediğiniz fiyat
    
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "aktifdir")
    db.add(`para_${message.author.id}`, -fiyatcık)
    
    return message.reply(`Başarıyla Meslek Sahibi Oldunuz`)
  }
  if (args[0] === 'kuyumcu') {
    db.push(`kuyumcu_${message.author.id}`,"Kuyumcu")
    let para = await db.get(`para_${message.author.id}`) 
    let fiyatcık = 7000 // istediğiniz fiyat
    
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "aktifdir")
    db.add(`para_${message.author.id}`, -fiyatcık)
    
    return message.reply(`Başarıyla Meslek Sahibi Oldunuz`)
  }


  
}
exports.conf = {
  
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'market'
}