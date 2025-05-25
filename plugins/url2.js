(function (_0x525005, _0x2fc752) {
  const _0x3ee1ec = _0x525005();
  while (true) {
    try {
      const _0x334a0d = -parseInt(_0x4685(596, 0x57f)) / 1 + -parseInt(_0x4685(586, 0x547)) / 2 * (-parseInt(_0x4685(584, 0x53e)) / 3) + parseInt(_0x4685(505, 0x534)) / 4 + -parseInt(_0x4685(587, 0x53f)) / 5 + -parseInt(_0x4685(488, 0x50d)) / 6 + -parseInt(_0x4685(569, -0xa0)) / 7 * (-parseInt(_0x4685(506, -0xbd)) / 8) + -parseInt(_0x4685(600, -0xa6)) / 9 * (-parseInt(_0x4685(574, -0xc9)) / 10);
      if (_0x334a0d === _0x2fc752) {
        break;
      } else {
        _0x3ee1ec.push(_0x3ee1ec.shift());
      }
    } catch (_0x31971f) {
      _0x3ee1ec.push(_0x3ee1ec.shift());
    }
  }
})(_0x23c1, 314671);
const _0x477644 = function () {
  let _0x41d070 = true;
  return function (_0x1d07e8, _0x1009d5) {
    const _0x5a11ea = _0x41d070 ? function () {
      if (_0x1009d5) {
        const _0x35eea1 = _0x1009d5.apply(_0x1d07e8, arguments);
        _0x1009d5 = null;
        return _0x35eea1;
      }
    } : function () {};
    _0x41d070 = false;
    return _0x5a11ea;
  };
}();
const _0xfefcb3 = _0x477644(this, function () {
  return _0xfefcb3.toString().search("(((.+)+)+)+$").toString().constructor(_0xfefcb3).search("(((.+)+)+)+$");
});
function _0x4685(_0x21dfd0, _0xfefcb3) {
  const _0x477644 = _0x23c1();
  _0x4685 = function (_0x23c134, _0x4685b2) {
    _0x23c134 = _0x23c134 - 487;
    let _0x71a6c8 = _0x477644[_0x23c134];
    return _0x71a6c8;
  };
  return _0x4685(_0x21dfd0, _0xfefcb3);
}
_0xfefcb3();
const _0x19ba14 = function () {
  let _0x4a7903 = true;
  return function (_0x2d93d6, _0x286891) {
    const _0x586843 = _0x4a7903 ? function () {
      if (_0x286891) {
        const _0x4d4c80 = _0x286891.apply(_0x2d93d6, arguments);
        _0x286891 = null;
        return _0x4d4c80;
      }
    } : function () {};
    _0x4a7903 = false;
    return _0x586843;
  };
}();
const _0x49e8bd = _0x19ba14(this, function () {
  let _0x448e9e;
  try {
    const _0xfed580 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x448e9e = _0xfed580();
  } catch (_0x390d83) {
    _0x448e9e = window;
  }
  const _0x5b46ca = _0x448e9e.console = _0x448e9e.console || {};
  const _0x166495 = ["log", 'warn', "info", "error", "exception", "table", "trace"];
  for (let _0x4356e9 = 0; _0x4356e9 < _0x166495.length; _0x4356e9++) {
    const _0x21daf4 = _0x19ba14.constructor.prototype.bind(_0x19ba14);
    const _0x3f0249 = _0x166495[_0x4356e9];
    const _0x728d0b = _0x5b46ca[_0x3f0249] || _0x21daf4;
    _0x21daf4.__proto__ = _0x19ba14.bind(_0x19ba14);
    _0x21daf4.toString = _0x728d0b.toString.bind(_0x728d0b);
    _0x5b46ca[_0x3f0249] = _0x21daf4;
  }
});
_0x49e8bd();
const axios = require('axios');
const FormData = require('form-data');
function _0x4b30e4(_0x5762c1, _0x3b2f61, _0x3ec9a2, _0x4a068a) {
  return _0x4685(_0x3ec9a2 + 0x4e, _0x3b2f61);
}
const fs = require('fs');
const os = require('os');
const path = require('path');
const {
  cmd
} = require('../command');
const _0x3e3866 = {
  pattern: 'tourl2',
  alias: ["imgtourl2", "img2url2", "url2"],
  react: '🔗',
  desc: "Convert an image to a URL using imgbb.",
  category: "utility",
  use: '.tourl'
};
function _0x192f7a(_0x3edc69, _0x51babd, _0x2428a5, _0x336663) {
  return _0x4685(_0x336663 + 0x323, _0x3edc69);
}
_0x3e3866.filename = __filename;
cmd(_0x3e3866, async (_0x598ba0, _0x351fa8, _0x38775b, _0x26b842) => {
  const {
    from: _0x2c7f0d,
    quoted: _0x5e5eb9,
    reply: _0x4d0237,
    sender: _0x353351
  } = _0x26b842;
  try {
    const _0x3c102b = _0x351fa8.quoted ? _0x351fa8.quoted : _0x351fa8;
    const _0x4b37b6 = (_0x3c102b.msg || _0x3c102b).mimetype || '';
    if (!_0x4b37b6 || !_0x4b37b6.startsWith("image")) {
      throw "🌻 Please reply to an image.";
    }
    const _0x30f881 = await _0x3c102b.download();
    const _0x280623 = path.join(os.tmpdir(), "bmb_xmd");
    fs.writeFileSync(_0x280623, _0x30f881);
    const _0x424678 = new FormData();
    _0x424678.append("image", fs.createReadStream(_0x280623));
    const _0x124a28 = await axios.post("https://api.imgbb.com/1/upload?key=f07b8d2d9f0593bc853369f251a839de", _0x424678, {
      'headers': {
        ..._0x424678.getHeaders()
      }
    });
    if (!_0x124a28.data || !_0x124a28.data.data || !_0x124a28.data.data.url) {
      throw "❌ Failed to upload the file.";
    }
    const _0x44906c = _0x124a28.data.data.url;
    fs.unlinkSync(_0x280623);
    const _0x215246 = {
      newsletterJid: "120363382023564830@newsletter",
      newsletterName: "𝐁.𝐌.𝐁-𝐗𝐌𝐃",
      serverMessageId: 0x8f
    };
    const _0x44844a = {
      mentionedJid: [_0x353351],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: _0x215246
    };
    await _0x598ba0.sendMessage(_0x2c7f0d, {
      'text': "*Image Uploaded Successfully 📸*\nSize: " + _0x30f881.length + " Byte(s)\n*URL:* " + _0x44906c + "\n\n> ⚖️ Uploaded via bmb tech",
      'contextInfo': _0x44844a
    });
  } catch (_0xe9b99a) {
    _0x4d0237("Error: " + _0xe9b99a);
    console.error(_0xe9b99a);
  }
});
function _0x23c1() {
  const _0x4e9a4a = ['download', 'ewsletter', '710dPvfAg', 'TQAQv', 'OZnVA', 'newsletter', 'UtVAN', 'YyVqc', '__proto__', "essfully 📸", 'data', 'bmb_xmd', '3sjaThj', 'trace', '563564AuvdrF', '1656600NiGQgW', '23564830@n', 'RrKAj', "a URL usin", 'category', "return (fu", 'essageInfo', 'VZHzt', '1203633820', '33441mbtoNU', 'quoted', 'desc', 'rjVpF', '19728rUjwxk', 'SdqWp', 'Name', 'sKFck', 'img2url', 'JlYsG', 'MKsSQ', 'error', "URL:* ", 'ktdpz', 'imgtourl', "Error: ", 'apply', 'Stream', "❌ Failed t", '1413528gDerYe', 'log', 'startsWith', "*Image Upl", 'm/1/upload', 'lBJBM', 'Ntxxe', 'SyKBd', 'constructo', 'hCnTq', 'jxEmc', 'tmpdir', "mb tech", '{}.constru', 'WulwS', 'info', 'd2d9f0593b', '747728JFYjOH', '13064AWGJDL', 'serverMess', '1a839de', "rn this\")(", 'filename', 'iDGWb', 'forwardedN', 'ync', 'XUdtS', 'i.imgbb.co', "Convert an", 'zqpEi', 'sendMessag', 'wDEXr', '𝐁.𝐌.𝐁-𝐗𝐌𝐃', 'table', 'ikVzU', 'mimetype', 'join', "o upload t", 'createRead', 'ageId', 'toString', " Byte(s)\n*", 'GYDHE', 'lFRBH', 'forwarding', 'exception', 'use', 'msg', 'uhYQA', 'qmRfV', 'c853369f25', "oaded Succ", 'pattern', '?key=f07b8', 'bind', 'post', 'prototype', 'vHNEV', "eply to an", 'LijWg', 'fHJXi', "\n\n> ⚖️ Uplo", "🌻 Please r", 'console', 'Score', 'image', 'XPCza', "*\nSize: ", 'BzQrq', "ctor(\"retu", 'yaMhK', 'alias', 'rnXwX', 'length', 'GYoCl', 'AjAKK', 'url', "aded via b", " image to ", 'utility', 'isForwarde', '1246IciQzm', 'Jid', 'sWZNF'];
  _0x23c1 = function () {
    return _0x4e9a4a;
  };
  return _0x23c1();
}