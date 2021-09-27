const alescnm = require('discord.js');
const roldb = require('quick.db');
exports.run = async(client, message, args) => {
  if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = roldb.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
    var renks = `#36393f`
    if(!args[0]) return message.reply (`Bir seçenek belirtiniz. Eğer kullanımı bilmiyorsanız \`${prefix}otorol yardım\``)
    if(args[0] == "ayarla" || args[0] == "aç") {
        if(args[1] == "kanal" ||args[1] == "channel") {
        var ales = message.mentions.channels.first() || message.guild.channel.cache.get(args[2]);
    if(!ales) return message.reply('Bir kanal belirtiniz.')
    roldb.set(`otorolkanali_${message.guild.id}`, ales.id)
    return message.reply(new alescnm.MessageEmbed().setColor(renks).setDescription('Otorol kanalı başarı ile ayarlandı.'))}
    if(args[1] == "rol" || args[1] == "role") {
      roldb.set(`otorols_${message.guild.id}`,`<:onn:891927243574628382>`)
        var ronney = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
        if(!ronney) return message.reply("Lütfen bir rol belirtiniz")
        roldb.set(`otorolrolu_${message.guild.id}`, ronney.id)
        return message.reply(new alescnm.MessageEmbed().setColor(renks).setDescription('Otorol rolü başarıyla ayarlandı.'))}}
    if(args[0] == "sıfırla" || args[0] == "kapat") {
      roldb.delete(`otorols_${message.guild.id}`)
        roldb.delete(`otorolkanali_${message.guild.id}`)
        roldb.delete(`otorolrolu_${message.guild.id}`)
        message.channel.send(new alescnm.MessageEmbed().setColor(renks).setTitle('OTO ROL KAPATILDI').setDescription('Sistem Başarıyla Devre Dışı Bırakıldı'))}
    if(args[0] == "yardım" || args[0] == "help") {
        const embedv1 = new alescnm.MessageEmbed()
        .setColor(renks)
        .setTitle('Oto-Rol Yardım')
        .addField(`${prefix}otorol ayarla kanal`,'Otorol kanalını ayarlar')
        .addField(`${prefix}otorol ayarla rol`,"Otorol rolünü ayarlar")
        .addField(`${prefix}otorol sıfırla`,"Otorol veritabanını sıfırlar")
        .setFooter("EFDA OTOROL")
        message.channel.send(embedv1)
}
}
module.exports.conf = {permLevel: 3, aliases: []}; module.exports.help = {name: "otorol"}