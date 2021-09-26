const Discord = require('discord.js')
const db = require('quick.db');


exports.run = async (client, message, args) => {
  if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
  if (!args[0]) return message.reply(new Discord.MessageEmbed().setColor("#36393f").setDescription(`Mevcut Markettekiler :\n Satıb Almak İçin ${prefix}market (alınıcak meslek veya eşya)\n \n\n **bıçak :** 4061<:tl:891668420066672650> \n **silah :** 100000<:tl:891668420066672650>\n **haydar :** 1600<:tl:891668420066672650>\n\n __**MESLEK**__ ↓\n\n **Taxici :** 1000<:tl:891668420066672650> Maaş: \`300\`\n **Dolmuş :** 1500<:tl:891668420066672650> Maaş: \`600\`\n **Aşçı :** 2200<:tl:891668420066672650> Maaş: \`1400\`\n **Kuyumcu :** \`7000\`<:tl:891668420066672650> Maaş: \`5000\` \`\`\`bash\n \"Not\": Marketten Aldığınız Eşyalardan Fazla Almak Herhangi bişi ifade etmez \n\`\`\``))
  
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