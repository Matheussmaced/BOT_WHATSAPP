import qrcode from 'qrcode-terminal'
import { Client } from 'whatsapp-web.js'

const client = new Client()

const options = ['Pedra', 'Papel', 'Tesoura']

// qr code
client.on('qr', (qr) => {
  qrcode.generate(qr, {small: true})
})


// connection success
client.on('ready', () => {
  console.log('Client initiated!')
})

// get menssage's
client.on('message', (message) => {
  const messageVerification = message.body.toLocaleLowerCase()

  if(messageVerification.includes('bot')) {
    message.reply('Olá, tudo bem ? Vamos jogar pedra, papel e tesoura. Escreva uma das três opções.')
  }

  if(
    messageVerification.includes('pedra')
    || messageVerification.includes('tesoura')
    || messageVerification.includes('papel')
  ){
    const randomIndex = Math.floor(Math.random() * options.length)

    message.reply(options[randomIndex])
    console.log(options[randomIndex]);
  }

});

client.initialize();