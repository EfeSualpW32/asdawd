const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./karalıst.json"); 
const qdb = require('quick.db')
 
exports.run = async(client, message, args) => {
    if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = qdb.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
    if (!args[0]) return message.channel.send(`Merhaba eğer beyaz liste özelliğini kullanmak istiyorsanız **${prefix}beyaz-liste al** eğer kara liste özelliğini kullanmak istiyorsanız **${prefix}kara-liste al** kullanınız`) 
  if (args[0] === 'al') {
    let engin = args[1]
    if(!engin) return message.channel.send('Lütfen kara listeye alacağım kişiyi yaz!')
 
      db.set(`karalıst_${engin}`, 'karalistede')
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`Merhaba sahibim! \n <@${engin}> adlı kişiyi başarı ile karalisteye aldım! \n Bundan sonra beni kullanamayacak!`)
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