const { cmd } = require('../command');
const { getAnti, setAnti } = require('../data/antidel');

cmd({
    pattern: "antidelete",
    alias: ['antidel', 'del'],
    desc: "Toggle anti-delete feature",
    category: "misc",
    filename: __filename
},
async (conn, mek, m, { from, reply, text, isCreator }) => {
    const send = async (txt) => {
        return await conn.sendMessage(from, {
            text: txt,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363382023564830@newsletter',
                    newsletterName: '🌐𝐁.𝐌.𝐁-𝐗𝐌𝐃🌐',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });
    };

    if (!isCreator) return send('❌ This command is only for the bot owner');

    try {
        const currentStatus = await getAnti();

        if (!text || text.toLowerCase() === 'status') {
            return send(`*AntiDelete Status:* ${currentStatus ? '✅ ON' : '❌ OFF'}\n\nUsage:\n• .antidelete on - Enable\n• .antidelete off - Disable`);
        }

        const action = text.toLowerCase().trim();

        if (action === 'on') {
            await setAnti(true);
            return send('✅ Anti-delete has been enabled');
        } 
        else if (action === 'off') {
            await setAnti(false);
            return send('❌ Anti-delete has been disabled');
        } 
        else {
            return send('Invalid command. Usage:\n• .antidelete on\n• .antidelete off\n• .antidelete status');
        }
    } catch (e) {
        console.error("Error in antidelete command:", e);
        return send("❌ An error occurred while processing your request.");
    }
});
