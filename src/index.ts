import * as Discord from 'discord.js';
import useConfig from './configProvider';

(async () => {
    const { DISCORD_BOT_TOKEN } = useConfig();
    const bot = new Discord.Client();

    bot.on('ready', () => {
        if (bot.user === null) {
            console.error(`🔴 Failed to start Discord app`);
        } else {
            console.log(`🟢 Logged in as ${bot.user.tag}!`);
        }
    });

    await bot.login(DISCORD_BOT_TOKEN);
})();
