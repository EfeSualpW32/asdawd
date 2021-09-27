const qdb = require('quick.db');
exports.run = async(client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return;
  if(!args[0] || args[0] !== "sıfırla"){
  var tag = args.slice(0).join(' ')
  if(!tag) return message.channel.send("Bir tag belirt!")
    qdb.set(`ototag_${message.guild.id}`, tag)
          qdb.set(`ototags_${message.guild.id}`,`<:onn:891927243574628382>`)
    return message.channel.send("Oto Tag Ayarlandı!")
  }
  if(args[0] == "sıfırla"){
         qdb.delete(`ototags_${message.guild.id}`)
    qdb.delete(`ototag_${message.guild.id}`)
    return message.channel.send("Oto Tag Sıfırlandı!")
  }
}
exports.conf = {
 aliases: ["oto-tag"],
  permLevel: 0
}
exports.help = {
  name: "ototag"
}