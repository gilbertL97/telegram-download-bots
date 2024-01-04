const {Telegraf} = require('telegraf');

const bot = new Telegraf('6489318466:AAEwOa9JryBk9ALe-RrkvTMqABmQvI_Egrc'); // Reemplaza BOT_TOKEN con el token de tu bot.
console.log('bots corriendo...');
bot.start((ctx) => ctx.reply('¡Bienvenido! Envíame un archivo y te proporcionaré un enlace de descarga.'));

bot.on('document', async (ctx) => {
    try {
        const link = await ctx.telegram.getFileLink(ctx.message.document.file_id);
        ctx.reply(`Aquí está tu enlace de descarga: ${link}`);
    } catch (error) {
        console.log(error);
        ctx.reply('Ha ocurrido un error al intentar obtener el enlace de descarga.');
    }
});

bot.launch();