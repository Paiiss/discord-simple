import { ICommand } from 'wokcommands';
import { MessageEmbed } from 'discord.js';

export default {
  category: 'Info',
  description: 'Replies with pong', 
  
  slash: false,
  // testOnly: true,
  aliases: ['p'],
  guildOnly: true,
  // expectedArgs: '',
  // minArgs: 0,
  // maxArgs: 0,
  // permissions: [],
  // cooldown: '5s',

  callback: async ({ message, client }) => {
        let createdAt:any = message.createdAt
        const msg:any = await message.channel.send(`🏓 Pinging...`)
        const embed = new MessageEmbed()
            .setTitle('Pong! 🚀')
            .setColor('#FF7878')
            .setDescription(`❒ **Ping** : ${client.ws.ping}MS\n ❒ **Message edit ping is** : ${Math.floor(msg.createdAt - createdAt)}MS!`)
            await message.channel.send({embeds: [embed]})
            msg.delete()
  },
} as ICommand
