const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

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
  console.log(message.body);

  if(message.body.toLocaleLowerCase().includes('bot')) {
    message.reply(
      'Olá, qual a sua pergunta? Lembrando que estou em fase de teste, pergunte por exemplo quanto é a derivada de x²'
      )
  }
  if(message.body.includes('x²')) {
    message.reply(
      "A derivada de x² em relação a x é encontrada aplicando a regra da potência. Para uma função f(x) = x^n, a derivada f'(x) é calculada com nx^n-1. Para f(x) = x², aplicamos essa regra: f'(x) = 2x^2-1 = 2x. Então o resultado da derivada de x² em relação a x é 2x"
    )
  }
});


client.initialize();