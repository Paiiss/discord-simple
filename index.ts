import { Client, Intents } from 'discord.js';
import WOKCommnds from 'wokcommands';
import path from 'path';
import dotev from 'dotenv';
dotev.config()

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,  
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ]
})

client.on('ready', () => {
    console.log("Is ready");
    client.user.setStatus('idle')

    new WOKCommnds(client, {
        commandDir: path.join(__dirname, 'commands'),
        featureDir: path.join(__dirname, 'features'),
        messagesPath: path.join(__dirname, 'messages.json'),
        typeScript: true,
        showWarns: true,
        delErrMsgCooldown: -1,
        ignoreBots: false,
        ephemeral: true,
        dbOptions: {
            keepAlive: true
                },
        testServers: ['689989578828152845', '767265698308947979', '890904219199082517'],
        botOwners: ['762992235385716756'],
        mongoUri: process.env.MONGO_URI,
        debug: false
    })
    .setDefaultPrefix('ts!')
    .setColor(0xff0000)
    .setCategorySettings(
        [
            {
                name: 'Info',
                emoji: '🚧'
            },
            {
                name: 'Config',
                emoji: '🕹️'
            },
            {
                name: 'Server',
                emoji: '🖥️'
            }
        ]
    )
    .on('languageNotSupported', (guild, lang) => {    
        console.log(`"${guild.name}" Attempted to set language to "${lang}"`)  
    })
    .on('commandException', (command, message, error) => {    
        console.log(`An exception occured when using command "${command.names[0]}"! The error is:`)    
        console.error(error)  
    })
    
})

client.login(process.env.TOKEN)
