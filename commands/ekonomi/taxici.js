const Discord = require('discord.js');

const ayarlar = require('../../config');

const db = require('quick.db')

const ms = require('ms')

exports.run = async (client, message, args) => {
  
 if(db.fetch(`taxici_${message.author.id}`) == undefined) {var baltavar = "0"}
    const engin = new Discord.MessageEmbed()
    .setTitle('Meslek yok!')
    .setDescription(`Mesleği Yapabilmek İçin Parayla Marketten Diploma Almalısın !`)
    if(db.fetch(`taxici_${message.author.id}`) == undefined) return message.channel.send(engin)
  
 var espriler = ["300","280","340","290","310"];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];

 

      

    {

      db.add(`para_${message.author.id}`, espri)
message.channel.send(new Discord.MessageEmbed().setDescription(`Taxicilik Mesleğinden <:tl:891668420066672650>${espri} Para Çıktı`)
                    .setColor("#36393f"));
}
       db.set(`günlükbea_${message.guild.id}`, Date.now());

    }




exports.conf = {
  aliases: ["taxi",'taxici','meslek-taxi'],
  permLevel: 0
};

exports.help = {
  name: 'taxidriver'
};