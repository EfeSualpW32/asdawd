const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./kasalıst.json"); 
 
exports.run = async(client, message, args) => {
    if (!args[0]) return message.channel.send(`Merhaba kara liste özelliğini kullanmak istiyor iseniz **!karaliste al** yazınız. Kara listedeki birini çıkartmak istiyor iseniz **!beyaz-liste al** komutunu kullanınız!`) 
  if (args[0] === 'al') {
    let engin = message.mentions.user.first || args[1]
    if(!engin) return message.channel.send('Lütfen kara listeye alacağım kişiyi yaz!')
 
      db.set(`karaliste_${engin.id}`, 'karalistede')
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`Merhaba sahibim! \n <@${engin.id}> adlı kişiyi başarı ile karalisteye aldım! \n Bundan sonra beni kullanamayacak!`)
   return message.channel.send(embed)
  };
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["karaliste"],
  permLevel: 4, //Burayı bot sahibi permine ayarlayın!!!
};
 
exports.help = {
  name: 'kara-liste'
};