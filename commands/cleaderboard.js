exports.run = async (client, message) => {
  
  let data = client.userInfo.array();
  let d = data.sort((a, b) => b.money - a.money).splice(0, 10);
  var sending = "";
  
  for (var i = 0; i < d.length; i++) {
    let user = client.users.get(d[i].id);
    if (!user) return;
    sending += `\`${i+1}\`. **${user.username}**, level **${d[i].money}**\n`
  }; 
  
  const embed = new client.Discord.MessageEmbed()
  .setColor('ORANGE')
  .addField("Global Credits Leaderboard", sending)
  .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format:'png',size:1024}))
  .setTimestamp()

  message.channel.send(embed)

}

exports.help = {
  name: 'cleaderboard',
  description: 'Shows up to the top 10 users and their credits',
  usage: '{}clb',
  inHelp: 'yes'
}

exports.conf = {
  aliases: ['clb']
}
