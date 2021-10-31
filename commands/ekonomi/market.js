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
  let parapara = db.fetch(`para_${message.author.id}`)
  if (!args[0]) return message.reply(new Discord.MessageEmbed().setColor("#36393f").setDescription(`Mevcut Markettekiler :\n Satın Almak İçin ${prefix}market (alınıcak meslek veya eşya)\n\n   **Paranız :** ${parapara}<:tl:891668420066672650>\n\n 🔪 **bıçak :** 7.000<:tl:891668420066672650> \n 🔫 **silah :** 1.000.000<:tl:891668420066672650>\n 🏏 **haydar :** 1.600<:tl:891668420066672650>\n\n __**MESLEK**__ ↓\n\n 🚕 **Taxici :** 1.000<:tl:891668420066672650> Maaş: \`300\`\n 🚐 **Dolmuş :** 1.500<:tl:891668420066672650> Maaş: \`600\`\n 👩‍🍳 **Aşçı :** 2.200<:tl:891668420066672650> Maaş: \`1400\`\n 💰 **Kuyumcu :** 7.000<:tl:891668420066672650> Maaş: \`3000\` \`\`\`bash\n \"Not\": Marketten Aldığınız Eşyalardan Fazla Almak Herhangi bişi ifade etmez \n\`\`\``))
  
  if (args[0] === 'silah') {
     db.add(`silah_${message.author.id}`, "1")
    let para = await db.get(`para_${message.author.id}`) 
    let fiyatcık = 1000000// istediğiniz fiyat
    
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "aktifdir")
    db.add(`para_${message.author.id}`, -fiyatcık)
    
    return message.reply(new Discord.MessageEmbed().setImage('http://www.savunmasanayiidergilik.com/images/uploads/Tasarim/26_259184_ssdergilik.jpg').setTitle(`Ürünü Başarıyla Aldınız`))
  }
    if (!args[0]) return message.reply(`Mevcut Markettekiler : `)
  
  if (args[0] === 'bıçak') {
   db.add(`bıçak_${message.author.id}`, "1")
    let para = await db.get(`para_${message.author.id}`) 
    let fiyatcık = 7000 // istediğiniz fiyat
    
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "aktifdir")
    db.add(`para_${message.author.id}`, -fiyatcık)
    
    return message.reply(new Discord.MessageEmbed().setImage('https://productimages.hepsiburada.net/s/84/375/110000027224533.jpg').setTitle(`Ürünü Başarıyla Aldınız`))
  }
    if (args[0] === 'haydar') {
    db.add(`haydar_${message.author.id}`,"1")
    let para = await db.get(`para_${message.author.id}`) 
    let fiyatcık = 1600 // istediğiniz fiyat
    
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "aktifdir")
    db.add(`para_${message.author.id}`, -fiyatcık)
    
    return message.reply(new Discord.MessageEmbed().setImage('https://foto.sondakika.com/haber/2013/07/18/dolmustan-alirim-aklini-yazili-sopa-cikti-4846162_o.jpg').setTitle(`Ürünü Başarıyla Aldınız`))
  }
  if (args[0] === 'taxici') {
    db.set(`taxici_${message.author.id}`,"Taxi Şöförü")
    let para = await db.get(`para_${message.author.id}`) 
    let fiyatcık = 1000 // istediğiniz fiyat
    
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "aktifdir")
    db.add(`para_${message.author.id}`, -fiyatcık)
    
    return message.reply(`Başarıyla Meslek Sahibi Oldunuz`)
  }
  if (args[0] === 'dolmuşcu') {
    db.set(`dolmuşcu_${message.author.id}`,"Dolmuş Şöförü")
    let para = await db.get(`para_${message.author.id}`) 
    let fiyatcık = 1500 // istediğiniz fiyat
    
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "aktifdir")
    db.add(`para_${message.author.id}`, -fiyatcık)
    
    return message.reply(`Başarıyla Meslek Sahibi Oldunuz`)
  }
  if (args[0] === 'aşcı') {
    db.set(`aşçı_${message.author.id}`,"aşcı")
    let para = await db.get(`para_${message.author.id}`) 
    let fiyatcık = 2200 // istediğiniz fiyat
    
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "aktifdir")
    db.add(`para_${message.author.id}`, -fiyatcık)
    
    return message.reply(`Başarıyla Meslek Sahibi Oldunuz`)
  }
  if (args[0] === 'kuyumcu') {
    db.set(`kuyumcu_${message.author.id}`,"Kuyumcu")
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