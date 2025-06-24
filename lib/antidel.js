const { isJidGroup } = require('@whiskeysockets/baileys');
const { loadMessage, getAnti } = require('../data');
const config = require('../config');

// TEXT FORMAT IN BOX
const DeletedText = async (conn, mek, jid, _, isGroup, update) => {
    const content = mek.message?.conversation || mek.message?.extendedTextMessage?.text || '*(Empty Text)*';
    const sender = isGroup ? update.key.participant?.split('@')[0] : update.key.remoteJid?.split('@')[0];
    const time = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const box = `
┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 👤 SENDER: @${sender}
┣━━━━━━━━━━━━━━━━━━━━━━━
┃ 🕒 TIME: ${time}
┣━━━━━━━━━━━━━━━━━━━━━━━
┃ ⚠️ ACTION: Deleted a Message
┣━━━━━━━━━━━━━━━━━━━━━━━
┃ 💬 MESSAGE: ${content}
┗━━━━━━━━━━━━━━━━━━━━━━━┛`.trim();

    await conn.sendMessage(
        jid,
        {
            text: box,
            contextInfo: {
                mentionedJid: [update.key.participant],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363382023564830@newsletter',
                    newsletterName: '🌐𝐁.𝐌.𝐁-𝐗𝐌𝐃🌐',
                    serverMessageId: 143
                }
            }
        },
        { quoted: mek }
    );
};

// MEDIA DELETED
const DeletedMedia = async (conn, mek, jid, isGroup, update) => {
    const msg = structuredClone(mek.message);
    const messageType = Object.keys(msg)[0];
    const sender = isGroup ? update.key.participant?.split('@')[0] : update.key.remoteJid?.split('@')[0];
    const time = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const box = `
┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 👤 SENDER: @${sender}
┣━━━━━━━━━━━━━━━━━━━━━━━
┃ 🕒 TIME: ${time}
┣━━━━━━━━━━━━━━━━━━━━━━━
┃ ⚠️ ACTION: Deleted Media
┣━━━━━━━━━━━━━━━━━━━━━━━
┃ 📎 RECOVERING MEDIA...
┗━━━━━━━━━━━━━━━━━━━━━━━┛`.trim();

    if (msg[messageType]) {
        msg[messageType].contextInfo = {
            stanzaId: mek.key.id,
            participant: mek.sender,
            quotedMessage: mek.message,
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363382023564830@newsletter',
                newsletterName: '🌐𝐁.𝐌.𝐁-𝐗𝐌𝐃🌐',
                serverMessageId: 143
            }
        };
    }

    await conn.sendMessage(jid, {
        text: box,
        contextInfo: {
            mentionedJid: [sender],
            forwardingScore: 999,
            isForwarded: true
        }
    }, { quoted: mek });

    await conn.relayMessage(jid, msg, {});
};

// MAIN LOGIC
const AntiDelete = async (conn, updates) => {
    for (const update of updates) {
        if (update.update.message === null) {
            const store = await loadMessage(update.key.id);
            if (!store || !store.message) continue;

            const mek = store.message;
            const isGroup = isJidGroup(store.jid);
            const status = await getAnti();
            if (!status) continue;

            const jid = config.ANTI_DEL_PATH === "inbox"
                ? conn.user.id
                : isGroup ? store.jid : update.key.remoteJid;

            if (mek.message?.conversation || mek.message?.extendedTextMessage) {
                await DeletedText(conn, mek, jid, "", isGroup, update);
            } else {
                await DeletedMedia(conn, mek, jid, isGroup, update);
            }
        }
    }
};

module.exports = {
    DeletedText,
    DeletedMedia,
    AntiDelete
};
