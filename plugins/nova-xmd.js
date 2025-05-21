

function hi() {
  console.log("Hello World!");
}
hi();
const config = require("../config");
const {
  cmd,
  commands
} = require("../command");
function isEnabled(_0x3264b4) {
  return _0x3264b4 && _0x3264b4.toString().toLowerCase() === "true";
}
cmd({
  'pattern': "bmbxmd",
  'alias': ["settings", "allvar", 'botsettings'],
  'desc': "Settings of bot",
  'category': "menu",
  'react': '⚙️',
  'filename': __filename
}, async (_0x348789, _0x2be45f, _0x472b12, {
  from: _0x48385f,
  quoted: _0x2a403d,
  reply: _0x1108df
}) => {
  try {
    let _0x3f94d8 = "╔════❰ *🔥𝐁.𝐌.𝐁-𝐗𝐌𝐃🔥* ❱════╗\n┃➳┃╔━═══════─━─\n┃➳┃┃➳*𝐁.𝐌.𝐁-𝐗𝐌𝐃 SETTINGS 🎗️*\n┃➳┃╚━═══════─━─➳\n╰────────────────┈⊷\n╔══❰ *Enabled Disabled* ❱════\n┇๏ *Auto Read Status:* " + (config.AUTO_STATUS_SEEN && config.AUTO_STATUS_SEEN.toString().toLowerCase() === "true" ? "Enabled ✅" : "Disabled ❌") + "\n┇๏ *Auto Reply Status:* " + (config.AUTO_STATUS_REPLY && config.AUTO_STATUS_REPLY.toString().toLowerCase() === "true" ? "Enabled ✅" : "Disabled ❌") + "\n┇๏ *Auto Reply:* " + (config.AUTO_REPLY && config.AUTO_REPLY.toString().toLowerCase() === "true" ? "Enabled ✅" : "Disabled ❌") + "\n┇๏ *Auto Sticker:* " + (config.AUTO_STICKER && config.AUTO_STICKER.toString().toLowerCase() === "true" ? "Enabled ✅" : "Disabled ❌") + "\n┇๏ *Auto Voice:* " + (config.AUTO_VOICE && config.AUTO_VOICE.toString().toLowerCase() === "true" ? "Enabled ✅" : "Disabled ❌") + "\n┇๏ *Custom Reacts:* " + (config.CUSTOM_REACT && config.CUSTOM_REACT.toString().toLowerCase() === "true" ? "Enabled ✅" : "Disabled ❌") + "\n┇๏ *Auto React:* " + (config.AUTO_REACT && config.AUTO_REACT.toString().toLowerCase() === "true" ? "Enabled ✅" : "Disabled ❌") + "\n┇๏ *Delete Links:* " + (config.DELETE_LINKS && config.DELETE_LINKS.toString().toLowerCase() === "true" ? "Enabled ✅" : "Disabled ❌") + "\n┇๏ *Anti-Link:* " + (config.ANTI_LINK && config.ANTI_LINK.toString().toLowerCase() === "true" ? "Enabled ✅" : "Disabled ❌") + "\n┇๏ *Anti-Bad Words:* " + (config.ANTI_BAD && config.ANTI_BAD.toString().toLowerCase() === "true" ? "Enabled ✅" : "Disabled ❌") + "\n┇๏ *Auto Typing:* " + (config.AUTO_TYPING && config.AUTO_TYPING.toString().toLowerCase() === "true" ? "Enabled ✅" : "Disabled ❌") + "\n┇๏ *Auto Recording:* " + (config.AUTO_RECORDING && config.AUTO_RECORDING.toString().toLowerCase() === "true" ? "Enabled ✅" : "Disabled ❌") + "\n┇๏ *Always Online:* " + (config.ALWAYS_ONLINE && config.ALWAYS_ONLINE.toString().toLowerCase() === "true" ? "Enabled ✅" : "Disabled ❌") + "\n┇๏ *Public Mode:* " + (config.PUBLIC_MODE && config.PUBLIC_MODE.toString().toLowerCase() === "true" ? "Enabled ✅" : "Disabled ❌") + "\n┇๏ *Read Message:* " + (config.READ_MESSAGE && config.READ_MESSAGE.toString().toLowerCase() === "true" ? "Enabled ✅" : "Disabled ❌") + "\n╰━━━━━━━━━━━━──┈⊷\n> " + config.DESCRIPTION;
    await _0x348789.sendMessage(_0x48385f, {
      'image': {
        'url': "https://files.catbox.moe/6lwftg.jpg"
      },
      'caption': _0x3f94d8,
      'contextInfo': {
        'mentionedJid': [_0x472b12.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': '120363382023564830@newsletter',
          'newsletterName': "❄️『 🔥𝐁.𝐌.𝐁-𝐗𝐌𝐃🔥 』❄️",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x2be45f
    });
    await _0x348789.sendMessage(_0x48385f, {
      'audio': {
        'url': 'https://files.catbox.moe/0xkthx.mp3'
      },
      'mimetype': "audio/mp4",
      'ptt': true
    }, {
      'quoted': _0x2be45f
    });
  } catch (_0x51ee1f) {
    console.log(_0x51ee1f);
    _0x1108df("Error: " + _0x51ee1f.message);
  }
});
