import { Telegraf } from 'telegraf';
import { shortLink } from './service/bot.services.js';

import dotenv from 'dotenv';
dotenv.config();


const bot = new Telegraf(process.env.TOKEN); // Reemplaza BOT_TOKEN con el token de tu bot.
console.log('bots corriendo...');
bot.start((ctx) => ctx.reply('¡Habla Figura que Hay! Asere , Gilbert me dijo que tienes Bateo con la descarga en telegram Envíame un archivo y te proporcionaré un enlace de descarga.'));
bot.command('quehay', (ctx) => ctx.reply(`Bueno mi herman@ proximamente lo que viene es tiza \n
1-Es q me envies un link de telegram pa que puedas descargar los videos de Oscar (l-ment)\n
2-Des pues los de youtube pa que descarguen sus cositas`))
bot.on('document', async (ctx) => {
    try {
        const link = await ctx.telegram.getFileLink(ctx.message.document.file_id);
        const short = await shortLink(link);
        ctx.reply(`Aquí está tu enlace de descarga: ${short} Mira te reenvia a una pagina en el navegador despues cierras la pagina y ya matas lindo`);
    } catch (error) {
        console.log(error);
        ctx.reply('Ha ocurrido un error al intentar obtener el enlace de descarga.');
    }
});

bot.launch();