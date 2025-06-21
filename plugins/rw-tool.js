const { cmd } = require("../command");
const axios = require("axios");

cmd({
  pattern: "rw",
  alias: ["randomwall", "wallpaper"],
  react: "🖼️",
  desc: "Download random wallpapers based on keywords.",
  category: "wallpapers",
  use: ".rw <keyword>",
  filename: __filename
}, async (conn, m, store, { from, args, reply }) => {
  try {
    const query = args.join(" ") || "random";
    const apiUrl = `https://pikabotzapi.vercel.app/random/randomwall/?apikey=anya-md&query=${encodeURIComponent(query)}`;

    const { data } = await axios.get(apiUrl);

    const contextInfo = {
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363382023564830@newsletter",
        newsletterName: "B.M.B-XMD CHANNEL",
        serverMessageId: 17
      }
    };

    if (data.status && data.imgUrl) {
      const caption = `📸 *Random Wallpaper: ${query}*\n\n> *© Powered by 𝙱.𝙼.𝙱-𝚇𝙼𝙳*`;
      await conn.sendMessage(from, {
        image: { url: data.imgUrl },
        caption,
        contextInfo
      }, { quoted: m });
    } else {
      reply(`❌ No wallpaper found for *"${query}"*.`);
    }
  } catch (error) {
    console.error("Wallpaper Error:", error);
    reply("❌ An error occurred while fetching the wallpaper. Please try again.");
  }
});
