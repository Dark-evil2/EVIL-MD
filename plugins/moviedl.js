(function (_0x52a816, _0xb89817) {
    const _0x2e2a16 = _0x52a816();
    while (true) {
      try {
        const _0x1112a3 = -parseInt(_0x4a60(0x30f, '%jq0')) / 0x1 + parseInt(_0x4a60(0x1d9, 'UrmB')) / 0x2 * (-parseInt(_0x4a60(0x1db, "[w]D")) / 0x3) + -parseInt(_0x4a60(0x3ac, "E$JX")) / 0x4 * (-parseInt(_0x4a60(0x35c, "UrmB")) / 0x5) + parseInt(_0x4a60(0x1c2, "oFkc")) / 0x6 * (-parseInt(_0x4a60(0x156, 'eEnU')) / 0x7) + parseInt(_0x4a60(0x2f1, "DJ$i")) / 0x8 + parseInt(_0x4a60(0x4c9, "3EDn")) / 0x9 * (-parseInt(_0x4a60(0x3b6, "%jq0")) / 0xa) + parseInt(_0x4a60(0x420, 'VKZ%')) / 0xb * (parseInt(_0x4a60(0x259, "3EDn")) / 0xc);
        if (_0x1112a3 === _0xb89817) {
          break;
        } else {
          _0x2e2a16.push(_0x2e2a16.shift());
        }
      } catch (_0x5154e0) {
        _0x2e2a16.push(_0x2e2a16.shift());
      }
    }
  })(_0x5d6a, 0x9c435);
  const config = require('../settings');
  const {
    cmd,
    commands
  } = require("../lib/command");
  const {
    sinhalaSub
  } = require("mrnima-moviedl");
  function _0xbc775(_0x2bf2b1, _0x571b36, _0x249f7e, _0x24a971, _0x4fb16c) {
    return _0x4a60(_0x249f7e + 0x1f1, _0x2bf2b1);
  }
  var {
    subsearch,
    subdl
  } = require("@sl-code-lords/si-subdl");
  const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
    jsonformat
  } = require("../lib/functions");
  const _0x244fcd = {
    'pattern': 'movie',
    'alias': ["sinhalasub"],
    'use': ".sinhalasub <query>",
    'react': '🍟',
    'desc': "Search and DOWNLOAD movies.",
    'category': "movie",
    'filename': __filename
  };
  cmd(_0x244fcd, async (_0x2f5434, _0x2d68ae, _0x372b3f, {
    from: _0x3219e8,
    l: _0x4eea9e,
    quoted: _0x193390,
    prefix: _0x14bf5a,
    body: _0x2dbc6c,
    isCmd: _0x3e4c1d,
    command: _0x1be1fe,
    args: _0x2a2938,
    q: _0x3539a9,
    isGroup: _0x12346c,
    sender: _0x14cd04,
    senderNumber: _0x1e239d,
    botNumber2: _0xc9ab9f,
    botNumber: _0x1f5297,
    pushname: _0x524bdf,
    isMe: _0x25cb22,
    isOwner: _0x5742e4,
    groupMetadata: _0x49fa37,
    groupName: _0xef7742,
    participants: _0x28a769,
    groupAdmins: _0x5945cd,
    isBotAdmins: _0x4a9bcd,
    isAdmins: _0x5c9dae,
    reply: _0x5afa1d
  }) => {
    try {
      const _0x205501 = await sinhalaSub();
      if (!_0x3539a9) {
        return _0x5afa1d("🚩 *Please give me words to search*");
      }
      var _0x242ad8 = await _0x205501.search(_0x3539a9);
      const _0x1f0bd1 = _0x242ad8.result;
      const _0x13cb8e = {
        'quoted': _0x2d68ae
      };
      if (_0x1f0bd1.length < 0x1) {
        return await _0x2f5434.sendMessage(_0x3219e8, {
          'text': "🚩 *I couldn't find anything :(*"
        }, _0x13cb8e);
      }
      var _0x79c65b = [];
      _0x242ad8.result.map(_0x5f0c4b => {
        const _0x138218 = {
          'title': '' + _0x5f0c4b.title,
          'description': "Type : " + _0x5f0c4b.type,
          'id': _0x14bf5a + "dlss " + _0x5f0c4b.link
        };
        const _0x26aae8 = {
          'rows': [_0x138218]
        };
        _0x79c65b.push(_0x26aae8);
      });
      const _0x53e791 = [{
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Tap Here!",
          'sections': _0x79c65b
        })
      }];
      const _0x36f40c = {
        'image': "https://sinhalasub.lk/wp-content/uploads/2023/08/icon.png",
        'header': '',
        'footer': "ᴅᴀʀᴋ-ᴇᴠɪʟ \nʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ",
        'body': "乂 SINHALASUB.LK - D O W N L O A D E R "
      };
      return _0x2f5434.sendButtonMessage(_0x3219e8, _0x53e791, _0x372b3f, _0x36f40c);
    } catch (_0x3b3960) {
      console.log(_0x3b3960);
      const _0x257085 = {
        'text': "🚩 *Error !!*"
      };
      const _0x4b1249 = {
        'quoted': _0x2d68ae
      };
      await _0x2f5434.sendMessage(_0x3219e8, _0x257085, _0x4b1249);
    }
  });
  const _0x3054c2 = {
    'pattern': "ssdl",
    'alias': ["dlss", "sindubdl"],
    'react': '🍟',
    'dontAddCommandList': true,
    'filename': __filename
  };
  function _0xb08c6a(_0x514029, _0x46cd00, _0x4f4b2c, _0x41aca1, _0x2ab21b) {
    return _0x4a60(_0x514029 - 0x42, _0x41aca1);
  }
  cmd(_0x3054c2, async (_0x1688b0, _0x17e8fc, _0x22e910, {
    from: _0x4ea078,
    q: _0x5eb000,
    reply: _0x9d9e7b
  }) => {
    try {
      const _0x4d69ba = await sinhalaSub();
      if (!_0x5eb000) {
        return await _0x9d9e7b("*Please enter a query or a url!*");
      }
      var _0x4bf2cc = await _0x4d69ba.download(_0x5eb000);
      const _0x35c9ba = "乂 SINHALASUB.LK ＤＯＷＮＬＯＡＤＥR\n\n\n 🔖 TITLE :* " + _0x4bf2cc.result.title + "\n \n 📅 DATE :* " + _0x4bf2cc.result.date + "\n \n 🌍 COUNTRY :* " + _0x4bf2cc.result.country + "\n \n ⏳ DURATION :* " + _0x4bf2cc.result.duration + "\n \n 🛑 IMDB RATING :* " + _0x4bf2cc.result.IMDB + "\n \n ✨ GENRES :* " + _0x4bf2cc.result.genres + "\n \n    ";
      const _0x3e0b83 = {
        'url': _0x4bf2cc.result.image
      };
      const _0x162878 = {
        'image': _0x3e0b83,
        'caption': _0x35c9ba
      };
      const _0x13bc50 = {
        'quoted': _0x22e910
      };
      return await _0x1688b0.sendMessage(_0x4ea078, _0x162878, _0x13bc50);
      const _0x48a0c8 = {
        'text': '✅',
        'key': _0x22e910.key
      };
      const _0x3917da = {
        'react': _0x48a0c8
      };
      await _0x1688b0.sendMessage(_0x4ea078, _0x3917da);
    } catch (_0x6b4b9f) {
      l(_0x6b4b9f);
    }
  });
  const _0x2cc321 = {};
  function _0x4a60(_0x3c7231, _0x531d9a) {
    const _0x1fd295 = _0x5d6a();
    _0x4a60 = function (_0x16f933, _0x2dc5c2) {
      _0x16f933 = _0x16f933 - 0xf4;
      let _0x20633d = _0x1fd295[_0x16f933];
      if (_0x4a60.TknHFJ === undefined) {
        var _0x47cdc2 = function (_0x46049a) {
          let _0x13a5bf = '';
          let _0x1044e3 = '';
          let _0x4efb73 = 0x0;
          let _0x1beeeb;
          let _0x46b087;
          for (let _0x5505a0 = 0x0; _0x46b087 = _0x46049a.charAt(_0x5505a0++); ~_0x46b087 && (_0x1beeeb = _0x4efb73 % 0x4 ? _0x1beeeb * 0x40 + _0x46b087 : _0x46b087, _0x4efb73++ % 0x4) ? _0x13a5bf += String.fromCharCode(0xff & _0x1beeeb >> (-0x2 * _0x4efb73 & 0x6)) : 0x0) {
            _0x46b087 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x46b087);
          }
          let _0x254641 = 0x0;
          for (let _0xa96099 = _0x13a5bf.length; _0x254641 < _0xa96099; _0x254641++) {
            _0x1044e3 += '%' + ('00' + _0x13a5bf.charCodeAt(_0x254641).toString(0x10)).slice(-0x2);
          }
          return decodeURIComponent(_0x1044e3);
        };
        const _0x262041 = function (_0x3bfb90, _0x5e7e76) {
          let _0x12fe7e = [];
          let _0x45ff9e = 0x0;
          let _0x1caf00;
          let _0x97347d = '';
          _0x3bfb90 = _0x47cdc2(_0x3bfb90);
          let _0x3f75e5;
          for (_0x3f75e5 = 0x0; _0x3f75e5 < 0x100; _0x3f75e5++) {
            _0x12fe7e[_0x3f75e5] = _0x3f75e5;
          }
          for (_0x3f75e5 = 0x0; _0x3f75e5 < 0x100; _0x3f75e5++) {
            _0x45ff9e = (_0x45ff9e + _0x12fe7e[_0x3f75e5] + _0x5e7e76.charCodeAt(_0x3f75e5 % _0x5e7e76.length)) % 0x100;
            _0x1caf00 = _0x12fe7e[_0x3f75e5];
            _0x12fe7e[_0x3f75e5] = _0x12fe7e[_0x45ff9e];
            _0x12fe7e[_0x45ff9e] = _0x1caf00;
          }
          _0x3f75e5 = 0x0;
          _0x45ff9e = 0x0;
          for (let _0x497ac4 = 0x0; _0x497ac4 < _0x3bfb90.length; _0x497ac4++) {
            _0x3f75e5 = (_0x3f75e5 + 0x1) % 0x100;
            _0x45ff9e = (_0x45ff9e + _0x12fe7e[_0x3f75e5]) % 0x100;
            _0x1caf00 = _0x12fe7e[_0x3f75e5];
            _0x12fe7e[_0x3f75e5] = _0x12fe7e[_0x45ff9e];
            _0x12fe7e[_0x45ff9e] = _0x1caf00;
            _0x97347d += String.fromCharCode(_0x3bfb90.charCodeAt(_0x497ac4) ^ _0x12fe7e[(_0x12fe7e[_0x3f75e5] + _0x12fe7e[_0x45ff9e]) % 0x100]);
          }
          return _0x97347d;
        };
        _0x4a60.Jqjesu = _0x262041;
        _0x3c7231 = arguments;
        _0x4a60.TknHFJ = true;
      }
      const _0x198ff0 = _0x1fd295[0x0];
      const _0x11f5fd = _0x16f933 + _0x198ff0;
      const _0x3be931 = _0x3c7231[_0x11f5fd];
      if (!_0x3be931) {
        if (_0x4a60.IePYZv === undefined) {
          _0x4a60.IePYZv = true;
        }
        _0x20633d = _0x4a60.Jqjesu(_0x20633d, _0x2dc5c2);
        _0x3c7231[_0x11f5fd] = _0x20633d;
      } else {
        _0x20633d = _0x3be931;
      }
      return _0x20633d;
    };
    return _0x4a60(_0x3c7231, _0x531d9a);
  }
  _0x2cc321.pattern = "uploadme";
  _0x2cc321.react = '✔️';
  _0x2cc321.alias = ['upme'];
  _0x2cc321.desc = "Movie Searcher";
  _0x2cc321.category = "movie";
  _0x2cc321.use = ".IDK";
  _0x2cc321.filename = __filename;
  cmd(_0x2cc321, async (_0x1940cd, _0x51c762, _0x3ebc45, {
    from: _0x31eac2,
    l: _0x4980bc,
    quoted: _0x7b2686,
    body: _0x4bc7ab,
    isCmd: _0x52221a,
    command: _0x3a3b95,
    mentionByTag: _0x348c0e,
    db_pool: _0x1c8f61,
    args: _0x43c613,
    q: _0x18078b,
    isGroup: _0x254636,
    sender: _0x437543,
    senderNumber: _0x4ba228,
    botNumber2: _0x555235,
    botNumber: _0xa186f4,
    pushname: _0x40a87e,
    isMe: _0x3955f0,
    isOwner: _0x93b71e,
    groupMetadata: _0x7c468e,
    groupName: _0x37fb28,
    participants: _0x55f638,
    groupAdmins: _0x29ef09,
    isBotAdmins: _0x3dc0bc,
    isCreator: _0x5d2ce4,
    isDev: _0x3d1e70,
    isAdmins: _0x302885,
    reply: _0xfd2708
  }) => {
    try {
      if (!_0x3ebc45.quoted) {
        return _0xfd2708("*.upmv spider man*");
      }
      const _0x126b9b = _0x18078b.split(" | ")[0x0];
      const _0xbe6bd4 = _0x18078b.split(" | ")[0x1];
      const _0x301ca5 = _0x18078b.split(" ¥ ")[0x1];
      const _0x1e386c = {
        'url': _0x126b9b
      };
      const _0x424067 = {
        'document': _0x1e386c,
        'caption': _0x126b9b,
        'mimetype': _0xbe6bd4,
        'fileName': "DOWNLOADED." + _0x301ca5
      };
      await _0x1940cd.sendMessage(_0x31eac2, _0x424067);
    } catch (_0x1ca87a) {
      _0xfd2708("❗ Error" + _0x1ca87a);
      _0x4980bc(_0x1ca87a);
    }
  });
  const _0x26251f = {};
  function _0x5d6a() {
    const _0x26d286 = ['q1DOWOK', 'cNFdKCkEWRi', "W65gFCk/qa", "ubzeW7PL", 'gYtdJmkAWQi', "estdGc7cTq", "nvLhWO8T", "WOdcG2RcN8kB", "WQqnW6pdLW", "W7LlWO9RWQy", "fSkcWRPlpq", 'W6FdL8kQW5qe', 'WQNdVMRcPCke', "vCkdW7TqtG", "C8o2WQ/dQSkO", "4P2pWQpdHCo4WOq", "WRNdICk1WPOg", "WQ0jW7hcRfK", "yCo1W4/dJSoe", "WP8KW6XgWPW", "WOhcQSkY", "DCoWW6C", "kSkvnmo4W4W", "WRzhWQddLSoH", "W7fPW5xdRs0", "W7ZcMSoyW4CV", 'eSk/W5NcN8kr', 'W70nWOe5', "c8owW6y8W5O", "WQunW6ddMCkj", "lCobWQxdQ0O", 'WO02W57cNooaVG', "W4hcOCoTWOyh", "AKzTWPCa", "W5mLWQbfWPG", 'mSk5pq', 'W6BdK8oIW6LD', 'tbldMvDj', "DSoPW7ddOSoN", "lSk7WPPfdG", "dCkpW5FcP8k8", '8yMLK++6Qa', "W6tcTe8jW7u", 'WRJdJWTSWPy', "cWzrWQ1z", "Fmo3W7y", 'WQ/cVMS4wa', 'W5fZmCoShG', "ibNdHSowiq", 'jSkWWPxdR0xdVSozWRG', "WRxdPqLuWRm", "h8oWWRFdII8", "WO7dL2HfWPS", "omohW4hdNSkZ", "W7xdVComW6K", "WR/dUmowW6rb", '8jQaG0ddJSowyW', 'WPj2ESo/WPS', "W4FcPY4", "BmoMW7JdVG", "bZ/cISoSma", "WRxdMwPjWQe", "WP7dVeJcUSkP", 'bSooWPW', 'nLFdOeS+', 'nmoxqItdKa', 'ASoZW6NdV8oN', "xmk8W6/cJMm", "WQVdUx7cNCkk", "WOtdV8o4W5nG", "utG+mWC", "C8oHE8kDdq", "WR3dUColW7RcSa", "BGldM2L7", "n8kNWO7cOSkz", "oSkKq8o1WQm", "lmoRW7OVW54", "W6qZWPVcTKy", "xt/dHSoVWRveWOmVWOy/p8kntq", "jCk7WQu", 'WOBcMfPJWQK', "WRVdL8oVW7L5", 'lsNcG8oIpq', 'mmo/W64gW5O', "scmAnrW", 'xthdSW', "DCoHWQBcSCkQ", "4PYhW5CHDSoQ", "WR/cImoSW4zA", "aLvi", 'mCkzefVdRq', "wdhdO0Hw", "WQNcU2u", "WP5+WOxdImod", 'sKjWWOa', 'eIz/WP5e', 'mavLWPzz', "WQ0xW77dNCkA", "WO/cOmkNWR3cUG", "F8odWQW8lG", "W6v6W5tdVW0", "EmomDCkRdW", "W7euW63dSq", "WRRdL8oGW75a", "W5bSl8kLsW", "WQVdMSoKW68", "mSo5WQi", "CteobJC", "xKKEW7n+", 'WROuW7lcS0q', "maRcTmkL8k6pKq", "WQlcO04vtW", "CmkZe8o7W7q", "dSk1FmoxWQW", "r8klW7a", "WQfQWOVdNCoJ", "W4RdMNJcHhC", "W5RcR8o4WPWn", 'dMpcMW', 'WOafW6hdK8oD', "FSoQW6ZdR8ky", 'dIpcK8k5W7m', 'pCoOWRpdILa', "WRSbW6pdMmkW", "bclcKmkLlG", "s8kAasldOq", "W7qBWPu", "WR7dK8o1W7HR", "WQFdQtdcSSkK", "WPlcR2S4gq", "tvT7WQ4i", "FmozWRm4jW", "pef/WQ9Q", 'mmoAW7VcISkB', 't8klW7rtzG', "gmkaW5hcO8k3", "lSowWRtdIMm", "WPldOKPGWR0", "WQZdK8o1W7G", "r8oMWRxdPSkb", "WQTPWRNcNmoi", 'tmkwgYRdIq', 'srOyWPZdVa', "g3qLW5fd", "BZddRgDV", 'fq3dQYdcJa', "zSo0WQVdLuG", "dmoBWP8YrG", 'oCo7WQ3dKq', "o3hdG8kUWPK", "pCk2jW", "ACoNW4lcPmkD", "deDBWP5h", 'W4/dK2lcHG', "c0So", "WRiWW5dcLuq", "WQZdLSocW7jz", "t8ksatRdOq", "bSkvW6bwiW", "W4tIHPuWW5JcNG", 'CgqxWPJcRa', "m8kKamoSW7y", "W6NIHOe+aSkl", "ecRcLCoM", 'W6PImCoQsG', "aUkfUSk/umoq", "W6v2W5tdSYe", "xZuZ", "W5hdTCktWQaR", "E8oCWRy8oG", "W5bMpmoMhG", 'WOpdN8ouW5pcVq', "W6/dUNVcP0S", "WQddVGPKWRO", "Emo6W5KrW70", "BbldMNLt", 'dmo6W5SBWP8', 'BXBdGgL7', "q8kRW6pcHCkK", "t8kwW6fDBa", "xmksasVdOW", "y3ecWRpcVa", "vmoyWOBdPh8", "lmkWWQi", 'fYFdNIS', "sCkAW4u", "AGFdMhj/", "mCoCW7O", 'W5pcQSoOWQug', "4PYjvNxcJxi", "yCkPfmo2W7y", 'dCkdW4VcUSkR', "hwVcJCkJW6K", 'WOVcRmk5WQRcMa', "tmk6W6ZcJgO", 'c2VcJCk1W7C', "FrJdKgq", 'W5HFW7xdLIG', "WQNcVMS+tq", 'wCkqW7BcJuC', "jSk8WR14bG", "omoqW6xdQ8ke", "W4b7WOLNWRa", 'WRJdSfjiWQW', "8yI7Kmk9W69KnW", "W7amW5j8W7y", "ahhcR0ZcKq", "caFdKcNdQW", "cmkhW7zaAG", 'BSoPW5xcTmkx', 'awX8', "FaxdKxXQ", 'BSoNW5tcVCku', "omk5WQRcQG", "W7j/W4NdPeW", "zCo6WRldJs8", "fSo0WRrVWPu", "oGVcISoinq", "xrRdOItcVr/cLa", 'WOtcTSkH', 'x8oaW5BcMmkZ', "cgrVy0fnWQtdSdddN8oZ", 'nCoRW7BcVW', "4PYRW5RdVCkHWQS", "WRHYW5NdOWu", "smoSW4xdMSk7", "BmoKW4JcSmkd", "FmoPyCkt", "W4hdImkqWOup", 'wYlcJCoZ', 'W7dcMSokW4RJGQe', "hvKFW7nR", "lmk7qCk0WRi", "f1mkW5HN", 'mmotASkzga', "yq8yWPldUG", "vSktW6zC", '4P6jwCoyWRDF', 'W51VWQ1nWOe', "vCksW6DDBq", 'oSkNsG', "BSozWQSXla", 'uLfY', "b8ogWOBdQY8", "Dmo4W4q", "lqfjWRbp", "lHTgW59Q", "oSozWPCAqq", '5lQzjmkCW7xdRa', "vpcrKRhcTLHQ", "imocW5uIW7y", "WRhdNw1zWPi", "WR7dVSot", "WRddIhjfWOO", "pCoDW6a", 'WRddNxbiWRm', 'W6vJW5BdVHG', "uLDQWOSp", "BIVdHHRdGW", "mIBcOCoSjG", "hwhdKCkkWRK", "y8o0FCkrba", 'qLbTWOug', 'W4tdQwlcHmke', "CSoOWPe/ea", "nmkSWQf4", "W6WyWP41WRC", "4PY4lSk7WQtdTW", "FCoVW6RdRSoS", "DSoAWRldS+kmQG", "Bmk/WQZdVCog", "WOHxWQtdRCok", "WRrmWRRdMCoa", "bmkPWPdcJ0e", "nCkef2xdVW", 'WPniW7H68yQ6Rq', "yuThWOah", "vGPBWQq4", "FSk8mSocW4G", "vuDTW4qv", "urldShTY", "E8oDWRO", "WO/cPcL4WP8", "umonW4NdICk3", "WRnHWQ7dMmoh", 'xSkFhc/dTW', 'mb7dIbFcNW', 'WPnNFmkWWPq', "BmoQW7tdPSkt", "dCotWOygsq", "lWnFWOTL", "seD7W4Kn", 'WQldLxS', "776o77YS7728776H772p", "FCoWW7pdQ8kr", 'trGpWPldVa', "W4f/WRbc", "CmkxW7BcGfW", "uSopWQxdNSkb", "WRFcQYCGvG", "BmkqWRu0lq", "wSoUWRldIeG", "FCkqnSoCW6i", "WQNcKSo0W69y", "A8oQW67dRCkA", 'W7tcR2qJua', "cSouWOab", "eJ3dNIlcQG", "WPtdPhxcUmkg", "WQ0fW77dMCoD", "CmkEhSoJW68", "AmoIzmkrgW", 'c8kDWQTuoq', "rejUWPai", "BSouW4ZdQCom", "WRNdTGq", "W6tcPI7dLSob", "p8k+WPxdPmocW59qW7pdRWvWWPFcT8k8", "iSoTW6FcIs8", "rqqkWPRdVG", "gwFcMSkZW6O", "W5FcGCoxWOWm", "WRL+W4RcOW", "lItdR8k7W7u", "A8o8WQGEbW", "icnd", "DSoPy8kDba", "WRRdLwdcK8ol", "W6GrWOeZWQq", "C8oUWQFdLea", 'gNFdHW', "WR7dJ8ouW7RcKG", "WRuibmkAW5u", "cmofWROhqq", "gmkXsmowWRi", "rCk6W63cI2m", "t0RcQ8keW4q", 'AmovWR4+pq', 'yI0HoXm', 'cmk6nSoWW5K', 'xmoDWO/dHCk1', "cmkgW77cG3q", "ACo1WOvlsa", "sJqkWR/dNG", "AJWYjs4", "WOPTEmo5WPa", "wCk/WOddLSkK", "WRrNB8oIWPy", 'rH4vWP7dLW', 'i8k9WRrV', "gCkwiL7dRq", 'W41Xja', "W7ldImkLW4O", 'W7tcQNqIwW', "v8ogwmkTiG", "sSonWONdPmoPDCo6WROSt8kPkCo3", "W5JcUSo3WOmp", 'xSkdbsldRq', "pmojW70L", "wZpdSXFdKq", 'WQRdPCoiW6VcMW', 'WO9nWPVdTCoU', "zCoKWQxdGLK", "A8oZW6ZdO8kc", "WOiKWPVdUCoH", "ESkYnLBdLW", 'WO7dIXT1WPi', "8ksJTmoEWOldGde", 'eshcKG', "at3cIG", 'WQ7dM8oTW7HA', 'FmozWRm4bW', "xaCAgIa", 'W4JdNNtcLW', "EmoWWRxdPSkd", "lr9EWPHS", "F8oHW4tcOSoq", 'WOe2W4ZcKCkW', "rrKn", "qrOC", "a09bWPW", "mSk+W5tcNSkO", "tK56WPCQ", "WRjGW6/cMSkc", 'zmolWOJdIge', "AGxdMa", "lSojW6mmW5K", 'WPWBW6/cKKm', "lCo5WRDt8jApKG", "oWTb", "W4nAW4NdNcK", "h2xdLSklWRa", 'WR7dN8oJW5rZ', "bmo18yUESui", 'BfyUWQtcNq', "WRddRrfyWPi", "W6r2W4NdOGa", 'WRVdRJ7cUSkG', 'WOxdIwK', "DgaBWPG", 'iSksbxddVq', "8jEBNLNdKCoCnq", "4P+IW6JdNmkyea", "kLZcRCo28l6FNG", "vsy+nWC", "WO3dG37cGSko", "B8khW5nUDG", "lbBcGCorda", "p0GeW5H9", "nmktoSo4W7G", "pmkXqCo+WO8", "W5VdL2xcKwe", "tbixWPZdRq", "W5bNWQy", "rSkLdCoqW4q", "gmkvW5BcP8ky", 'c8ozWPCbAa', "W4JdGNJcIMO", "wSkWW6JcL2O", 'WPZdIxhcLCkF', 'ggzNyea', "cvCTWQ3cUq", "W6ldSZhcOuS", 'y8oKWRZdLq', "k8k4xmoPW6i", "8jMMKmkMW5/dI8kW", "4P65WOXvWOtcMq", "WQVdVJdXGQ2o", 'aM3dJ8kAWQe', "cgVcKmkKW6a", "WR3cOxuU", 'W7RcNwi2sW', "cSoGW6WHW7S", "W7D+W58", "W7Pmo8onja", "rZBcKSonW6e", "WQFdGrbsWP0", "FSovWQW+", 'dCojWPCsua', 't8k8W73cMW', "dtNdMYdcOa", "WPVdO0Ot", "d8ovWOKwAG", "twOvWOxcRa", 'WRZcP2SYvW', "lqzCWPz0", "hhtdJSkwWQe", 'aMhcImk/W6a', "WQldOmoc", "h1z0W59f", "fJH5WRXb", "m8kWWR95jq", "fCkEWPJdTCo5", "m8k8iCocW4G", "h8oDWPewEW", 'kSoKWQi', "W4xcQCoTWP4h", "befJWOrP", "oWvdWP5N", 'ySo+W4tcOSk+', "W7ldQSk7WRm8", "qCk4W7W", "W4FcRCo4WOKw", 'WQ8cWPmyWRWWFa', "kHniWOS", 'WRBdUCokW7RcIG', "lSkUW57cOSki", 'BSo1W6m', "FmoSW6pdV8kB", "WRJdRvRcV8k5", "4PYyW7rQW6JcSa", "CaxdJq", 'W6BdK2lcLMu', "kr3dLv90g1e", "vCohW4FcMCk+", "tmoiW4RdHmod", 'W5maWOiZWQm', "B8kLW5r4iW", "WOxdUSkTW4nc", "W4FcGmkNWR3cMq", "rSo6WRhdPSkd", "rIawbG0", "zSo6W6pdQSki", "W49QmmoGhG", "xmksbtRdRq", "8kAsRSkAe8kaoa", "odDxW5xdUCkpWOFdNIhdK8ofWOS", '8jwnUCk7WRzdWPO', "y8kjpmoIW4qZia", "WROCW67cPG", 'FdCBjr8', "y2qxWONcRG", 'WQKiW6lcNmov', '8jQ8RCoKW7DSW74', "WOZcQmkW", "yCoOWQddHei", "ACoJW6FdQmo2", 'fMpWUl+sWOxdQq', 'z8oGWRddLuG', "dbJdGbtcOa", "W4pdR3/cV2a", "WPzRWRNdLCoh", 'mCkBdwxdQW', 'WPTnbCoMeHRcOa', 'WQWCW67cSee', "pCobW7f0", "wSoxW44", 'WR9RWRJdKSoo', "tmkdgsFdSa", "W6FdU2JcQ1a", "qCo+WRpcR8kU", "qqCjWPFdSa", "vHynWP7dHG", 'dEkeMJ7dIHq', 'W4pdK3dcGwe', "CSolW6NdKmko", "CmovW63dUSo0", '8ysDQCo1WOlcUCku', "WOy2W7VcJwm", 'W6ldICk5', "lgRdGmkjWOe", "CCkNW5Hnvq", "xH5l", "CSoIWQBcRCkI", "WPZdQmonWRXc", "WRpcO2yWxa", "W7dcGCo8WOSp", "W4pcOCkMWRRcLa", "W7RdICk7", "lrnrWO1J", "AmoMW5u", 'WRJcQWDuWQW', 'W73dGLNcR3W', 'W7VcHCokWOaG', "C8oOASkk", "nIBdJsBcJq", 'j8kWWQu9gW', 'bmotWPmAqq', "W7P8W5VdSX8", "Emo2WQD/", "xCkMW74", "WRVcVNC7ua", "WReuW6G", '8kczK8kyW7NcIsa', 'ymodwSkvaq', 'rbGAWO7dTa', "ySoLFmknbG", "WRJdK8o1W6Lr", "W57dHMVcJhq", "WRZdUCobW6y", "wmoWWRxdPSkd", "ACoNxmkReG", "FSkOW6tdOSoA", "jr7dSXxcHa", "WQpcVMi", '8kMmN8k0gmoWW7K', "l2GiWPO", "W4hcPmo8W4Py", "c2hdKCkC", "kSkphmoEW5C", "WPZdP1NcOCkB", "A8oZW7xdOW", 'fv0s', "FCoVECkrdW", 'W7VdG8ocW77cJa', "tezN", 'W4rpWPD5WQ0', 'kCkMWQu', "W7RdOYCtgq", "h2rVFr0", "WO7cPmkLWRVcNW", "W4LPpmoseG", "uLnZWPim", "jXTgWPnA", "lrnEWPTn", "xSkEea", "eclcICoZlq", "kCogW7SHW5O", "mfLkWPzW", "nCo5s27cRG", "WR0wW6e", "xh3dLSk3Ca", "jCkhcgVdUq", "qCkfi8osW50", 'WPpdLI4D8yIqVG', "zmoKWQRdHwa", "WPfEWPukWQy", 'WPVcQCo6WP4l', "W70PWP8yWPK", 'tCkwbJVdQa', "cCkiW5q", "nCkNWR0", "uqiwWO/dVa", 'eConWQqeBq', "dKTk", 'g0SyW7DR', "FSoDWRO", "vmkdW7rxDW", "hdVcKSo1nW", "W4/dUhRcQ10", "j8oMWQa", "WQddGJ5jWOu", "qmkpW7Lrtq", "WQBdLMO", 'W5BdMCkxWQCC', "ACoYW4JcOCkw", "WRNcR3CJua", 'eLefW70I', "zhywWO4", "vwZcKq", "gXFdSIRdGmoRW4K", "od5sWRTf", "WP9JWQddUCoA", "kSoyWPuWuG", "vMlcJNldT0/dSh55WRFcPSk9W6e4", "hunoWPrC", 'n8ogWOhdR38', 'jSkweghdHW', "WRldQX5iWRe", "sKPZWOev", "WRtcPefmWQK", 'FGFdHhf3', "oSoYumkOWQa", "W7ayW77cSuq", "k8kArmouWPS", 'WR8vW7tcPf4', "hmoxj13dMG", "mXXiWRLt", "WQFdGmo4", "ECorWQ8Pia", "W7SIW68", 'xtSHoXe', "gwxdLSkAWOO", "wCkGW7tcLMm", "gvenW68", 'W4jVWQ1oWRC', "i8kdfM3dTG", "W7tdM8kOWPej", 'sSkXW7C', "y8kNW5VcUmka", "va4jWP4", "WQKiW6ZdJ8ki", 'D8oXW6tdUCoz', "WOC4W7usW4DCW7dcP8k5zSo5WRlcOW", 'q8kWW6i', "DSkHemoUW7O", "WRtcSmouW7RcNW", "ct7dGGhcLG", "wCoeW7FdRCkU", "CXilWPldVa", "E8o3WQldO8kh", "v8osDCkRbq", "lCoGWQVdIMe", "eIf6WPDR", 'uSorWRmYAq', "WQpdTHe", "WQ50WQpdK8od", "WQ1zW5JdTGC", "A8ofWRaPla", "WR1TWQpdMCoS", 'WQxdOrnzWP4', "WQRcR3mJxa", 'cmoZWRS', "WQhcNpcBGzKKW7C", 'z8oSWRlcGuC', "W4DJWQDpWPO", 'omoSWQNdI0i', "WPVdNgtcGmkg", "h8kqfdRdOq", "DmkTbq", 'mYDQWPnU', 'BwWoWONcVq', 'WQ50WQldMq', "WOPbyCo6WRy", "W4vQk8oGsG", "dCozWPyq", "W5rIkCoGnq", "lCk6WQD0dq", 'yCooW6RdHmou', "yCk0W69NBa", "b2v8WRTz", "WQ0wW74", "v8ktW7PazG", 'WOHWDW', 'xspdUKHm', 'ESoOWQNdHfK', 'WRpIHzhdKNtcOW', 'W69Sk8oSdW', 'h2pdKmk7WPm', "W5JdNSklWQyk", "pmk4WPNdOSogW59qWPVdMrDpWRtcLq", "CHBdMNLs", "W7xdQSooW68", "rCoPW43cVSoq", "yCo1ymkmdW", 'W5zQkCoPdW', "rb4kWOVdTq", "s0W+W4Xt", "gCkjW4VcSSk+", 'WQxdTbfuWQG', 'WP7cOmk7WQVcUW', "W74RWR0", "WR7cQKq4va", "W6L+WOPjWRS", 'zSkPtCoPW6y', "DqCyWQNdGa", "ya3dLJ3dPa", "WOddHtD0WO4", "WPz7FCo5WOC", "zmo0zSkwdq", "iCokWRtdQ0G", 'WOlcLKxcSYq', "dmk/wCovWPm", "l8k0WRu", 'h2/cISkIW6a', "W67dPeldHFcEKBC", 'W7nGW4NdTGS', "WRSPW7RcGN8", 'xLn7', "bmkpcmkwWPS", "cSoNW7iKW64", "W4tcSCoQWOmq", "mokgICo/CYq", "D8oXW7K", "vCotl8ocqa", "wtb3Dfq", 'nCkMWRq', 'ehj3', 'W45CW5ZdNYi', 'u8kxW5pcPq', "WO3dJwtcK8km", "tsddQ17dHa", "CCkVa8oVW74", "WP/cHSo8WO8g", "4P6bWQq4t8kU", "i8kTpCoFW5u", "WQTnsCoF", "zSkQm8oXW4S", "DxupWOpcQa", "8kApUmkAeCkemq", "W740W5NdPx4", "bMRdNSoWWQu", "nCkuea", "zdStWRNdLG", "sCoUWQqNBq", "xCoyWOBdUSkv", 'WRFcVwa', "WO/dVmowW5tcPW", "fshdLtpcOa", "emkUpCkBW4i", "WRFdNwzy", "fZhdLcpcIa", "nCotF27WVO6N", "vmkjW6jh", "l8ohW7KeW5e", 'ASoMW6hdQCkc', "f8oEWR4", 'W41sySo1WPq', 'he8oW69e', "W6jkW7JdJmkq", 'W5JdHN3cJha', 'mCkAaq', 'jmkNW6G', 'ps7dN8o3WQ8', 'WPBdV8orW7BcMW', 'g2VcHSkI', "eKzbW4lcQxhdJIbReXJdJwi", "xCoHW7NdOSkN", 'dXeUW5zv', "du0jWRHG", "k8owW7OXW7i", "W7hdNL3cL3a", "vSklW6muAq", 'aCo8W7msW4G', "sNRcLttcOa", "gSkwaCowWOK", "ks5KWPTu", "CmoGe8o/W78", "CmkAW73cQKG", "hw3cLSo8", "W6FdM8kOWOal", "WRldOmotW7BcKq", "WOJcQ8kH", "fspcJ8oKnW", 'eIBcISoGkG', '8kUnM20oWPldNq', 'a23dJmku', "mCkJW5tdNmow", 'zgaqWO/cUW', "nSkuW6b1W5K", "WOtdM8ofW4rD", "WQtdU8omW41D", 'fY7cKSoGiW', "tCkMW6JcG2e", 'wCoUW5VcVSk/', "ACoWAG", "W6VdVJ9Kd8kskfRcRdNcJr5C", "uZuJnXm", "WPZcSmk6WRVcKW", "rSolWO7dKgS", "W5nAdmoIiW", 'z8o6WRddUSkk', 'WQvvASoOWR0', "W7NcISkQ", 'DvfPWOuP', "r8k/W6lcRSom", "W63dGNDC", 'W4tdN8kUWP0l', "h8kBW4ZcTSk+", "tcZdSqRdPa", "nxarW59D", 'qrSqWPRdQG', "qZxcVXtdJa", "AmoJW6JdR8op", "a8oOWQVdGc8", "aLxdUmktWRS", "d8oAW73dOmoZ", "cdD6WRzs", "lmk1w8oZWQ0", 'FYWBgq0', "nCkmqmovWRm", "fmk0WQL8cW", 'W5JcOCo0WO8w', 'W7lcSmoZW4NdNG', "y8oPyCkChW", "WROmW4NcGhu", 'WR7dVSoIW4ZcRa', "yCoZW6u", 'ob9CWPPU', 'DqeOWQpdJa', "W6S/WQOzWRG", "lmobW704", "FHRdKq", "W4pdPKFcO3u", "o8k/WPddPSoaW5jqWRxdGcXpWOZcKa", "Amo7W5lcSmkx", 'wdBdRby', "tbGE", "rsCY", 'z8oGwSkWWRm', 'yCo2WRFdO8kd', 'W4r6WRDC', "DH0Teqe", "v8oFWQK0la", 'k8k/WPddMSkK', "W5vMWRbz", "WR3dGSoTW7jv", "WRj0x8oiWQa", "A8oHW43cTa", "dmopWPysqW", "WQJdRIz2eW", "W5pcOCo1WO8m", 'penDWP5n', "BgpWUl+sWQ8", "EmoGW7e0W40", "DmoIW7pdV8ku", "WO7dIG1NWRS", "cCksnSoXW5y", "b8kOWQVdSCoq", "d00eW6jP", "WR7dO8ouW77cMq", "WRNdVCoaW7hcVa", 'dLbkWPLp', 'bLZcS8krW70', "W6DMW5xdOWK", "imoXWQeX", 'eSkjh8oJW7m', "W5pcMVgiJzHe", "DSoEW78J", "hvKFW79J", "ywGg", "sKXOWO0e", "kCk7WRu9cq", "odvBW53dVmo2WQBdUbpdKmoZ", 'W55DW7pdLc0', "dokhN8k1gNy", "W7joWQ0", 'oXve', 'W7dcI1ufDG', "btBcLCoSnG", "WQtcISoKWRSmWRhcHmkiW4K", 'WRZdM8o1W7fr', 'WPxcTmk5', "CSkqWR4Zlq", 'W4b/WQXEWPa', 'pXPzWP5Z', "ehW9W5HJ", 'quDmWOnb', 'hgVcKmkYW4G', "bSoPCCk8W6m", "W7SEWP01WQm", "cSkZjKldQG", "c0nCWPq", 'WQRdImogW6T6', "W7vYW4RdOWu", "lLddP8k8WP0", 'oCk9s8o/WQ0', "hslcH8oIiq", 'cCkyW4ZcUSkT', 'CCkdW7j4CW', "EYBdSXVdHG", "bCkSoSoyW5u", "kxyNW5Ln", "WRtcILezvG", "i8khcg3dRa", "btJdKYBcTG", 'W47dVMVcQ0e', 'W6FdJ8oRW6/dNa', "W7ZdN8kL", "W4fIkCoGdq", "CxamWPJcRa", "wCoLW7BdOmoq", 'WQ0PW6VcH2W', 'WQ7dKxnjWOO', "W5yPWRyFWPi", "tColW6NcNCkXbSk9WQ0", "vdGipH0", 'imk8jCocW4q', 'ceiCW49Q', 'gZ3cNW', "u1yiWR3cOq", "fw3cHmkYW6e", "WPJcTCkVWQBcHG", "quTeWOe", "W57cRCoG", "WRJdUmocW60", "FhqucZy", "oCoEW7e", "p8kfhq", "m8owW60", 'CmkKawxdQG', "zSoTW5G", "gCoTWRa", "uSk5WQP1WPu", "WPlcGe4uEa", "WO02W57cNpgaGRy", "W554WRO", "g3BdI8ks", "vmkJW4pdK8k0", "W5ZdVCo+", "W60IbmkW8ykbQa", "Bxye", "k8ktW5fMWPu", "W6PPgCosgG", "AXddM3f4", "uJSZkW", "B8ocWRm", "pmo1WPy4yq", "FSo5E8kqaW", "oCkLWRq", "xCkLW7BcLa", 'iSo5WOOgsG', "uHikWO7dTq", "jSkVW7VdGmkez8oIWOHl", 'E8oPW5xcTmkV', 'W7RdQcCFwa', "F8oTW4dcSSke", "8lMFHmosdmkxnG", "ASoPFW", 'qdKHCH4', 'WQlcV0yGCa', 'W4dcUSo1', "WOaYW6G", "W6ZdVdfVc8kulwJcTZxcMIba", "A8kJW4xcUCoC", "W63dLw4y", "esFdNW", "kSkNxmo7WQu", "cN3cJCk3W6i", "WPSbW7/dLCky", "EUkhJKqQW60", "WRxdQWHtWQG", "W4beW5hdGtK", "xmonWOlcOSkR", 'lSkGWQL+cW', "wtBdSaRdGa", 'rmojW7nbBq', "W7uQW6u", 'gSomWOKAua', "tmkWW6JcGq", "bIRcH8oMma", "WPLNWR/dL8oW", "tCkzW5xcPuK", "WQdcQSkJWQBcKW", 'WQNdTCogW7ZcIG', "WONcKCktWPJcRG", "W5ePWR4BWOu", "FIvvWP5Y", 'b8obqxFcTmkAWQOxWRqPW4tdHW', 'sE++Mo+/IU+9Ho+8IG', "WRldVmoc", "deDFWOnb", "W5pdTCklWROI", 'W7hdK8kWWPea', "ctxdLcpcIq", "sSoCWRO8oG", 'WOaQW4tdV8k8', "FmkLbmo2", 'W5hcSmkTWR/IN5y', "WOJdG3/cGSko", "fCkxWPvrsa", 'eCkvW47cUSk8', "ACkqWQSKoq", "k1fNWPfg", 'WR3dGmoT', "uSkwbY3dRa", 'ACoaWRm0pq', "hmopWOa", "W6HcWQ0", "WRNdH8oUW6Lr", "W7v7W5/dPq", "q3qsyv4", 'qSowymk2kq', "zCoKWRFdLee", "aSo3W4eDW60", 'WPCKWOZdPCoG', "rK57", "WR1RWQddImoh", "5lQCwCooWOXJ", 'pCkwfa'];
    _0x5d6a = function () {
      return _0x26d286;
    };
    return _0x5d6a();
  }
  _0x26251f.pattern = "uploadmovie";
  _0x26251f.react = '✔️';
  _0x26251f.alias = ["upmv"];
  _0x26251f.desc = "Movie Searcher";
  _0x26251f.category = "movie";
  _0x26251f.use = ".IDK";
  _0x26251f.filename = __filename;
  cmd(_0x26251f, async (_0x109ab5, _0x2fe79a, _0x35effd, {
    from: _0x3d911b,
    l: _0x4434bc,
    quoted: _0x423274,
    chat: _0x4374ed,
    body: _0x320314,
    isCmd: _0x34738e,
    command: _0x2c5134,
    mentionByTag: _0x146b8f,
    db_pool: _0x2ed5b3,
    args: _0x5c4aee,
    q: _0x265c6d,
    isGroup: _0x1242c4,
    sender: _0x4f2cc1,
    senderNumber: _0x45b887,
    botNumber2: _0x2bb2cd,
    botNumber: _0x486d13,
    pushname: _0x33c2b6,
    isMe: _0x191752,
    isOwner: _0x35d0a5,
    groupMetadata: _0x47eec1,
    groupName: _0x4b118c,
    participants: _0x419d71,
    groupAdmins: _0x4bc3ce,
    isBotAdmins: _0x4fa20b,
    isCreator: _0x530055,
    isDev: _0x15d3b3,
    isAdmins: _0x27cb94,
    reply: _0x4fec81
  }) => {
    try {
      if (!_0x35effd.quoted) {
        return _0x4fec81("*ℹ .upmv spider man*");
      }
      if (!_0x265c6d) {
        return;
      }
      const _0x136791 = _0x265c6d.split(" & ")[0x0];
      const _0x5b6161 = _0x265c6d.split(" & ")[0x1];
      const _0xa25340 = {
        'url': _0x35effd.quoted.msg
      };
      const _0xb87ed9 = {
        'document': _0xa25340,
        'caption': "\n" + _0x5b6161 + "\n\n> *🎬 𝐃 𝐀 𝐑 𝐊 - 𝐄 𝐕 𝐈 𝐋 🎬*",
        'mimetype': "video/mp4",
        'fileName': "🎬 ᴅᴀʀᴋ-ᴇᴠɪʟ ᴍᴏᴠɪᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 🎬\n" + _0x5b6161 + '.mp4'
      };
      await _0x109ab5.sendMessage(_0x136791, _0xb87ed9);
    } catch (_0x10afc1) {
      _0x4fec81("❗ Error" + _0x10afc1);
      _0x4434bc(_0x10afc1);
    }
  });
  const _0x50893f = {
    'pattern': 'moviekv',
    'react': '✔️',
    'alias': ["mkv"],
    'desc': "Movie Searcher",
    'category': "movie",
    'use': ".IDK",
    'filename': __filename
  };
  cmd(_0x50893f, async (_0x33cfd2, _0x45a02e, _0x90f21a, {
    from: _0x1efe6b,
    l: _0x2227ef,
    quoted: _0x4b1032,
    chat: _0x4cc98e,
    body: _0x4bc593,
    isCmd: _0x3cc8ba,
    command: _0x1cf49c,
    mentionByTag: _0x2d0486,
    db_pool: _0x4b90b5,
    args: _0x3f3c79,
    q: _0x4800da,
    isGroup: _0x238a63,
    sender: _0x15f8de,
    senderNumber: _0x563d89,
    botNumber2: _0x53bc61,
    botNumber: _0xdadbc4,
    pushname: _0x4604fd,
    isMe: _0x32ceef,
    isOwner: _0x1efd6e,
    groupMetadata: _0x2dd1c6,
    groupName: _0x1ad203,
    participants: _0x572237,
    groupAdmins: _0x19c1b3,
    isBotAdmins: _0x2be62e,
    isCreator: _0x521f1e,
    isDev: _0x341b7e,
    isAdmins: _0x5dbe55,
    reply: _0x17fba9
  }) => {
    try {
      if (!_0x90f21a.quoted) {
        return _0x17fba9("*ℹ .mkv spider man*");
      }
      if (!_0x4800da) {
        return;
      }
      const _0x4f32ab = _0x4800da.split(" & ")[0x0];
      const _0x52b9d1 = _0x4800da.split(" & ")[0x1];
      const _0x101ce8 = {
        'url': _0x90f21a.quoted.msg
      };
      const _0x3a0722 = {
        'document': _0x101ce8,
        'caption': "\n" + _0x52b9d1 + "\n\n> *🎬 𝐃 𝐀 𝐑 𝐊 - 𝐄 𝐕 𝐈 𝐋 🎬*",
        'mimetype': 'video/mkv',
        'fileName': "🎬 ᴅᴀʀᴋ-ᴇᴠɪʟ ᴍᴏᴠɪᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 🎬\n" + _0x52b9d1 + ".mkv"
      };
      await _0x33cfd2.sendMessage(_0x4f32ab, _0x3a0722);
    } catch (_0x3fefe1) {
      _0x17fba9("❗ Error" + _0x3fefe1);
      _0x2227ef(_0x3fefe1);
    }
  });
  const _0x1f038e = {
    'pattern': "uploadtv",
    'react': '✔️'
  };
  function _0x411d3f(_0x200658, _0x36faff, _0x146175, _0x1d36d3, _0x2b0498) {
    return _0x4a60(_0x200658 - 0x2ea, _0x2b0498);
  }
  _0x1f038e.alias = ["uptv"];
  function _0x2de085(_0x23aa7c, _0xdeb909, _0x10bf6e, _0x1f2a59, _0x4ee32d) {
    return _0x4a60(_0x4ee32d + 0x1fe, _0x10bf6e);
  }
  _0x1f038e.desc = "Movie Searcher";
  _0x1f038e.category = "movie";
  _0x1f038e.use = '.IDK';
  _0x1f038e.filename = __filename;
  cmd(_0x1f038e, async (_0x3a099a, _0x42a0c8, _0x3779d0, {
    from: _0x644bf,
    l: _0x50dc05,
    quoted: _0x721552,
    body: _0x5d7622,
    isCmd: _0xd31e1a,
    command: _0x55a91f,
    mentionByTag: _0x84cf08,
    db_pool: _0x5f29e8,
    args: _0x248e16,
    q: _0x6067fc,
    isGroup: _0x259b49,
    sender: _0x1dd608,
    senderNumber: _0x5147a3,
    botNumber2: _0x480c1d,
    botNumber: _0x3c6d5a,
    pushname: _0x130891,
    isMe: _0x4aa515,
    isOwner: _0x1f1860,
    groupMetadata: _0x5b9119,
    groupName: _0x1eac80,
    participants: _0x3585e5,
    groupAdmins: _0x502be7,
    isBotAdmins: _0x4cf41e,
    isCreator: _0x5208a3,
    isDev: _0x3a5dca,
    isAdmins: _0x507c73,
    reply: _0x78f55d
  }) => {
    try {
      if (!_0x3779d0.quoted) {
        return _0x78f55d("*ℹ .upmv spider man*");
      }
      if (!_0x6067fc) {
        return;
      }
      const _0x3367f8 = _0x6067fc.split(" & ")[0x0];
      const _0x3e8fbe = _0x6067fc.split(" & ")[0x1];
      const _0x134163 = {
        'url': _0x3779d0.quoted.msg
      };
      const _0x54fbc7 = {
        'document': _0x134163,
        'caption': '*' + _0x3e8fbe + '*',
        'mimetype': 'video/mp4',
        'fileName': "*_ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ᴇᴠɪʟ_"\n" + _0x3e8fbe + ".mp4"
      };
      await _0x3a099a.sendMessage(_0x3367f8, _0x54fbc7);
    } catch (_0x1f2e7c) {
      _0x78f55d("❗ Error" + _0x1f2e7c);
      _0x50dc05(_0x1f2e7c);
    }
  });
  const _0x5f0618 = {
    'pattern': 'uploadtvm',
    'react': '✔️',
    'alias': ["uptvm"],
    'desc': "Movie Searcher",
    'category': "movie",
    'use': ".IDK",
    'filename': __filename
  };
  cmd(_0x5f0618, async (_0x89a789, _0x45b58c, _0x56bf59, {
    from: _0x3b727b,
    l: _0xb776d9,
    quoted: _0x5285dd,
    body: _0x23b879,
    isCmd: _0x1e4920,
    command: _0x53b5a5,
    mentionByTag: _0xa6f370,
    db_pool: _0xede93b,
    args: _0x51f3cc,
    q: _0x49420c,
    isGroup: _0x4261ac,
    sender: _0x269f2e,
    senderNumber: _0x3620b7,
    botNumber2: _0x114d10,
    botNumber: _0x2134ca,
    pushname: _0x35a114,
    isMe: _0x27f80b,
    isOwner: _0x3fbb47,
    groupMetadata: _0x4de80f,
    groupName: _0x7e22fb,
    participants: _0x1e273e,
    groupAdmins: _0x1bbd17,
    isBotAdmins: _0xaa8aed,
    isCreator: _0x795f35,
    isDev: _0x1230bf,
    isAdmins: _0x3fafd4,
    reply: _0x4270b3
  }) => {
    try {
      if (!_0x56bf59.quoted) {
        return _0x4270b3("*ℹ .upmv spider man*");
      }
      if (!_0x49420c) {
        return;
      }
      const _0x48839e = _0x49420c.split(" & ")[0x0];
      const _0x232673 = _0x49420c.split(" & ")[0x1];
      const _0x1adb21 = {
        'url': _0x56bf59.quoted.msg
      };
      const _0x49b3d9 = {
        'document': _0x1adb21,
        'caption': '*' + _0x232673 + '*',
        'mimetype': "video/mkv",
        'fileName': "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ᴇᴠɪʟ\n" + _0x232673 + '.mkv'
      };
      await _0x89a789.sendMessage(_0x48839e, _0x49b3d9);
    } catch (_0x53aa79) {
      _0x4270b3("❗ Error" + _0x53aa79);
      _0xb776d9(_0x53aa79);
    }
  });
  const _0x3064ee = {
    'pattern': "uploadmoviem",
    'react': '✔️',
    'alias': ['upmvm'],
    'desc': "Movie Searcher",
    'category': "movie",
    'use': ".IDK",
    'filename': __filename
  };
  cmd(_0x3064ee, async (_0x3e7c90, _0x43c051, _0x264ffe, {
    from: _0x1db52c,
    l: _0x4740f8,
    quoted: _0x3d7735,
    body: _0x286c7e,
    isCmd: _0x5877b8,
    command: _0x5e4e18,
    mentionByTag: _0x51876c,
    db_pool: _0x5ac595,
    args: _0x44aa22,
    q: _0x352f5f,
    isGroup: _0x3a0723,
    sender: _0x22eb48,
    senderNumber: _0x44b69e,
    botNumber2: _0x23261f,
    botNumber: _0x2a9c43,
    pushname: _0x97d15f,
    isMe: _0x1b3859,
    isOwner: _0x3d9845,
    groupMetadata: _0x4c5894,
    groupName: _0x45172f,
    participants: _0xccc083,
    groupAdmins: _0x3ae3dc,
    isBotAdmins: _0x2b8dba,
    isCreator: _0x224626,
    isDev: _0x2429cc,
    isAdmins: _0x55260e,
    reply: _0x4c2ca6
  }) => {
    try {
      if (!_0x264ffe.quoted) {
        return _0x4c2ca6("*ℹ .upmv spider man*");
      }
      if (!_0x352f5f) {
        return;
      }
      const _0x3eaf34 = _0x352f5f.split(" & ")[0x0];
      const _0x12003e = _0x352f5f.split(" & ")[0x1];
      const _0x11b02d = {
        'url': _0x264ffe.quoted.msg
      };
      const _0x1f6398 = {
        'document': _0x11b02d,
        'caption': "\n" + _0x12003e + "\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ᴇᴠɪʟ*",
        'mimetype': "video/mkv",
        'fileName': "🎬 𝐃 𝐀 𝐑 𝐊 - 𝐄 𝐕 𝐈 𝐋 🎬\n" + _0x12003e + ".mkv"
      };
      await _0x3e7c90.sendMessage(_0x3eaf34, _0x1f6398);
    } catch (_0x379852) {
      _0x4c2ca6("❗ Error" + _0x379852);
      _0x4740f8(_0x379852);
    }
  });
  const _0x2a2fff = {
    'pattern': "uploadzip",
    'react': '✔️',
    'alias': ["upzip"],
    'desc': "Movie Searcher",
    'category': "movie"
  };
  function _0x48b02d(_0xb7d4cf, _0x5b237f, _0x14a430, _0x291ece, _0x5369e1) {
    return _0x4a60(_0xb7d4cf + 0x75, _0x14a430);
  }
  _0x2a2fff.use = ".IDK";
  _0x2a2fff.filename = __filename;
  cmd(_0x2a2fff, async (_0x59d563, _0x1df0d8, _0x459b4d, {
    from: _0x2d74ad,
    l: _0x5aa967,
    quoted: _0x1698fc,
    body: _0xf800d2,
    isCmd: _0x1d258d,
    command: _0x13d6a1,
    mentionByTag: _0x54a0ba,
    db_pool: _0x2b3eec,
    args: _0x459e9b,
    q: _0x5d5097,
    isGroup: _0x575ea2,
    sender: _0x5145ad,
    senderNumber: _0x5f57b5,
    botNumber2: _0x131105,
    botNumber: _0x5d08a2,
    pushname: _0x2fb955,
    isMe: _0x4958c5,
    isOwner: _0x45cd3a,
    groupMetadata: _0x4fb17c,
    groupName: _0x3bee82,
    participants: _0x22593c,
    groupAdmins: _0x5bc90a,
    isBotAdmins: _0x508ee9,
    isCreator: _0x20d1d3,
    isDev: _0x1e0e6f,
    isAdmins: _0x5bdf86,
    reply: _0x4093ec
  }) => {
    try {
      if (!_0x459b4d.quoted) {
        return _0x4093ec("*ℹ .upmv spider man*");
      }
      if (!_0x5d5097) {
        return;
      }
      const _0x587af8 = _0x5d5097.split(" & ")[0x0];
      const _0x1b691f = _0x5d5097.split(" & ")[0x1];
      const _0x41fdfb = {
        'url': _0x459b4d.quoted.msg
      };
      const _0x29a9a3 = {
        'document': _0x41fdfb,
        'caption': "\n" + _0x1b691f + "\n\n> *VAJIRATECH*",
        'mimetype': 'application/zip',
        'fileName': "🎬 𝐃 𝐀 𝐑 𝐊 - 𝐄 𝐕 𝐈 𝐋 🎬\n" + _0x1b691f + ".zip"
      };
      await _0x59d563.sendMessage(_0x587af8, _0x29a9a3);
    } catch (_0x22687e) {
      _0x4093ec("❗ Error" + _0x22687e);
      _0x5aa967(_0x22687e);
    }
  });
  const _0x2a52af = {
    'pattern': "uploadzipn",
    'react': '✔️',
    'alias': ["upzipn"],
    'desc': "Movie Searcher",
    'category': "movie",
    'use': '.IDK',
    'filename': __filename
  };
  cmd(_0x2a52af, async (_0x53b2fc, _0x189d02, _0x34e566, {
    from: _0xcacba2,
    l: _0x7530d3,
    quoted: _0x19fe2f,
    body: _0x32c382,
    isCmd: _0x35c528,
    command: _0x42bd9d,
    mentionByTag: _0x2f0471,
    db_pool: _0x590bef,
    args: _0x4eadc2,
    q: _0x46ebfe,
    isGroup: _0x1e067f,
    sender: _0x429804,
    senderNumber: _0xa587c6,
    botNumber2: _0x9437a5,
    botNumber: _0x3e9d82,
    pushname: _0x45c422,
    isMe: _0x154fbf,
    isOwner: _0x45a7b1,
    groupMetadata: _0x32658f,
    groupName: _0x3f9359,
    participants: _0x1323df,
    groupAdmins: _0x194494,
    isBotAdmins: _0x20d295,
    isCreator: _0x419157,
    isDev: _0x46aa7b,
    isAdmins: _0x3acd5c,
    reply: _0x5b04d1
  }) => {
    try {
      if (!_0x34e566.quoted) {
        return _0x5b04d1("*ℹ .upmv spider man*");
      }
      if (!_0x46ebfe) {
        return;
      }
      const _0x3be2c2 = _0x46ebfe.split(" & ")[0x0];
      const _0x25d27c = _0x46ebfe.split(" & ")[0x1];
      const _0x4becee = {
        'url': _0x34e566.quoted.msg
      };
      const _0x59f2a9 = {
        'document': _0x4becee,
        'caption': '*' + _0x25d27c + '*',
        'mimetype': "application/zip",
        'fileName': "📃 𝐃 𝐀 𝐑 𝐊 - 𝐄 𝐕 𝐈 𝐋 📃\n" + _0x25d27c + ".zip"
      };
      await _0x53b2fc.sendMessage(_0x3be2c2, _0x59f2a9);
    } catch (_0x226e63) {
      _0x5b04d1("❗ Error" + _0x226e63);
      _0x7530d3(_0x226e63);
    }
  });
  const _0x4efcdc = {
    'pattern': "uploadzipfile",
    'react': '✔️',
    'alias': ["upzipfile"],
    'desc': "Movie Searcher",
    'category': 'movie',
    'use': ".IDK",
    'filename': __filename
  };
  cmd(_0x4efcdc, async (_0x414e57, _0x4d3e5e, _0x5d8936, {
    from: _0xf2167d,
    l: _0x33617e,
    quoted: _0x4478c1,
    body: _0x1a727c,
    isCmd: _0x18ce63,
    command: _0x387a3f,
    mentionByTag: _0x4e5f97,
    db_pool: _0x5388f3,
    args: _0x27cab7,
    q: _0x22da55,
    isGroup: _0x50fbc5,
    sender: _0x2e578d,
    senderNumber: _0x167a73,
    botNumber2: _0x53c77b,
    botNumber: _0x35f1da,
    pushname: _0xc8bc81,
    isMe: _0xdbec7a,
    isOwner: _0x429c6c,
    groupMetadata: _0x1adff3,
    groupName: _0x35d8e0,
    participants: _0x1ea865,
    groupAdmins: _0x279611,
    isBotAdmins: _0x581a88,
    isCreator: _0x475aa5,
    isDev: _0x50bb26,
    isAdmins: _0x4489d5,
    reply: _0x341ea3
  }) => {
    try {
      if (!_0x5d8936.quoted) {
        return _0x341ea3("*ℹ .upmv spider man*");
      }
      if (!_0x22da55) {
        return;
      }
      const _0x57f510 = _0x22da55.split(" & ")[0x0];
      const _0x200b9c = _0x22da55.split(" & ")[0x1];
      const _0x1cbefc = {
        'url': _0x5d8936.quoted.msg
      };
      const _0x232af6 = {
        'document': _0x1cbefc,
        'caption': '*' + _0x200b9c + '*',
        'mimetype': "application/zip",
        'fileName': _0x200b9c + ".zip"
      };
      await _0x414e57.sendMessage(_0x57f510, _0x232af6);
    } catch (_0x403828) {
      _0x341ea3("❗ Error" + _0x403828);
      _0x33617e(_0x403828);
    }
  });
  const _0x2da13a = {
    'pattern': "sub",
    'react': "🗃️",
    'desc': "get subtitles",
    'category': "download",
    'use': ".sub avengers",
    'filename': __filename
  };
  cmd(_0x2da13a, async (_0x5b79e5, _0x2a8c13, _0x56f7a8, {
    from: _0x422a7d,
    q: _0x5092cb,
    pushname: _0x45c3ad,
    reply: _0x45b4e7
  }) => {
    try {
      const _0x312f72 = await subsearch(_0x5092cb);
      const _0x2499f5 = _0x312f72.results;
      const _0xc066d1 = [];
      for (var _0x46320d = 0x0; _0x46320d < _0x2499f5.length; _0x46320d++) {
        _0xc066d1.push({
          'header': _0x46320d + 0x1,
          'title': '' + _0x2499f5[_0x46320d].title,
          'description': '',
          'id': ".dsub " + _0x2499f5[_0x46320d].link
        });
      }
      const _0x4372f0 = {
        'display_text': config.BTN,
        'url': config.BTNURL,
        'merchant_url': config.BTNURL
      };
      let _0xf7f35a = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify(_0x4372f0)
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "sᴇʟᴇᴄᴛ ɴᴇᴡs ᴛʏᴘᴇs",
          'sections': [{
            'title': "sᴇʟᴇᴄᴛ ᴀ ᴄᴀᴛᴇɢᴏʀʏ",
            'highlight_label': "𝐃 𝐀 𝐑 𝐊 - 𝐄 𝐕 𝐈 𝐋",
            'rows': _0xc066d1
          }]
        })
      }];
      const _0x25e361 = {
        'image': config.LOGO,
        'header': '',
        'footer': config.FOOTER,
        'body': "> 🎬 ᴅᴀʀᴋ-ᴇᴠɪʟ sᴜʙᴅʟ 🎬\t\n\n\t> sᴜʙᴛɪᴛɪʟᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 🎥"
      };
      const _0x3ca221 = {
        'quoted': _0x2a8c13
      };
      return await _0x5b79e5.sendButtonMessage(_0x422a7d, _0xf7f35a, _0x56f7a8, _0x25e361, _0x3ca221);
    } catch (_0x393e03) {
      _0x45b4e7("*Error !!*");
      console.log(_0x393e03);
    }
  });
  const _0x3e8424 = {
    'pattern': "dsub",
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x3e8424, async (_0x409fe5, _0x15d0f7, _0x11e438, {
    from: _0x2fc67b,
    l: _0x285b8f,
    quoted: _0x4433b8,
    body: _0x59ede1,
    isCmd: _0x5df4b8,
    command: _0x59c1db,
    args: _0xe4b903,
    q: _0x491278,
    isGroup: _0x30f660,
    sender: _0x11e544,
    senderNumber: _0x2a450a,
    botNumber2: _0x4d0de3,
    botNumber: _0x516367,
    pushname: _0x2912e3,
    isMe: _0x36b15a,
    isOwner: _0x36d92b,
    groupMetadata: _0x1ebf0e,
    groupName: _0x5ecf4f,
    participants: _0x1849fb,
    groupAdmins: _0x41e5c3,
    isBotAdmins: _0x2eb0c7,
    isAdmins: _0x3cfa54,
    reply: _0x207d32
  }) => {
    try {
      const _0x12a289 = {
        'text': '📥',
        'key': _0x15d0f7.key
      };
      const _0x1f8bed = {
        'react': _0x12a289
      };
      await _0x409fe5.sendMessage(_0x2fc67b, _0x1f8bed);
      const _0x49e426 = {
        'text': "*Need sub link...*"
      };
      const _0x2bc57a = {
        'quoted': _0x15d0f7
      };
      if (!_0x491278) {
        return await _0x409fe5.sendMessage(_0x2fc67b, _0x49e426, _0x2bc57a);
      }
      const _0x28f79e = await subdl(_0x491278);
      let _0x3fe3cb = _0x28f79e.results;
      let _0x26c23b = "*📚 Title :* " + _0x3fe3cb.title.trim() + "\n*💼 Creater :* " + _0x3fe3cb.creater;
      const _0x350c84 = {
        'url': _0x3fe3cb.img
      };
      const _0x11fbbe = {
        'image': _0x350c84,
        'caption': _0x26c23b
      };
      const _0x14383f = {
        'quoted': _0x15d0f7
      };
      await _0x409fe5.sendMessage(_0x2fc67b, _0x11fbbe, _0x14383f);
      const _0x494618 = {
        'url': _0x3fe3cb.dl_link
      };
      const _0x21ab01 = {
        'quoted': _0x15d0f7
      };
      let _0x53d2da = await _0x409fe5.sendMessage(_0x2fc67b, {
        'document': _0x494618,
        'mimetype': 'application/zip',
        'fileName': _0x3fe3cb.title.trim() + '.' + "zip",
        'caption': ''
      }, _0x21ab01);
      const _0x40050f = {
        'text': '📁',
        'key': _0x53d2da.key
      };
      const _0x378ab1 = {
        'react': _0x40050f
      };
      await _0x409fe5.sendMessage(_0x2fc67b, _0x378ab1);
      const _0x26b8df = {
        'text': '✔',
        'key': _0x15d0f7.key
      };
      const _0x2fb0f3 = {
        'react': _0x26b8df
      };
      await _0x409fe5.sendMessage(_0x2fc67b, _0x2fb0f3);
    } catch (_0x5b0f32) {
      _0x207d32("*ERROR !!*");
      _0x285b8f(_0x5b0f32);
    }
  });