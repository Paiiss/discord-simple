import { Client } from 'discord.js'
import { ICommand } from 'wokcommands'

const setStatus = (client: Client, status: string) => {
  client.user?.setPresence({
    status: 'online',
    activities: [
      {
        name: status,
      },
    ],
  })
}

export default {
  // Best practice for the built-in help menu
  category: 'Config',
  description: 'Updates the status for the bot',
  
  minArgs: 1,
  expectedArgs: '<status>',
  
  ownerOnly: true,
  
  init: (client: Client) => {
    const status = "Testing" 
    setStatus(client, status)
  },
  
  // This method is invoked anytime the command is ran
  callback: ({ client, text, message }) => {
    setStatus(client, text)
    
    // TODO: Store the status (text variable) to a database
    
    message.reply({
      content: 'Status set!'
    })
  },
} as ICommand
