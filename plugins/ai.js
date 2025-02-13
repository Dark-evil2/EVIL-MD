(function (_0x4fc63f, _0x5b5e9a) {
    const _0x144763 = _0x4fc63f();
    while (true) {
      try {
        const _0x1bfd4e = parseInt(_0x391d(0x2b0, "eKWU")) / 0x1 * (parseInt(_0x391d(0x456, "EKb0")) / 0x2) + -parseInt(_0x391d(0x436, "vFN1")) / 0x3 * (-parseInt(_0x391d(0x3c7, "g[Jx")) / 0x4) + parseInt(_0x391d(0x2ea, "iKvA")) / 0x5 + parseInt(_0x391d(0x205, ')A9C')) / 0x6 + -parseInt(_0x391d(0x18c, "[RpR")) / 0x7 + -parseInt(_0x391d(0x2c6, "jKEd")) / 0x8 + parseInt(_0x391d(0x344, "g[Jx")) / 0x9;
        if (_0x1bfd4e === _0x5b5e9a) {
          break;
        } else {
          _0x144763.push(_0x144763.shift());
        }
      } catch (_0x55a0a3) {
        _0x144763.push(_0x144763.shift());
      }
    }
  })(_0x201d, 0x97129);
  const config = require("../settings");
  const {
    cmd,
    commands
  } = require("../lib/command");
  const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson
  } = require("../lib/functions");
  const axios = require("axios");
  async function logo(_0x15d85f) {
    try {
      const {
        data: _0x10df7c
      } = await axios.post("https://boredhumans.com/apis/boredagi_api.php", "prompt=" + _0x15d85f.replace(/\s+/g, "%2520") + "&uid=lwle4nyomx5t0w6quo8&sesh_id=6a55e5df-19f2-4043-b295-a8955f9d528c&get_tool=false&tool_num=44", {
        'headers': {
          'User-Agent': 'Googlebot-News',
          'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
        }
      });
      const _0x432f74 = _0x10df7c.output.match(/src="([^"]+)"/)[0x1];
      return _0x432f74;
    } catch (_0x11eeaa) {
      return _0x11eeaa;
    }
  }
  function _0x391d(_0x1680f0, _0x53ac00) {
    const _0x294e16 = _0x201d();
    _0x391d = function (_0x196aa7, _0x481514) {
      _0x196aa7 = _0x196aa7 - 0xdd;
      let _0x56f2d5 = _0x294e16[_0x196aa7];
      if (_0x391d.FtnQcF === undefined) {
        var _0x430559 = function (_0x6d62b3) {
          let _0x4caed0 = '';
          let _0x5c5025 = '';
          let _0x39730b = 0x0;
          let _0x5e9725;
          let _0x19738b;
          for (let _0x4b3519 = 0x0; _0x19738b = _0x6d62b3.charAt(_0x4b3519++); ~_0x19738b && (_0x5e9725 = _0x39730b % 0x4 ? _0x5e9725 * 0x40 + _0x19738b : _0x19738b, _0x39730b++ % 0x4) ? _0x4caed0 += String.fromCharCode(0xff & _0x5e9725 >> (-0x2 * _0x39730b & 0x6)) : 0x0) {
            _0x19738b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0x19738b);
          }
          let _0x7097fb = 0x0;
          for (let _0x403bb2 = _0x4caed0.length; _0x7097fb < _0x403bb2; _0x7097fb++) {
            _0x5c5025 += '%' + ('00' + _0x4caed0.charCodeAt(_0x7097fb).toString(0x10)).slice(-0x2);
          }
          return decodeURIComponent(_0x5c5025);
        };
        const _0x337c29 = function (_0x5b2060, _0x1f85df) {
          let _0x232270 = [];
          let _0x5d056f = 0x0;
          let _0x15fb0d;
          let _0x250c88 = '';
          _0x5b2060 = _0x430559(_0x5b2060);
          let _0x2deb04;
          for (_0x2deb04 = 0x0; _0x2deb04 < 0x100; _0x2deb04++) {
            _0x232270[_0x2deb04] = _0x2deb04;
          }
          for (_0x2deb04 = 0x0; _0x2deb04 < 0x100; _0x2deb04++) {
            _0x5d056f = (_0x5d056f + _0x232270[_0x2deb04] + _0x1f85df.charCodeAt(_0x2deb04 % _0x1f85df.length)) % 0x100;
            _0x15fb0d = _0x232270[_0x2deb04];
            _0x232270[_0x2deb04] = _0x232270[_0x5d056f];
            _0x232270[_0x5d056f] = _0x15fb0d;
          }
          _0x2deb04 = 0x0;
          _0x5d056f = 0x0;
          for (let _0x28911a = 0x0; _0x28911a < _0x5b2060.length; _0x28911a++) {
            _0x2deb04 = (_0x2deb04 + 0x1) % 0x100;
            _0x5d056f = (_0x5d056f + _0x232270[_0x2deb04]) % 0x100;
            _0x15fb0d = _0x232270[_0x2deb04];
            _0x232270[_0x2deb04] = _0x232270[_0x5d056f];
            _0x232270[_0x5d056f] = _0x15fb0d;
            _0x250c88 += String.fromCharCode(_0x5b2060.charCodeAt(_0x28911a) ^ _0x232270[(_0x232270[_0x2deb04] + _0x232270[_0x5d056f]) % 0x100]);
          }
          return _0x250c88;
        };
        _0x391d.mTAXmu = _0x337c29;
        _0x1680f0 = arguments;
        _0x391d.FtnQcF = true;
      }
      const _0x154fc2 = _0x294e16[0x0];
      const _0x295261 = _0x196aa7 + _0x154fc2;
      const _0x4c343e = _0x1680f0[_0x295261];
      if (!_0x4c343e) {
        if (_0x391d.RFOWgm === undefined) {
          _0x391d.RFOWgm = true;
        }
        _0x56f2d5 = _0x391d.mTAXmu(_0x56f2d5, _0x481514);
        _0x1680f0[_0x295261] = _0x56f2d5;
      } else {
        _0x56f2d5 = _0x4c343e;
      }
      return _0x56f2d5;
    };
    return _0x391d(_0x1680f0, _0x53ac00);
  }
  const _0xcc8804 = {
    'pattern': 'bard',
    'alias': ["bardai", 'gbard', "googlebard", 'googleai', "ai2"],
    'react': '👾',
    'desc': "It search on bard ai for what you provided.",
    'category': "search",
    'use': ".bard hi",
    'filename': __filename
  };
  cmd(_0xcc8804, async (_0x4a980b, _0x115831, _0xf3e6ac, {
    from: _0x1cf62e,
    l: _0x531428,
    prefix: _0x5814a8,
    quoted: _0x218772,
    body: _0x28f65f,
    isCmd: _0x11e8d0,
    command: _0x2517c9,
    args: _0x3cdbac,
    q: _0x5ac201,
    isGroup: _0xe042e3,
    sender: _0x7b3682,
    senderNumber: _0x55f6f4,
    botNumber2: _0xf3f026,
    botNumber: _0x3e9e45,
    pushname: _0x4e9e82,
    isMe: _0x40c8f6,
    isOwner: _0xba2022,
    groupMetadata: _0x338fdc,
    groupName: _0x5dadaf,
    participants: _0xf1854f,
    groupAdmins: _0xd89b9b,
    isBotAdmins: _0x3afbb7,
    isAdmins: _0x1e2bcf,
    reply: _0x2aeabf
  }) => {
    try {
      if (!_0x5ac201) {
        return _0x2aeabf("Please give me words to search on bard ai !");
      }
      let _0x38f129 = await fetchJson('https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json');
      let _0x5156ff = _0x38f129.users;
      let _0x46b4fa = _0x5156ff[Math.floor(Math.random() * _0x5156ff.length)];
      const _0xda19c9 = await fetchJson(_0x38f129.xz + "api/bard?text=" + _0x5ac201 + "&apikey=" + _0x46b4fa);
      return await _0x2aeabf(_0xda19c9.content);
    } catch (_0x5a2654) {
      try {
        const _0x4acc6a = await fetchJson('https://api.akuari.my.id/ai/gbard?chat=' + _0x5ac201);
        return await _0x2aeabf(_0x4acc6a.respon);
      } catch (_0xad442b) {
        _0x2aeabf("Server is busy. Try again later.!");
        _0x531428(_0xad442b);
      }
    }
  });
  const _0x49d246 = {
    'pattern': "ailogo",
    'alias': ["logoai", 'ail', "gptlogo"],
    'react': '🤖',
    'desc': "It creates ai logos.",
    'category': "other",
    'use': ".ailogo  woman,hair cut collor red,full body,bokeh",
    'filename': __filename
  };
  cmd(_0x49d246, async (_0x22afaf, _0x42bd26, _0x3f11f5, {
    from: _0x5bf6ee,
    l: _0x4d2af3,
    prefix: _0x47b7e7,
    quoted: _0x19c699,
    body: _0x32754b,
    isCmd: _0x5c30ed,
    command: _0x4be67a,
    args: _0x4e62c0,
    q: _0x40084b,
    isGroup: _0x3df1b4,
    sender: _0x2e67cc,
    senderNumber: _0x5e3210,
    botNumber2: _0x191dee,
    botNumber: _0x51dd67,
    pushname: _0x277df3,
    isMe: _0x12a96e,
    isOwner: _0x45f995,
    groupMetadata: _0x33a1f1,
    groupName: _0x378d34,
    participants: _0x3044a9,
    groupAdmins: _0x1db286,
    isBotAdmins: _0xef3f87,
    isAdmins: _0x28903b,
    reply: _0x2da6c7
  }) => {
    try {
      if (!_0x40084b) {
        return _0x2da6c7("Please enter a query");
      }
      let _0x41c461 = await logo(_0x40084b);
      const _0x4d9f8c = {
        'url': _0x41c461
      };
      const _0x4f6ddf = {
        'image': _0x4d9f8c,
        'caption': "*_ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ᴇᴠɪʟ_*"
      };
      const _0x54fb3e = {
        'quoted': _0x42bd26
      };
      _0x22afaf.sendMessage(_0x5bf6ee, _0x4f6ddf, _0x54fb3e);
    } catch (_0x324bba) {
      _0x2da6c7("I can't create that logo");
      _0x4d2af3(_0x324bba);
    }
  });
  const _0x500bb8 = {
    'pattern': "mathgpt",
    'react': '👾',
    'desc': "It search on chatgpt ai for what you provided.",
    'category': 'other'
  };
  function _0x32bfc0(_0x5f3381, _0x2e0621, _0x3085db, _0x2b5cbb, _0x25800b) {
    return _0x391d(_0x2e0621 + 0x113, _0x25800b);
  }
  _0x500bb8.use = ".gptmaths 2-3";
  _0x500bb8.filename = __filename;
  cmd(_0x500bb8, async (_0x644b4, _0x2e2b05, _0x300634, {
    from: _0x2a4d6a,
    l: _0x4a12a2,
    prefix: _0x428212,
    quoted: _0x18b242,
    body: _0x49121b,
    isCmd: _0x3821d6,
    command: _0x44a9f9,
    args: _0x531802,
    q: _0x38fd8e,
    isGroup: _0x593192,
    sender: _0x3c034f,
    senderNumber: _0x3c957c,
    botNumber2: _0xdf03e,
    botNumber: _0x365e66,
    pushname: _0x53289e,
    isMe: _0x4ebe53,
    isOwner: _0x1a7a15,
    groupMetadata: _0x451dd3,
    groupName: _0x5bf2d5,
    participants: _0x73cd66,
    groupAdmins: _0x490549,
    isBotAdmins: _0x373de6,
    isAdmins: _0x3e476a,
    reply: _0x18fa2e
  }) => {
    try {
      if (!_0x38fd8e) {
        return _0x18fa2e("*Please give me words to search on chatgpt ai !*");
      }
    } catch (_0x42f34e) {
      _0x18fa2e("*Server is busy. Try again later.!*");
      _0x4a12a2(_0x42f34e);
    }
  });
  const _0x26e734 = {
    'pattern': 'chatgpt',
    'alias': ['ai', "gpt", "openai", "chat"],
    'react': '👾',
    'desc': "It search on chatgpt ai for what you provided.",
    'category': 'other',
    'use': ".chatgpt hi",
    'filename': __filename
  };
  cmd(_0x26e734, async (_0x4d51ae, _0x49256a, _0x95e809, {
    from: _0x1670c8,
    l: _0xe12f0b,
    prefix: _0x299083,
    quoted: _0x4cdddc,
    body: _0x3c28f9,
    isCmd: _0x165cdf,
    command: _0x45dc52,
    args: _0x458e2f,
    q: _0x2aa889,
    isGroup: _0x4b9bb4,
    sender: _0x2b05e7,
    senderNumber: _0x4b8d7b,
    botNumber2: _0x36e574,
    botNumber: _0x4a94c8,
    pushname: _0x11d732,
    isMe: _0x51d79a,
    isOwner: _0x2182c1,
    groupMetadata: _0x43462a,
    groupName: _0x59dbda,
    participants: _0x4dc3f9,
    groupAdmins: _0x3df467,
    isBotAdmins: _0xbd9678,
    isAdmins: _0x1eb0a4,
    reply: _0x2b3cd3
  }) => {
    try {
      if (!_0x2aa889) {
        return _0x2b3cd3("*Please give me words to search on chatgpt ai !*");
      }
      let _0x50a64c = await fetchJson('https://hercai.onrender.com/v3/hercai?question=' + _0x2aa889);
      return await _0x2b3cd3(_0x50a64c.reply);
    } catch (_0x6dba46) {
      _0x2b3cd3("*Server is busy. Try again later.!*");
      _0xe12f0b(_0x6dba46);
    }
  });
  const _0x3456a4 = {
    'pattern': "chatgpt2",
    'alias': ["ai2", "gpt2", "openai2", "chat2"],
    'react': '👾',
    'desc': "It search on chatgpt ai for what you provided.",
    'category': 'other',
    'use': ".ai2 hi",
    'filename': __filename
  };
  cmd(_0x3456a4, async (_0x54e515, _0x3d9d, _0x5b4ae7, {
    from: _0x4be2f2,
    l: _0x1f5a36,
    prefix: _0x1fc0ff,
    quoted: _0x51edc2,
    body: _0x414eec,
    isCmd: _0x5f1e80,
    command: _0x241dc2,
    args: _0x5e8489,
    q: _0x494bed,
    isGroup: _0x5606f6,
    sender: _0x1c36e5,
    senderNumber: _0x872b90,
    botNumber2: _0x13e838,
    botNumber: _0x3c0260,
    pushname: _0x4e98db,
    isMe: _0x55737c,
    isOwner: _0x3fec26,
    groupMetadata: _0x45791c,
    groupName: _0x47c5bd,
    participants: _0x5bf06b,
    groupAdmins: _0x4d8fcf,
    isBotAdmins: _0x1b90bd,
    isAdmins: _0x2ed831,
    reply: _0x219502
  }) => {
    try {
      if (!_0x494bed) {
        return _0x219502("*Please give me words to search on chatgpt ai !*");
      }
      let _0x475b76 = await fetchJson("https://hercai.onrender.com/v3-32k/hercai?question=" + _0x494bed);
      return await _0x219502(_0x475b76.reply);
    } catch (_0x164dda) {
      _0x219502("*Server is busy. Try again later.!*");
      _0x1f5a36(_0x164dda);
    }
  });
  const _0x2274e0 = {
    'pattern': "turbo",
    'alias': ['ai3', "gpt3", "openai3", "chat3"],
    'react': '👾',
    'desc': "It search on chatgpt ai for what you provided.",
    'category': 'other',
    'use': ".chatgpt hi",
    'filename': __filename
  };
  cmd(_0x2274e0, async (_0x2aaa20, _0x5d6ff7, _0x538ec4, {
    from: _0x3964b1,
    l: _0x38dd67,
    prefix: _0x1b6123,
    quoted: _0x4a55e8,
    body: _0x43f778,
    isCmd: _0x37f9f4,
    command: _0x21b0aa,
    args: _0x5173ee,
    q: _0x328892,
    isGroup: _0xbd7057,
    sender: _0x1f2e48,
    senderNumber: _0x3d9177,
    botNumber2: _0x3c785a,
    botNumber: _0xd05caf,
    pushname: _0x594b06,
    isMe: _0x162cb7,
    isOwner: _0x31d731,
    groupMetadata: _0x4f07cf,
    groupName: _0x455125,
    participants: _0x31a2c1,
    groupAdmins: _0x42d259,
    isBotAdmins: _0xcf9e41,
    isAdmins: _0x54ddb2,
    reply: _0xbd3287
  }) => {
    try {
      if (!_0x328892) {
        return _0xbd3287("*Please give me words to search on chatgpt ai !*");
      }
      let _0x51ddc3 = await fetchJson("https://hercai.onrender.com/turbo/hercai?question=" + _0x328892);
      return await _0xbd3287(_0x51ddc3.reply);
    } catch (_0x475b7f) {
      _0xbd3287("*Server is busy. Try again later.!*");
      _0x38dd67(_0x475b7f);
    }
  });
  const _0x20ce10 = {
    'pattern': 'turbo2',
    'alias': ["ai4", "gpt4", "openai4", "chat4"],
    'react': '👾',
    'desc': "It search on chatgpt ai for what you provided."
  };
  function _0x2eafd5(_0x32c86f, _0x112080, _0x776519, _0x2b5fe2, _0x3b5ed6) {
    return _0x391d(_0x776519 - 0x25a, _0x112080);
  }
  _0x20ce10.category = 'other';
  _0x20ce10.use = ".chatgpt hi";
  _0x20ce10.filename = __filename;
  cmd(_0x20ce10, async (_0x441b06, _0x3822b8, _0x3620ee, {
    from: _0x1d2ac1,
    l: _0x2f8116,
    prefix: _0xfebcf6,
    quoted: _0x51f07f,
    body: _0x5d9195,
    isCmd: _0x1a7d71,
    command: _0x1fe570,
    args: _0x539223,
    q: _0x3bb9de,
    isGroup: _0x111020,
    sender: _0x25e6c5,
    senderNumber: _0x25c113,
    botNumber2: _0x37db1e,
    botNumber: _0x2c5119,
    pushname: _0x1b8989,
    isMe: _0x37b6ac,
    isOwner: _0x17ce23,
    groupMetadata: _0x41f0c9,
    groupName: _0x5c1510,
    participants: _0x56676c,
    groupAdmins: _0xdc39f4,
    isBotAdmins: _0x1a79b5,
    isAdmins: _0x56762a,
    reply: _0x284be8
  }) => {
    try {
      if (!_0x3bb9de) {
        return _0x284be8("*Please give me words to search on chatgpt ai !*");
      }
      let _0x357575 = await fetchJson('https://hercai.onrender.com/turbo-16k/hercai?question=' + _0x3bb9de);
      return await _0x284be8(_0x357575.reply);
    } catch (_0x1bf358) {
      _0x284be8("*Server is busy. Try again later.!*");
      _0x2f8116(_0x1bf358);
    }
  });
  const _0x35736d = {
    'pattern': "gemini",
    'alias': ["ai5", "gpt5", "openai5", "chat5"],
    'react': '👾',
    'desc': "It search on chatgpt ai for what you provided.",
    'category': "other",
    'use': ".chatgpt hi",
    'filename': __filename
  };
  cmd(_0x35736d, async (_0x171745, _0x206462, _0x20b8d1, {
    from: _0x10b905,
    l: _0x4238be,
    prefix: _0x2a8e64,
    quoted: _0x508f90,
    body: _0xcb146b,
    isCmd: _0x2e225d,
    command: _0x34115e,
    args: _0x58cdaf,
    q: _0xf74769,
    isGroup: _0xa73613,
    sender: _0x167d62,
    senderNumber: _0x1e0b96,
    botNumber2: _0x379731,
    botNumber: _0x203dae,
    pushname: _0x930d3,
    isMe: _0x421f4c,
    isOwner: _0x5b9bf6,
    groupMetadata: _0x4edc1e,
    groupName: _0x5cc7bd,
    participants: _0x2aa9c3,
    groupAdmins: _0x5e6fab,
    isBotAdmins: _0x58ab84,
    isAdmins: _0x1a93e7,
    reply: _0x258a98
  }) => {
    try {
      if (!_0xf74769) {
        return _0x258a98("*Please give me words to search on chatgpt ai !*");
      }
      let _0x29e569 = await fetchJson("https://hercai.onrender.com/gemini/hercai?question=" + _0xf74769);
      return await _0x258a98(_0x29e569.reply);
    } catch (_0x54aea4) {
      _0x258a98("*Server is busy. Try again later.!*");
      _0x4238be(_0x54aea4);
    }
  });
  const _0xebe1f4 = {
    'pattern': "aipic",
    'react': '👾',
    'desc': "It search on chatgpt ai for what you provided.",
    'category': "other",
    'use': ".aipic hi",
    'filename': __filename
  };
  cmd(_0xebe1f4, async (_0x143250, _0x5caaf2, _0x1f4b83, {
    from: _0x52d1fd,
    l: _0xac25a1,
    prefix: _0x3e5d52,
    quoted: _0x4455bb,
    body: _0x50c549,
    isCmd: _0x5c036e,
    command: _0x4a076e,
    args: _0x53df57,
    q: _0x534278,
    isGroup: _0x1b5228,
    sender: _0xf440d7,
    senderNumber: _0x586c5d,
    botNumber2: _0x26c4dc,
    botNumber: _0x47cbbb,
    pushname: _0xcbbe22,
    isMe: _0x366f67,
    isOwner: _0x354ddd,
    groupMetadata: _0x6499d6,
    groupName: _0x38345a,
    participants: _0x18b13b,
    groupAdmins: _0x4d493a,
    isBotAdmins: _0x57e2b8,
    isAdmins: _0xdb381e,
    reply: _0x4fd8c7
  }) => {
    try {
      if (!_0x534278) {
        return _0x4fd8c7("*Please give me words to search on chatgpt ai !*");
      }
      let _0x5a0fc9 = await fetchJson("https://api.maher-zubair.tech/ai/photoleap?q=" + _0x534278);
      const _0x410b49 = {
        'url': await _0x5a0fc9.result
      };
      const _0x267259 = {
        'image': _0x410b49,
        'caption': "*_ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ᴇᴠɪʟ_*"
      };
      const _0x584a65 = {
        'quoted': _0x5caaf2
      };
      await _0x143250.sendMessage(_0x52d1fd, _0x267259, _0x584a65);
    } catch (_0x4e970b) {
      _0x4fd8c7("*Server is busy. Try again later.!*");
      _0xac25a1(_0x4e970b);
    }
  });
  function _0x158ffa(_0x48dcbc, _0x8e020f, _0x1da47e, _0x5bec92, _0x33f8c7) {
    return _0x391d(_0x1da47e + 0x1b, _0x48dcbc);
  }
  const _0x5a6730 = {
    'on': "body"
  };
  function _0x4245c0(_0x584bb6, _0x1f7bf9, _0x1eee63, _0x550509, _0x3b397e) {
    return _0x391d(_0x584bb6 - 0x9e, _0x1eee63);
  }
  cmd(_0x5a6730, async (_0xe0d887, _0x2bbfc0, _0x5b2efc, {
    from: _0x3e7b20,
    l: _0x447ea9,
    prefix: _0x4be581,
    quoted: _0x308131,
    body: _0x3a6c50,
    isCmd: _0x282b69,
    command: _0x2b9288,
    args: _0x5be5f4,
    q: _0x4c7c69,
    isGroup: _0x21f09e,
    sender: _0x4815f1,
    senderNumber: _0x76d1bf,
    botNumber2: _0x43a7c6,
    botNumber: _0x4ec681,
    pushname: _0x474def,
    isMe: _0x1a6f96,
    isOwner: _0x4a389b,
    groupMetadata: _0xc3f48a,
    groupName: _0x11681f,
    participants: _0x1dda22,
    groupAdmins: _0x1e7c00,
    isBotAdmins: _0x4bfd22,
    isAdmins: _0x5bb9bb,
    reply: _0x51dc95
  }) => {
    if (config.AI_CHATBOT === "true") {
      if (_0x2bbfc0.key.fromMe) {
        return;
      }
      let _0x23fe94 = await fetchJson("https://hercai.onrender.com/gemini/hercai?question=" + _0x4c7c69);
      return await _0x51dc95(_0x23fe94.reply);
    }
  });
  const _0x2e197e = {};
  function _0x201d() {
    const _0xc7ca31 = ['E8kMCsm0', 'bCkLxmkCW7m', 'W6mFW7FcNSof', 'WRpcNCkTW4Tr', "W5G5vLOA", "W4JdUrOQW6a", "FWBcNHGY", "W4nlW4a", "W7RcT8k4WRf4", "WPzqW4W", 'W4JdHSkVW5hdTa', "jh3cT0ldGW", "W5ZcUmofWQzq", "rmk3zNtcLa", "cSoIeMrh", "W4O9WPFcVmkZ", "WPOod3ddLW", "ce5+W5xcGq", "oSkSWQVcS8kE", "4lww4lwP4lsIWPJGTji", "EmowW4m", "CwCQ", "WQRcKeyAzW", 'W6zPxqVdRW', "W6SUaedcTa", "emk2rCkbW6u", "WRBcN0a6W4q", "W7DqWQJdRL4", "4lE84lsR4lEB4lAA4lAv", 'WQ8/ham', "W6dcQh1AWQS", "WP98WQbitG", "WPtcJ8kWW7jv", "zSkJWRxcO17dPSkAW4FdMmkuC8oP", "W404W4S7jG", 'wGFdLa', "WO3cN8kWWQNcIa", "rGxdLCo+wa", "qbpdNG", 'kmoOWQVcV8o2', "jvm4kq", "W4RdIMe", "A8oonZC+", "dSoduN4h", "n8opW5/dO8oM", "wCkHzNpcQG", "jc9Q", 'F8oMnq', "WPlcRuX6WPi", 'xuddNW', 'EaBcGG0Z', "xH/dSubf", "c19MWO0", 'o8o9W7/cU8o4', "z8oyExOJ", "WPZcUhDsW44", "W77dV8oBW6RdLG", "W5LYWOaaW4m", '4lEi4lwMAbBGTRW', "WPXRe389", 'W5tdPmk9tZu', "x3C9cvC", "WR/cGtRcQWC", "WQq0hqxcRG", "W6qgWQZcMmkf", "WQqOfG", "fmogkvTf", "omomjWhcTa", "mmo9n8kmDW", "W78hW6fQaW", "W5BdG8kgxGi", 'WOe5WPuevG', "W5mPWP8Mma", "h0xcTLzs", 'W7yuW6STaW', "Foc1Roc1S+c1Hoc0NG", "WRZcOuZcSSo6", "WQ9CW4ldI3m", "W4X9W4VcHCk1", 'W6C5tq4', "W7eAW6L3ba", 'WODlWQHAFW', "ywhcRCoOla", "xmoTemofCG", "WPKSWPuaqa", 'du9ZW4tdNq', "ACogW4tcHSog", "WQ/dP8okWR3cQW", "CmkDW5FcUmoQ", 'WRxcJc/dQaa', "W7efW6aKaW", "oCodW43dGqG", "EmoWmCodlq", "WOFcNmkMWQBcJG", "uaLlxSoG", "Amo6nmoz", "WOpcGSkW", 'WQGvW6BdRu4', "WRlcMttcPaK", "nCkZWQ7cG8kq", "yui+kCke", 'AtRcGGKN', "eSoVocu", "leG1nH4", "pCkFW7W", 'puuNk8kA', "ubpdJ8oZEG", "WQzzW6BdTf8", "cCk6umksW6u", "uCoZmSk5rW", "W40TW4T2", "avvR", "4lAmWRnzW4K8", 'ys3dRCoUEq', "hGpdVfDu", 'WORcM8kHWRFcMG', "mmknCtqI", "m8kaCsD/", "fCkubf9M", "W6qjWRlcTaS", 'W7WtWQZcNmkt', "E8k6FNpcTW", 'oINcLWzh', "WO3cJmkrW5iL", "WQqfrKeF", "WOmCcrlcOq", "4lEu4lAYW7dGTRhGTja", 'jJLQWQJdLW', "yCoAWRRcQmoN", "jCoWoadcTa", "W7JcTeKDmW", "W73dJcycW5i", "WOuUW4O4la", 'W70DW6q+uq', "W5/GTiZGTQhGT6FGTi0", "WPFcKCkzWP0X", "D8oKW6RcNSoK", "iSoKWR7cVCo0", 'WRFcKKGkpq', "aCk+xq", 'pmo+W7lcVmo+', "W5KwW5qpoW", 'W5DrWORcOCkU', "WO1IhW", "W6tdJ8oEWOBcGG", 'pSkvCdaJ', "eCoCj0i", "W74DWRtcJq", "WPicWQGXCG", "FCohW5tdO8oS", 'DsRcKbbD', "WPVcV28sFW", 'W6RcM0HRWPa', 'rqhdJ8oUCa', "BSkJq0lcLG", "WQDsW6VdO1u", 's8oAW5hcQSoR', "pLlcOG85", "kSktWQBdLCkK", 'WPBcOdNcVWy', "WPZcImkfW4jb", "dmkUq8ktW5m", 'WPtcHCkAW5mR', 'WP8SWOqErW', 'y8kUWRdcRGhcM8kvW4JdJ8kW', 'WO4/lvFdRW', "F8kVuG", "fqBdLmoOnq", 'WPHXgtiQ', "W5yAW54Bjq", "WRhcQSkEW41F", 'xmowj0rS', "cmoxux4c", "8k+GOUkaLpgnGiVcR+g0OEg2K+g1Ka", "WQ3dJrfUW5m", "n23cO1xdIq", "W7G0B0yE", 'W6pdS8ooW7dcVG', "W6SIhMy9", "WOLVhZ4P", "WPP4x8kHfa", 'WORcPx0CyG', 'bSkhxbmv', "WOzsWR1nAq", "WPnJW6pdVNy", "W4RcV8ogWPn0", "4lsb4lEO4ls/4lsHgW", "l8oSWQZcUq", "Bd58WRhdHa", "aLiqsCo6", 'B8o0iSodmq', "WPhcJhWdW4q", 'DCohW4JcQSo7', "4lAX4lwG4lAgfUc2Uq", "W7VcN11TWOm", 'W7JcSSoHWPH9', "uSoBkbzQ", "WOu4W5bRiq", "lSoQnSkxqq", "ASoBW5xcUCoQ", "W4q4W5PRiq", "W77cVmo2WQr+", "imkuDYe0", "WPhcGCkyW5bJ", "a8knsWW4", 'W59XWPXnW6y', "W6D4tLib", "WOxdGdSkW5u", "W68KrWWk", "W587WO4Dha", "lLa+Amkb", "W6WnW5ephq", "W5LMWRGNW4m", "gCo4mG", "xmkAAvPH", "WOfUet4Z", 'W4RdGCovW4ldKa', "oCo3jCkbgG", "pcJcIXah", "W6RcM1LKWP0", "D8kVvLhcLG", "oLmYnq", "W68DWRBcNmkt", "WOPdWRPE", "WQ7cMtlcPWi", "WOFcUmk0hZ8", "CmoSnCo2ka", 'wSohuNSn', "WP4DaW3cIa", "W7eyWQO+fW", "e8ohiXzV", 'wXP+ySoG', 'B0e+z8kp', 'kmo6n8kaqG', "v0/dNCoVEW", 'WPtcHNpdK8oK', 'f8o+lMBcSG', "W53dVCk0rdO", "WPddPgmo", 'W6WwW6qJta', 'DXXjwSo3', "WQpcLCkKWOtcKa", "W5xdT3zFWOy", 'WRtcHmk7WOJcRq', "e8oaiW", 'W5BdPSoCW6W', "jmoNWQ3cV8o/", 'ke84imkp', "W7/cJL07", "WOCAWPGOyW", "W6DPuKym", "uGpdUffq", 'W7G/r1yn', "pmo2kmkqqa", "lcC2WQ7dLq", "dCkhWPZcKSkL", 'gGDXW4lcIG', 'pgNcLqTz', 'W6ldOmoyWRZcRG', "xmoVemogEW", 'g8oyc1X9', "W4BcOYGaWP5tW4hcI8khlK7dJIu", "W5DrWPy", 'WPfXw8oQbq', "WRxcMs/cUb8", "W4BdOSoXwd4", "fmoBm1HS", "ECosfCk6wG", "m8k/iSkAxa", "WQbwW6i", "h8opltdcVW", "W4mXWOWxha", 'W5VdL8obWOxcHG', 'W7fTWOq1W7a', "WPlcQmktWOJcOW", "dmkOt8oru3L4jNpcNq", "B0CYkCkg", "WRtcUYVcRay", "4lsQW7dcT8o3ma", "W4ZdLSomW4mJ", "m8oFmwbf", "4ls14ls24lARe+c0MW", 'WOT1W5FdN0K', 'h8ovmL57', "WPG2leddOq", 'W4JdIZizW5i', "WRXXW5hdSCk1", "WPLTwq", "W5uWWPWdW68", "W6K4DKSL", "mJFcKvy", "WRJdPw9KW5e", "W5DrWPRcOmkZ", "aSoLjcRcPa", "Fmo+nmkCzq", "pSore8kbDW", "4ls84lAE4lEYe+c0Hq", 'lSoEcCkTzG', 'sCoVdmkn', 'aCk+hSkyW6e', "ldHG", "W6XnW7tcK8kH", 'kqS9jWq', "WRDoqCokgW", "wheW", "WOvKfZy", 'AauHnq4', "W6NcNu3dH8ocEdG", 'vgGApN4', "gmkpqcWl", 'ymowWPy', "vCo8emkAnG", "rmohthay", "qWtdTfvd", "W6aDWR/cH8kx", "W7pdM8oJ", "WP3dOM5dW5u", "W7WgW6KpmW", "W5hGT6xGTzFGTR8t", "WRZcVHW", 'B8k3uKxcHW', "lmk1W6NdSKm", "W6PFW6NdKCkq", "iCoyeJ7cQa", 'WPZcNNBdM8oh', "zCoNkq", "eCovmLnV", "F8kLuKxdKW", "W74UxXFdTG", "qqRdRvfs", "b8kYvSkjzG", "W5PSWQ1OuSkgW5q", "aCkNDXWb", "vwxcRmo+ka", 'W5NdHCoE', "W7/dJtuGW5a", "WPRcHCkeW5rS", 'lSktWQNcLSkG', 'EmkWW6FdQmkK', "WPaTWOyxvG", "vGhdJ8o/CG", "WRNcNNVcVam", 'W5vmW4ZcVSkO', "deHQWPdcJG", "A8oOWRBdUSkW", 'WP3dS2HqW4C', 'vWLxs8oH', "nmkcWRZcHCkN", "WOLUeW", "W7hdHSo9W5W", "WOm9WOatrW", "omkmEti0", "avn6W5xcNq", "fH5xt8oN", 'W7/cKqKOWPm', "W6mFWRNcHSoA", 'YPVlMog3OvdHTl4', "jCoVWRi", "uGxdJ8ofyq", "cCkyWQNcL8k4", "W43dHSoMW7pdNW", 'pLZdMreP', "jhZcT1xdKG", "WPK9WPmtuG", "WR/cGIm", "nMhcV0VcHG", "WQG7gWNcRW", "WO9kWQbCAq", "WPXSWPqgWQS", "FCosm8oykq", "W4KPW5eOoG", "weBcJG", 'xbHnamoW', "W51AW4RcQCoM", 'WOVcMCkWWQNdIq', "4lw14ls/4lEK4lA24lEx", 'bJz/qghdVq7cMWxdGq', "W5uiW606aq", 'bsyadIq', 'tSo4cSkasq', 'nY96WQhcNW', "W5RdUCkLwIG", 'veVdVeTd', "EYdcLrDe", "WOSgWR5sAa", "DmodW5lcPCo8", 'WPtcLmkaWP4', 'W6NdJrnnkSopWRL2WPpdMSo4xa', "WRr5dfSm", "WRVcIdNcRf0", "fGpcVbbV", "WP18wCoQea", "t8o8f8kmEq", "mc9RWQRdNW", "peu5i8kU", "WR3cLfmCya", 'WOm7WOazhq', 'oqRcIcfH', 'i8o+W67cTHW', "oSkAWQFcMSkM", 'fCoRpYpcNa', "jSo+W6hdPa8", "ibmGnGq", "WQ4kb1ldUG", 'vq7dQWTu', "jSoOWRJcV8oI", "Dq94jSkt", "WOu/W5OQjW", "iCodf2nI", '4lAe4lst4lwKW7RGTkK', 'WPWYjHpdOq', "lrv04lEx4lET", 'rSoqz0ev', "W6e4uvyh", 'emkzxJm2', "WPqQW4WkrG", 'W47dGtWFWOW', "W44AWRLpDq", "W4/dH8oxW4hdGW", "W5NdHIaEW40", "W5ZcMCotWRjd", "W5LSW5hGT7pGTj0", "kYFcULBdIq", "zHVcNHWU", "cCo3uSkDW6e", "WOTVqq", "vW1AqmoY", "W7VcLKH8WOm", 'W6S8abldOa', "W5fzW5ZcPCo2", 'yHRdT8oODG', "W7GxWRVcGmoz", "lmo5WQVdQa", "gSkREYuY", "B1JcG8onda", "iSkWArCy", "WR3cHWOdzG", 'W7tcQSo/WRnO', "aIbFWRddKG", "WORcOCkHWPtcNG", "W6D4wLih", "W6SPaaZcTG", "q8oNgSoHkG", "k24am8k6", "W5ZdOmoeWOJcGa", "WP9tWQzjFW", "W4TSW5mQiq", "W6iJW5aSoq", "nb/cVrrt", "W5iSwt4Q", 'WPniW57dTvO', 'W5NcT3zlWQW', "WQJcNJ7cUH8", 'n8kuDdLX', "dmo0W7xcTG0", "xHrts8o9", "g8kAfYjEWPhcJIHIW43cVCku", "sLhcJ8ohcq", 'ctmwcsm', 'omoSWRhcVSoC', "W5T3WPCB", "xehcJCkwqq", "WOvBpJK4", "WPZcPeGFEG", "W4VcMSoMWRjp", "4lwH4lAdWP8Pna", 'CCkWtG', 'WRZcGtlcQr8', "FXFcIqzi", "WR4OaW", "WOvQeJu", "a8knEmk0W4e", "W4yJiI0J", "W7ebW60Vea", 'W71wWR00W7y', "W4VcL8oIWRPk", 'W67dQCocWQ7cVa', "WOZcHvJdTmo+", "WOHkW6ddTxe", 'imkuFsCO', "W7tdI8oGWPxcQa", "r8omaNqe", 'oCo+mmkCqq', 'W7HRv1ldSalcRCkIW4ldG8ovW7Hf', 'ECoWpSoefa', "d05rW5FcHa", 'W5ddRmkJtG', "lSkvWQNcNmo6", "W4O+W4y", "wahdLCo+", "jhJdR1tcMW", "aSolbH7cSW", "WOTXdCoIfG", 'WRNdG1v1W60', "W6TOW6ldTe0", 'wHtdLmo2Ca', "W7FcKfTTWOO", "kmkoBxu1", "W7pcU8oLWRv7", "mCkxWRZcLSk8", 'WPfOwCo/aG', "aCoal1LM", 'W6G5vL0n', "W4BcPCoiWQ7cOq", "WP5sW6LjDq", 'xqPWWOldLG', "rwyOgLa", 'W4pdHNmmW4G', "WOJcKCkBW5rG", 'WRTqfqur', "mSoRW7tcTGq", "w8o2W77cRmo7", "WQbpW6lcPK8", 'W7SgW7yRbq', "W6GxWQVcIW", 'WP/cMMfsWPDSg2FdPmk9d38', "tCo8dCkCCW", "WPddM8kfW5vG", "cmkOh8orCG", "bwCH", "4lwy4lsk4lwxW7BGTQS", "WOxdPhvfW48", "FrVcMbrV", 'WPfVva', "prqX", 'BSoogSkYxq', "d0P3", "wXjrwSo2", "W4jUW6NcHSkP", "BSkqBtaI", "iSkoy8kGW40", 'WQbxW67dP0G', "W7xcICo7W5FcUq", "tKz1W5hcHG", "CCk2x1pcGq", "f8o6oYRcKG", "W7ZcM1PR", "WP1lE8oDdW", "WQuQF1ddVa", 'jgtcUutdLq', "jMPTWQBcKa", '4lAV4lwTWOBGTAlGTzy', "aCk6va", "nmo3W7pdS0O", 'W5njWRmkW70', "kNRcTuhdHW", "rWpdMSoZoW", "yqaokmkw", "x1hcG8oneW", "WONcHCkaW5rG", 'pGSWmse', "WOCiWQrCCG", "o0GYz8ke", "4lwN4lwH4lET4lwg4ls3", "4lE64lwbWQdGTzxGT58", "WRDcpW", 'g1r3', "ubJdSSoFuq", 'WOJcLCk3WQ3cIa', "WPJcKmkrWObS", 'omoWl8kqrG', "WQ/cIcVcPbu", "W6lcHSoUW4JdSa", "o8ogaSkSqW", "md7dMa", "saFdRf0", "umo/iIldHG", "n8kiDda/", "WR7cNeSCFq", "u2y6gG", "pSomeSk7Aq", "gCk4CYud", 'iw3cO0y', "WQqBW7pdQrS", "W6ldMGGrDG", "vmoRhmoiEW", "g8kvWPNcSmkn", 'W5FcPMHjWRi', 'W4xcGZ8kW5u', "W6TvW7u4dq", "sColea", "WQ/cSLNdVSoZ", "WRJcJLTNWOK", "vSoZe8kAta", 'WPdcJmk0WQ7dLG', "WP8QCvtdPW", "W58KW6KMmW", "nmktns8K", "W6JcPCoQWOy", 'WOxdGt8kW4i', 'sH5Er8k9', "AmoAfCkfxG", "WPtdJtJcQqi", "chDJW6lcLG", "CCkqBtaI", "WPZcJxaqzq", "W67dTCkuWR7dSG", "WPzzW4lcSmkV", "a8ojnCkJsG", "ErvNF8kormoQaCoQWPO", 'WPmVjWFcGq', "kCoGWRhcVCo4", "b8obmZxcOG", "pqhcQtPW", "m8kKzCkqASkWW5yKWPlcKCkSWPG", "bCkKqSkuW6C", "W6W4WP84ma", 'fSosiWq5', "eSkYumkwW7q", "kSoXWRBcTCoI", "WRpcHmoUWOdcOa", "ESoNp8onkq", "CSk0uGNcGG", 'c8kOh8oEDW', "WRZcVGBdV8oR", "kJLyWRVdGG", "lmoSWRhcV8oJ", "W7RcSSoKWRK6", "uGtdT1fs", "C8kRwv/dNa", "zSo0m8oloW", "W4ddQmkHrIi", "WPpcL8kBW44", 'tCoqddzg', "xmo4o8oAia", "tmomW4FcR8oJ", "c8kusrC2", "mI5AxmoL", "jmoAespcIG", 'lr8DaZm', "DmokW5pcLmol", "WPruW4BdO1q", "rmomAuy9", "4lw/W5vfgge", "WQpdVxDbW4e", "WRizlJJcHq", "W5xdVCkL", "oNJcPHeL", "bCoJWO/cLCoF", "oCoMWRlcQSoL", "WOLpWPzCAG", "W603u0Ca", "tq5A", 'CCodW5ldRCoJ', "4ls14lwxWOxdR+c1UW", "W6ZdPmoFWQRcQa", "WPX0q8oOwG", "iSkvAJW/", "ESoxW5ldRCoS", 'W4XAW4RcPCk8', "cKj2WP4", "yw3cOCo7eW", "BSoWiSkooG", "WRtcGdRcRWK", "W5zXCfldVG", 'W7KfW7fQcG', "aLiqt8oJ", 'j0uwnSkx', "wSohuNSv", "k3hcV0JdNG", "tCoqaNzm", 'nYBcJbeh', "pa47kfK", 'xrZdTuad', "jgxcTq", "4lwk4lAea+c3Soc2Sa", "AColW5xdOSoT", "FSo9i8kakG", "eGSIkay", "W4CJW5SY", "WRe4abtcUG", "WOFdJ8kHWQJdIq", 'a19yW6RcHW', "WO3cGSo6WRhdMG", 'WOZcJmkBW6DF', "WPj9WPKdW7m", "W7WZueyf", "gmkQjYFcJW", "kmkdWRRcL8k7", "4lE64lwp4lsX4lwCta", "W63dPmocWR3dOq", "wCo8dCkj", "sCoos3yF", 'FNZcMSozcq', "W7T3WRqTW6a", 'WP4SWOKvqq', "e8oTdSk0xq", "W5jDW5FdV8kL", 'iNJcPaxdJG', 'tmoWW7hcNCoE', "WQainZxcTW", "hSoVAYhcKG", "bSorjv4N", "teBcGCogrW", 'W4JdPSo6WORcLG', "WP1sWQbsDa", "zSohr3nm", "mSkjodO/", 'W6CCWRlcMSkS', 'BCkcW4xcV8oQ', "WPXPWPKdW7m", "WOb3aI8P", "W6hdU8odW5ldQq", "xa17xSoq", "W4a+WPiXia", 'W6ZdSmoeWOpcGW', 'FCkNrN/cOq', "fCoIkJlcNa", "eIehiti", "tCkcvN8j", "rwy6deG", "zSonaN4b", "W5vOWPqmWQC", "W6qDzwSX", 'W55VWOusuq', "qb7dVfzd", "WQbdWR5o", "WQ40vKaq", "WOtcHSk5WQlcHW", "yum/jSkx", 'WO9fySo/pG', "CSowWPZcH8kT", "WROVabtcPq", "eWZcRdPK", "qmk2wmovW6y", 'WPRdHmkCW4K', "nmoVW6xcTGu", "ybpcGGKL", "WO9ZaN8Y", "mmktWQBcKSkG", "xq8Fr8oG", "W6tdR8o5W7RdRW", "W7dcSL5DWOu", 'ESodW5lcQmoO', "WP47o1VdUW", 'WOW/aqxcSG', "W6STablcPa", 'W6maW7JcN8kE', "WPhdHmkBW44L", "WQNcGmk8WOZcRW", "W7GaWQ3cJq", "nCkeFg5X", "W43dIJ8oW48", 'W7W1qLPh', "lmkxWRZcGCkX", 'lSo7WRZcU8o4', "W5nZW54wW7i", "WO1hWRLjCW", "WPuKd3ZdNW", "4BAP4BAjW7hHTlhHTzW", "imowbeXh", "iWiT", "W6pdKCogW73dNq", "oCoNdIZcSW", "WP1dWQHpEq", "kCkfWQ0", "WOOSfta3", "hEc0H+c3GUc1MEc3Na", 'DSomW5ldRCoN', "f+c2MEc2HUc3GUc3RG", "rqpdReDc", "j8oAj1rK", "smkBAvD4", "W5LuW4NcVSk0", 'qW7dQLbB', "C8kQqM/cTW", "B0eWjSkk", 'WOfNs2K7', "WOrPgbac", "lSoRlCkBsq", 'W4ZdKYChW44', "WPHSbsS", 'kMxdV0ldGW', "WRZcOaBdS8o6", "jMFcVLhdGW", "gCkAfInvWPZcQGT3W4pcRSkR", 'BCkNf1hcMG', "WO/cJSkYWQlcMG", 'WOLjWQzADG', 'xdJdJv9H', 'm8koFcX9', "WOHuWQzqvW", 'e8oziW', "W6FdHmoQ", 'W7ehW7W', "W5pdVCkHrJi", 'W6BdO8k3ysO', "xqqcwmo6", "4lws4lES4lAz4lEHrW", "vgSOdre", "CGpdQSoFta", "WOP1xSo8ga", 'W6WqW7y/dG', "WRGPWOydEq", "bSk+xCkqW64", 'WQhdQmosW6hcPG', "W6NdKCkWW4NdRa", "W50tW7SoiSoKWQiGWQz4duJdVG", "WOnMdW", 'Ewu2WQhdLq', "4Bwi4BwQDpcUSj/IGQRXJ4g5", "eCkfWR3cOSkJ", "W7OKvLy", "W5hdPCk+qZG", "pmk1W7NdTWi", 'bLnMW4dcNa', "W7OqW7yP", "kg3cK3xdJa", "A8kXuG", 'W4jPW5Lca3ueimkEw8oNW5ZdMG', "WRZcMxVcSqm", "W4JdOr4nW4C", 'lK0Y', 'a8kcESkTW48', 'dubtW7ZcNa', 'WQK3d0RdJW', "WPjkzCokaG", "mJFcKvC", "WPiYWQOiEG", "kmoWkmkq", 'b8ohiW', "WODqWO1Tva", "W47dNmoHW7ZdLG", "WPldS3rwW5q", "qez7W4dcHG", "WRnAW7pdOXS", "W7fBW7tcLmkF", "Ab47m1C", "WOVcVmkVWR7cRG", "uSoVaa", "W70DW6aVea", "iMPYWQZdIq", "4lwS4lsN4lEQW6Hn", 'gq3dKmkxuqzunaVcVHz4', "wmoqtxOC", "WRK+tYhcIq", "WQHxW67dTru", "W5pdUCk5wxS", "d05IW5NcJa", 'WP1WeW', "zEc2Soc1VqxGTAu", "yHFdLHXG", "wxeml10", "W603v1yo", 'AY3dIKjY', "WPPUwYOO", "WQvwW4ldONK", "l8oSiq", "W5FcMNbUWQa", 'EmopW4m', "WPHVqSoIoG", "C8kJufpcGa", "eqBdVavw", "W6OZufa", "WR5kWQXCAq", "oCoRWRddTCo5", "W6nwW4tcS8kQ", "mmk6F8oipa", "iIn1WQBdLW", 'WQhcPeOSCG', "W57dKCojWQtcOG", "WPlcUJtcQI8", 'WPO8W40Koa', "WOPSeIy", "jCkiDZTS", "WPO9BmogvW", "WR3cHWCqya", "4Bwqz8M8Y6Wj", "W68tWQZcJCkr", "WRK/dGpcTa", 'WPeVpIlcPW', "WPZdHmkaW48L", 'WR7cJcVcVau', "4lwe4lAR4lEP4lwB4lEk", "FL3cJLa3", "WO3cImk6", 'h8ornuvP', 'wmoVv8oj', "xmo6hmkBnG", "WQ/cNJ/cSIC", 'x08+leu', "vbldN8kLyq", 'AMNcUqRdHa', 'm8oZaW', "WRJcPqFcSW", "WRldTuT2W78", "m8kcWQdcKmkM", 'vG7dT0bf', "WQJdImoMW5tdTG", "q8ohwW"];
    _0x201d = function () {
      return _0xc7ca31;
    };
    return _0x201d();
  }
  _0x2e197e.on = "body";
  cmd(_0x2e197e, async (_0x141143, _0x1a0694, _0x50c464, {
    from: _0x44d057,
    l: _0x490d7d,
    prefix: _0x29e3ea,
    quoted: _0x3cb559,
    body: _0x63dcd8,
    isCmd: _0x31d5cb,
    command: _0x593000,
    args: _0x2ee503,
    q: _0x3292b5,
    isGroup: _0x5a233f,
    sender: _0x2c3e7b,
    senderNumber: _0x2edb0e,
    botNumber2: _0x30d932,
    botNumber: _0x571b39,
    pushname: _0x99b543,
    isMe: _0x24507c,
    isOwner: _0x3f2ec2,
    groupMetadata: _0x2784cb,
    groupName: _0x1d9b15,
    participants: _0x82ecf3,
    groupAdmins: _0x415e68,
    isBotAdmins: _0xf6e2b8,
    isAdmins: _0x3bb465,
    reply: _0x2847f2
  }) => {
    if (config.AI_IMAGE === "true") {
      if (_0x1a0694.key.fromMe) {
        return;
      }
      let _0x21898f = await fetchJson("https://api.maher-zubair.tech/ai/photoleap?q=" + _0x3292b5);
      const _0x5c3fcd = {
        'url': await _0x21898f.result
      };
      const _0x3572d7 = {
        'image': _0x5c3fcd,
        'caption': "*_ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ᴇᴠɪʟ_*"
      };
      const _0x37b7fc = {
        'quoted': _0x1a0694
      };
      await _0x141143.sendMessage(_0x44d057, _0x3572d7, _0x37b7fc);
    }
  });
  const _0x3c6995 = {
    'on': "body"
  };
  cmd(_0x3c6995, async (_0x2715e7, _0x3fcadb, _0x16efcc, {
    from: _0x2c3521,
    l: _0xb436a5,
    prefix: _0x5dd17d,
    quoted: _0x4c587c,
    body: _0x1e5ea9,
    isCmd: _0x37f412,
    command: _0x1df534,
    args: _0x42154d,
    q: _0x1fca87,
    isGroup: _0x1e1c52,
    sender: _0x2d83d4,
    senderNumber: _0x2ef159,
    botNumber2: _0x337179,
    botNumber: _0x24cbc2,
    pushname: _0x589200,
    isMe: _0x5f0063,
    isOwner: _0xc3914,
    groupMetadata: _0xafaf05,
    groupName: _0x36b5f1,
    participants: _0x37b2d6,
    groupAdmins: _0x5b5863,
    isBotAdmins: _0x5c779e,
    isAdmins: _0x1eccd7,
    reply: _0x2dc66e
  }) => {
    if (config.MATHS_AI === "true") {
      if (_0x3fcadb.key.fromMe) {
        return;
      }
      var _0x5e0265 = (await fetchJson("https://api.maher-zubair.tech/ai/mathssolve?q=" + _0x1fca87)).data;
      return await _0x2dc66e(_0x5e0265);
    }
  });
  const _0x2cd47c = {
    'pattern': "blackbox",
    'alias': ['bb'],
    'react': '👾',
    'desc': "Blackbox ai chat",
    'category': "other",
    'use': ".blackbox hi",
    'filename': __filename
  };
  cmd(_0x2cd47c, async (_0x1f2879, _0x2899cd, _0x428886, {
    from: _0x3742a2,
    l: _0xc325e2,
    prefix: _0xbcf4e2,
    quoted: _0x1a95ae,
    body: _0x11a95a,
    isCmd: _0x2822ba,
    command: _0xd0cee9,
    args: _0x1c537a,
    q: _0xf47537,
    isGroup: _0x4dc0ff,
    sender: _0x566b97,
    senderNumber: _0x1c9d8b,
    botNumber2: _0x114819,
    botNumber: _0x5cac29,
    pushname: _0x57d878,
    isMe: _0x447325,
    isOwner: _0x3acd6d,
    groupMetadata: _0x43b0bb,
    groupName: _0x30c401,
    participants: _0x3a320f,
    groupAdmins: _0x2ba958,
    isBotAdmins: _0x504e59,
    isAdmins: _0x4953f8,
    reply: _0x58586a
  }) => {
    try {
      if (!_0xf47537) {
        return _0x58586a("Need a keyword");
      }
      var _0x58bc6c = (await fetchJson('https://api.yanzbotz.my.id/api/ai/blackbox?query=' + _0xf47537)).result;
      return await _0x58586a(_0x58bc6c);
    } catch (_0x3f3c4b) {
      _0x58586a("Unable to generate");
      _0xc325e2(_0x3f3c4b);
    }
  });
  const _0x14e10a = {
    'pattern': "bingimgai",
    'alias': ['midj'],
    'react': '📷',
    'desc': "Generate Images using Bing AI",
    'category': "other",
    'use': ".bingimgai <prompt>",
    'filename': __filename
  };
  function _0x19547a(_0x14b954, _0x9c74fe, _0x23636a, _0x4b7480, _0xfa6784) {
    return _0x391d(_0xfa6784 + 0x16a, _0x4b7480);
  }
  cmd(_0x14e10a, async (_0x4a25d6, _0x10b637, _0x3225df, {
    from: _0x1edca2,
    l: _0x1db4ec,
    quoted: _0x1e40c1,
    body: _0x1c492b,
    isCmd: _0x55a3de,
    command: _0x2e2096,
    args: _0x2ae3bf,
    q: _0x2d4a80,
    isGroup: _0x3215c8,
    sender: _0x5d4fa2,
    senderNumber: _0x3e786e,
    botNumber2: _0x3e3a58,
    botNumber: _0x36a137,
    pushname: _0x3aca0e,
    isMe: _0x1a3321,
    isOwner: _0x547a6a,
    groupMetadata: _0x2c0b4e,
    groupName: _0x36558c,
    participants: _0x186f22,
    groupAdmins: _0x49cd5d,
    isBotAdmins: _0x5adad2,
    isAdmins: _0x5a8c26,
    reply: _0x2430ee
  }) => {
    try {
      if (!_0x2d4a80) {
        return await _0x2430ee("*Give me a prompt to generate images*");
      }
      let _0x4b95ab = await fetchJson("https://api.yanzbotz.my.id/api/text2img/bing-image?prompt=" + _0x2d4a80 + "&apiKey=vihangayt0");
      if (_0x4b95ab && _0x4b95ab.result && Array.isArray(_0x4b95ab.result) && _0x4b95ab.result.length > 0x0) {
        for (let _0x54c55b = 0x0; _0x54c55b < _0x4b95ab.result.length; _0x54c55b++) {
          const _0x8c35ce = {
            'url': _0x4b95ab.result[_0x54c55b]
          };
          const _0x17d3c1 = {
            'image': _0x8c35ce,
            'caption': config.FOOTER
          };
          const _0x45bb23 = {
            'quoted': _0x10b637
          };
          await _0x4a25d6.sendMessage(_0x1edca2, _0x17d3c1, _0x45bb23);
        }
      } else {
        _0x2430ee("No images found for the given prompt");
      }
    } catch (_0x466a49) {
      _0x2430ee("Unable to generate images to the given prompt");
      _0x1db4ec(_0x466a49);
    }
  });