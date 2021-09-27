const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`codeminglog_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    db.delete(`logs_${message.guild.id}`)
    if(!logkanal) return message.channel.send(new Discord.MessageEmbed().setDescription(`Modlog Kanalı Zaten ayarlı değil`).setColor("#36393f"));
    
    db.delete(`codeminglog_${message.guild.id}`)
   message.channel.send(new Discord.MessageEmbed().setDescription(`ModLog Kanalı başarıyla sıfırlandı`).setColor("#36393f"));

    return
  }
  
if (!logk) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bir modlog kanalı belirt`).setColor("#36393f"));
 

db.set(`codeminglog_${message.guild.id}`, logk.id)

message.channel.send(new Discord.MessageEmbed().setDescription(`Mod-Log kanalı başarıyla __${logk}__ olarak ayarlandı\nSıfırlamak İçin modlog \`sıfırla\``).setColor("#36393f"));
db.set(`logs_${message.guild.id}`,'<:onn:891927243574628382>')
console.log(`Mod-log komutu ${message.author.username} Tarafından kullanıldı`)
};

//Mechanic Code //Baran

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log','modlog'],
    permLevel: 0 ,
  kategori:'moderasyon'
};

exports.help = {
    name: 'mod-log',
    description: 'Mod-Log kanalını belirler.',
    usage: 'mod-log <#kanal>'
};