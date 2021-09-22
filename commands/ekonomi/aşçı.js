const Discord = require('discord.js');

const ayarlar = require('../../config');

const db = require('quick.db')

const ms = require('ms')

exports.run = async (client, message, args) => {
  
 if(db.fetch(`aşçı_${message.author.id}`) == undefined) {var baltavar = "0"}
    const engin = new Discord.MessageEmbed()
    .setTitle('Meslek yok!')
    .setDescription(`Mesleği Yapabilmek İçin Parayla Marketten Diploma Almalısın !`)
    if(db.fetch(`aşçı_${message.author.id}`) == undefined) return message.channel.send(engin)
  
 var espriler = ['1400','1450','1470','1389'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];

 

      

    {

      db.add(`para_${message.author.id}`, espri)
message.channel.send(`Kuyumcu Mesleğinden ${espri} Tl Para Çıktı`);
}
       db.set(`günlükbea_${message.guild.id}`, Date.now());

    }




exports.conf = {
  aliases: ["aşçı"],
  permLevel: 0
};

exports.help = {
  name: 'aşcı'
};