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
message.channel.send(new Discord.MessageEmbed()

.setDescription(`Kuyumcu Mesleğinden ${espri}<:tl:891668420066672650>  Para Çıktı`)
.setColor('#36393f'));
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