const discord = require("discord.js");
const Database = require("plasma-db");
const db = new Database("./database.json");
const qdb = require("quick.db");
  const talkedRecently = new Set();
exports.run = async (client, message, args) => {
 


  var e = qdb.fetch(`prefix_${message.guild.id}`);
  if (e) {
    var p = e;
  }
  if (!e) {
    var p = "?";
  }
  if (!args[0])
    return message.channel.send(
      `Merhaba komutlar için lütfen ${p}küfür-engel yardım yazınız!`
    );
  if (args[0] == "log") {
    let enginar = message.mentions.channels.first();
    if (!enginar)
      return message.channel.send(
        "Lütfen küfür engel log kanalını belirtiniz!"
      );
    db.set(`küfürengellog_${message.guild.id}`, enginar.id);
    const embed2 = new discord.MessageEmbed()
      .setTitle("Küfür engel log")
      .setDescription(
        `<@${message.author.id}> bu kanalı başarı ile küfür engel log kanalı olarak ayarladı! \n \n Bundan sonra biri küfür edince bu kanala bildirimde bulunacağım!`
      );
    client.channels.cache.get(enginar.id).send(embed2)
const embed = new discord.MessageEmbed()
.setTitle('Başarı ile küfür engel log kanalı ayarlandı!')
.setDescription(`Küfür engel log kanalını <#${enginar.id}> olarak ayarladım.`)
return message.channel.send(embed);
    };
    //
   if(args[0] == "mesaj"){
        let enginar = args.slice(1).join(' ');
        if(!enginar) return message.channel.send('Lütfen bir mesaj yaz!')
db.set(`küfürengelmesaj_${message.guild.id}`, enginar)
const embed = new discord.MessageEmbed()
.setTitle('Küfür engel mesajı ayarlandı!')
.setDescription(`Bundan sonra biri küfür eder ise <@${message.author.id}>, ${enginar} şeklinde cevap vereceğim!`)
.setColor("RANDOM");
return message.channel.send(embed)
    }
    //
    if(args[0] == "aç") {
        qdb.set(`küfür_${message.guild.id}`, `<:onn:891927243574628382>`)
        let kontrol = db.fetch(`küfürengellog_${message.guild.id}`)
        if(!kontrol) return message.channel.send('Küfür engel log kanalı ayarlanmamış!')
        let enginar = db.fetch(`küfürengelmesaj_${message.guild.id}`)
        if(!enginar) return message.channel.send('Küfür engel mesajı ayarlanmamış')
if(db.has(`küfürengel_${message.guild.id}`)) return message.channel.send("Zaten açık!")
db.set(`küfürengel_${message.guild.id}`, 'aktif')
const embed = new discord.MessageEmbed()
.setTitle('Küfür engel sistemi açıldı!')
.setDescription(`<@${message.author.id}> bu sunucuda küfür engel sistemini aktifleştirdi!`)
.setColor('RANDOM')
client.channels.cache.get(kontrol).send(embed)
return message.channel.send('Küfür engel sistemi aktifleştirildi!')

}
//
if(args[0] == "sıfırla") {
         qdb.delete(`küfür_${message.guild.id}`)
    let engin = db.fetch(`küfürengellog_${message.guild.id}`)
    const embed = new discord.MessageEmbed()
    .setTitle('Küfür engel sistemi kapatıldı!')
    .setDescription(`<@${message.author.id}> küfür engel sistemini kapattı!`)
    client.channels.cache.get(engin).send(embed)
db.delete(`küfürengellog_${message.guild.id}`)
db.delete(`küfürengelmesaj_${message.guild.id}`)
db.delete(`küfürengel_${message.guild.id}`)
return message.channel.send('Sistem başarı ile sıfırlandı!')
};
//
if(args[0] == "yardım") {
   const embed = new discord.MessageEmbed()
    .setTitle(`Küfür engel komutları`)
   .setImage("https://media.giphy.com/media/WBAT6b0Gci5EApV9oI/giphy.gif")
    .setDescription(`**${p}küfür-engel yardım =** Küfür engel komutlarını görürsünüz. \n\n **${p}küfür-engel log =** Küfür-engel log kanalını ayarlarsınız. \n\n **${p}küfür-engel aç =** Küfür engel sistemini açarsınız \n\n **${p}küfür-engel sıfırla =** Küfür engel sistemini sıfırlarsınız \n\n **${p}küfür-engel mesaj =** Küfür engel mesaj ayarlarsınız.`)
.setColor('RANDOM')
    message.channel.send(embed)



}
};
exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: [],
    permLevel: 1
    };
    exports.help = {
        name : "küfür-engel"
        };