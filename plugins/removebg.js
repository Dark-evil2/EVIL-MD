(function (_0xff16cd, _0x2795e6) {
    const _0x49d57d = _0xff16cd();
    while (true) {
      try {
        const _0x5188f7 = parseInt(_0x41bd(0x131, 'vTAG')) / 0x1 * (-parseInt(_0x41bd(0x22d, "#cyi")) / 0x2) + -parseInt(_0x41bd(0x18e, "&zRI")) / 0x3 + -parseInt(_0x41bd(0x1f8, "$XUG")) / 0x4 + -parseInt(_0x41bd(0x206, "dGAR")) / 0x5 + parseInt(_0x41bd(0x1ab, 'Crw2')) / 0x6 + -parseInt(_0x41bd(0x160, "4!xr")) / 0x7 + parseInt(_0x41bd(0x1a5, "Wj#Z")) / 0x8 * (parseInt(_0x41bd(0x254, "Wj#Z")) / 0x9);
        if (_0x5188f7 === _0x2795e6) {
          break;
        } else {
          _0x49d57d.push(_0x49d57d.shift());
        }
      } catch (_0x5881e5) {
        _0x49d57d.push(_0x49d57d.shift());
      }
    }
  })(_0x2b04, 0x8a125);
  const config = require("../settings");
  const {
    cmd,
    commands
  } = require("../lib/command");
  const got = require("got");
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
  const {
    Sticker,
    createSticker,
    StickerTypes
  } = require("wa-sticker-formatter");
  const fs = require('fs');
  function _0x36c260(_0x29150e, _0x2f5f72, _0x90fdc4, _0x15f694, _0x46b232) {
    return _0x41bd(_0x46b232 + 0xff, _0x2f5f72);
  }
  const {
    promisify
  } = require("util");
  const FormData = require("form-data");
  const stream = require("stream");
  function _0x56036b(_0x593dae, _0x3c897b, _0x14ac83, _0x46df89, _0x3fcc8e) {
    return _0x41bd(_0x46df89 - 0x17b, _0x3c897b);
  }
  const pipeline = promisify(stream.pipeline);
  const fileType = require("file-type");
  let wm = "X-BYTE v" + require("../package.json").version;
  function _0x41bd(_0x276cb3, _0x1c1bbf) {
    const _0x513ad6 = _0x2b04();
    _0x41bd = function (_0x3c8c34, _0x2f6d0c) {
      _0x3c8c34 = _0x3c8c34 - 0x100;
      let _0x5956a6 = _0x513ad6[_0x3c8c34];
      if (_0x41bd.LYbHkZ === undefined) {
        var _0xa6ef63 = function (_0x5383f0) {
          let _0x193895 = '';
          let _0x5b2f4e = '';
          let _0x58891c = 0x0;
          let _0x544e2c;
          let _0x2dd09b;
          for (let _0x1b7d0f = 0x0; _0x2dd09b = _0x5383f0.charAt(_0x1b7d0f++); ~_0x2dd09b && (_0x544e2c = _0x58891c % 0x4 ? _0x544e2c * 0x40 + _0x2dd09b : _0x2dd09b, _0x58891c++ % 0x4) ? _0x193895 += String.fromCharCode(0xff & _0x544e2c >> (-0x2 * _0x58891c & 0x6)) : 0x0) {
            _0x2dd09b = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x2dd09b);
          }
          let _0x470493 = 0x0;
          for (let _0x65429c = _0x193895.length; _0x470493 < _0x65429c; _0x470493++) {
            _0x5b2f4e += '%' + ('00' + _0x193895.charCodeAt(_0x470493).toString(0x10)).slice(-0x2);
          }
          return decodeURIComponent(_0x5b2f4e);
        };
        const _0x35aeb2 = function (_0x378de7, _0x5bf33c) {
          let _0x1f9a8e = [];
          let _0x5b6ce2 = 0x0;
          let _0x21cfee;
          let _0x1a055b = '';
          _0x378de7 = _0xa6ef63(_0x378de7);
          let _0x351db0;
          for (_0x351db0 = 0x0; _0x351db0 < 0x100; _0x351db0++) {
            _0x1f9a8e[_0x351db0] = _0x351db0;
          }
          for (_0x351db0 = 0x0; _0x351db0 < 0x100; _0x351db0++) {
            _0x5b6ce2 = (_0x5b6ce2 + _0x1f9a8e[_0x351db0] + _0x5bf33c.charCodeAt(_0x351db0 % _0x5bf33c.length)) % 0x100;
            _0x21cfee = _0x1f9a8e[_0x351db0];
            _0x1f9a8e[_0x351db0] = _0x1f9a8e[_0x5b6ce2];
            _0x1f9a8e[_0x5b6ce2] = _0x21cfee;
          }
          _0x351db0 = 0x0;
          _0x5b6ce2 = 0x0;
          for (let _0x44d4a3 = 0x0; _0x44d4a3 < _0x378de7.length; _0x44d4a3++) {
            _0x351db0 = (_0x351db0 + 0x1) % 0x100;
            _0x5b6ce2 = (_0x5b6ce2 + _0x1f9a8e[_0x351db0]) % 0x100;
            _0x21cfee = _0x1f9a8e[_0x351db0];
            _0x1f9a8e[_0x351db0] = _0x1f9a8e[_0x5b6ce2];
            _0x1f9a8e[_0x5b6ce2] = _0x21cfee;
            _0x1a055b += String.fromCharCode(_0x378de7.charCodeAt(_0x44d4a3) ^ _0x1f9a8e[(_0x1f9a8e[_0x351db0] + _0x1f9a8e[_0x5b6ce2]) % 0x100]);
          }
          return _0x1a055b;
        };
        _0x41bd.XxQuKR = _0x35aeb2;
        _0x276cb3 = arguments;
        _0x41bd.LYbHkZ = true;
      }
      const _0x2e11dc = _0x513ad6[0x0];
      const _0x449663 = _0x3c8c34 + _0x2e11dc;
      const _0xb5ed4b = _0x276cb3[_0x449663];
      if (!_0xb5ed4b) {
        if (_0x41bd.RObUUy === undefined) {
          _0x41bd.RObUUy = true;
        }
        _0x5956a6 = _0x41bd.XxQuKR(_0x5956a6, _0x2f6d0c);
        _0x276cb3[_0x449663] = _0x5956a6;
      } else {
        _0x5956a6 = _0xb5ed4b;
      }
      return _0x5956a6;
    };
    return _0x41bd(_0x276cb3, _0x1c1bbf);
  }
  function _0x2b04() {
    const _0x329b71 = ["dLxcTSohha", "WQncF8ox", "mruNWRBcPa", "WQL9oa1P", "W4ZdPSkNid0", "sqFdRCkJW6q", "WQBdGW/cRq", "arlcQmohhW", "oq4H", "k1pdG8o+Cq", 'bmk6cW', "CCoUWOxcPCkm", "W6/cVYhdS8oN", "W5OaW6DUWPG", "at3cGfhcTa", "W6RdOdyJrq", 'lu/dKCo8', "W55IvCkzW6K", "W6NcGqS", "utvpDti", "bIVcMa", "eNxcRei", "WPmzxq", 'W4eRCmkjW5q', "W43cQ1L9WRK", "pH7dLCo8W4y", 'oahdQ8oiiW', 'rXtdPSkMW5W', "WQFdQmobDSo8", "nSo8WPtdIs8jWR9SnG", "mKiyrmo9", "WPVdKcVcVCki", "xxNcMxfu", "sSomvSoIWQ0", "WPJcLNWhra", "fSk8sSoRycDIwCoc", "W6VcGW9WW7u", "WRpcMG/cOmkH", "W6yCW4tcMmkV", "WOtdIr3cJCkg", "W7HJF1Tt", 'oSk8pCohuq', "WPtcUghcHCkTW6vueSoFW4JcSXtcJG", 'W4JcIWqe', "pConW6/cTmoW", 'W74lW7DXWOW', 'WPPAWRVdSCkl', "b+g2Iog1U+g2M+g0Vq", "p1/dJCo8lW", "W50klCoAnG", "W6ldSsldP8kR", "BmosWRlcNCkj", "hSkMW7JcJYa", 'W57dP8kPcY0', "FCoGs8oqWOO", "W4ddOZq", "bI/dPq", "kwPNW5TN", "DSoKWQNcTmkN", "DSoMy1XZ", 'kmoxB8kzqW', "dcRcIr/dSa", "W5ZdVSkT", "W44YW7dcN8ke", 'hY7dGurb', 'EJ/dKSkPW5S', "sSoQdCo7gG", 'tSoJsCox', "AmoAmJ4a", "W4RcKreCaa", "gwxdMSotnq", "W4DwWQBdVSkb", "WOqIE8kpWQy", "wmoCWR9uaa", 'hWuGrfG', "tCoHk8oGCa", 'W6inp8kld0xcMeNcRSo5W4qXW5i', "iatdTMjN", "yGmov2y", "lCk+W67cLSkZ", "tWFdHCkNW6m", "dd/dK0zf", "WOhdScxcNmk+", "W77dGCkhbaG", "CaldQSksW6e", "WOGOW59wza", "ymo0WQBcKCot", "WOmPfmkoW44", "WOiPf8kfW7O", "uWRcIq7dQa", "W6pcKXXMWR0", "iGGOWQe", 'WPSutmkYW7a', "W5GZW5lcK8kD", "WQNdQM7dSCo8", "bSk3W6G", "W4K5W53cHSkm", "xGZdUmkN", "CuVcQSonhG", '4BsNWQFkISUZgW', "l3S0t8oA", "W4elW6vMWQS", "htRcIXRcPa", "nmoRWQpcK8k5", "hd7dJ1nq", "ymoIWRm", "EGOotwu", "WRxdKLKYW6TiW79hWOJcS1vDWR8", "r0hcQG", 'qcZdS8onW6a', "ixatW5XM", "o0BdVSovoq", 'W70tWQTMWOi', "YyliUog3QcpHTAC", "W7KHF1SXhJXsjSkvW7JcICoS", "WR5wBSovwW", "W7FcGCo4geW", "aJZdUCkrW68", "W4xcGmo6cKW", "WOqzxCk+", 'vCoOgCo5', "W57dSSk8mt8", "WQBdK8o/trz+lulcImoTBLzk", "t8kxWP4Yra", 'W4WAW6RcSSkq', "W5tdTCkYoX8", "W4tdVsldNCo7", "W4pdUYxdImoZ", "smoPeSoOuW", "W54KW5lcNSkA", "W4znWQhdTCke", "W5iMh8oHbW", 'BmodmY5+', "W4dcRYbtWP8", 'oHZdU8kdwa', "x27cO0jw", "nSkpW7ZcKSoW", "xSoTEMzn", "W60fW7zLWPK", "EfxcQCoJWRO", "W44VW4lcM8kn", 'WPasvSkYWR4', "WPb5WPZcH8kb", "qmoODWu", "4BsOWPJJGkS", 'WRxdGCkLc3u9WP3cImoh', "sgdcULe", "CmoNWQhcTCky", "DmkGW4VdMdG", "y8oUWQJcPmkp", "xSorWO10jq", "oNmnW7ZcJmo/FmkLycqLW7NcIa", "eSk1kIPA", "W6FdRsmCFW", "W6BcHmkNhgO", 'dmkDW7VcOsi', 'aSk/W7JcNY4', "AuVcVq", "A8ozWOrVgq", "W67cLbT3WQK", 'WR/dMXhcRmkc', "D8oEW6O", "j0uK", 'lvbdW5ri', "gwlcQLtjNW", "W70fDa", "yGmoufq", "W5ZcRmkip2i", "CK/cTSompq", "W4ykk8opja", "kGZcNatdJW", "WQfpWQTHWPG", "rXNdHvDz", "W5yXW7DNWOe", "W51nWQFdOmkw", "wmoNoYqt", "WRpcONhcSSkKz8k8W4lcJSoUCq", 'W7xcLb1UWRq', "bdjUWPNdOW", 'W7tcH8o+fK4', "fYy9C3u", "W5znWRRdV8kl", "W4OMW6nfWPK", 'bd3cLq', "ySoUWRm", 'CSk0W43dRc0', "EqOkz2S", "rr3cVIZdIW", "FcvFWQpdIW", 'qCkSW4NdMq', "WR0Qa8kqW7S", 'W6tcLmkMdei', 'WPyMW5HnyW', "s2tdR1zh", "WP7dKffjuG", "W4FcGWWtaG", "yCoqn8os", "W4eUhmoAfG", "gmkMW6xcGYu", "W5hdP37dNCoY", "cmkWW7y", "wmopWOTBdq", 'W5FcUCkHaua', "hmkNW77cMc4", "smoGWQBcICot", 'eNhdS8owvW', 'CqSk', 'W5v0W50', "WQ3cL1eSW64", "Dfv6WQJcKCoFW6CCwG", 'WQBdVmoADSo8', "WRFcN1PNW48", "mmkiW6pcRW", "W63cHry", "W5jaW6D3WP4", "bmkQfmoGCq", "4BAq4Bw7m/cVGzBIGAhWSzc9WPi", "W5ZcIWWAcW", "YlZHTAhHTOhkNSMI", "WR0gomkTW4G", "W5aPk8odmq", "Bg0tumo2", "d8kZW7lcHYW", "W6GwW4fEWOi", 'xxxcSGPs', "CqqEtfC", "d2xdV8oqW6a", 'W5BdTSkX', "h0xcUSoXWQzCc3W/W7b/", "mqq2WQW", "kuKL", "D0BdJ8o+", "4Bwm4BwlYlNHTkJHTk4", "4Bw24BwpWOdHTlZHTli", "WQ7dNfWNW44", "cSIBY5vN4BwN", "W5ZcOSk8yJq", 'WP/dJraycG', "iCkvW68", "W7ZcJmkOh0i", "W4NdQSk4mq", "lqdcHaFdOW", "W6tcQmkFmmkPbSoUW7hcRmkUumodWQa", "dfNcQq", 'WR7dSSoABCk3', "BwdcR0Xs", "WOPOpqfb", 'WQtdV8ojzG', "kY7dMNbZ", "uCk6t8oxWQa", '8l6VPK9fWPS5', "WR5iEW", "WO/cOh7dJmo9", "WQqFW4rayq", "wbZdPSkTWR0", "xx/cKaLE", "W5SJW5ZcHmkm", "bIZdGSozEW", "W67dP8k6mtK", "wHRdU8k2", "FqCiutW", "kbmTvq", "CCoVWQpcGmoy", "k21GW5Dk", "WQRcL0C8", "W5iEW7rNWOm", "a8k/cmo1Aa", 'bJxcJrNdOq', 'WPL/umoMzW', "W5/cGXyjaG", "meeLz8ow", "A8oRnd8f", "bsldKWDC", 'W74CW6RcT8kH', "WQ/cH1a8W4y", 'xaJdQ8kwiSkoWOWhy8kc', 'W5KZW53cLmkK', 'W7xcGmo+d0i', "W4zCWR3dTmkO", "WPTtWQddV8kl", 'WPe5dSkf', 'BqlcKmkTuSkmWODYqa8', "uYKIEvm", "WQr3k0n1", "WRxcL0y", "WRHjDG", "W5BdMbNdQSoz", "W5bQWQFdOSka", "W7KBCIzB", "f0fVW7NdQq", "n8kEW7RcVmk1", "txdcRvfw", "dH7dUMXa", "b0yvD8oD", "jwfaW51I", "guNcTCowfW", "AmomyW8", "u8o8c8o7", "ig4sWQJdKq", 'WOhdTZ7dICoU', "W54pW6PMWQe", "4Bsi4BAzYzJHT5FdIG", "jbe+WR3cRq", "WQldMWVcVmkR", "W7FdJSkVduK", "zKRcH8ogpG", "W5OaW6e", "DSoYWRZcHmog", "j8k9W7JcGMS", "W4WZW4e", 'bSkSbG', "gblcUConhW", "zrigwa", "w8ozWO9M", 'W5JdOCkTDq', "W4CxW7rN", "W6RdNJNdRSoY", "8jwWNEkcHFgpSkSs4BwT4Bsy4BwF", "WQFdLmo4sHD7l23cNmojAvjk", "tMdcO0zh", "WRxdHSkItr9wW63cI8oRAebjwW", "r8oXuHrC", "W63cUJO5nG", 'W4eMhSkPW58', "y8kHW6BdKXG", 'tHddU8kH', "W6FdTWC", "h8kShSoMDW", "WQvEBSorsG", "vLz1ate", 'WOhcKaCqca', "W6SjW7rZWPW", "W4RdQYG", "mW8WqZu", "W6FdVIRdOmoH", "W7dcKmoPdW", "W4eCWQRdIXW", 'W5yDW7DJWOO', "WOGIW4awnG", 'rmoHpWOc', "W5SAW7bYWP4", "WRddR8obB8oB", "zmkcW7xdU8kK", 'qmk/W5FdNJe', "W5GlW70", "W5NdVmkMibK", "h1xdJSoCya", "W6NcLGPLWR0", "CmoGWO1Klq", "sxBcPW", 'imoxEW', "df3cRSod", "A09HWRtcQG", "W4dcV8ozgeu", "WOldIZywwa", "WQZcNuOMW4C", "WO7dRtNdNCoY", "WOD7W5dcGSkg", 'W5yWBSk4W5W', 'pmorC8kmqq', "Dtqkvxy", 'r8ovW4vUdG', 'rW7dSNv6', "DmkGW5y", "zmoKf8oYsq", "cdNdR8oEW6O", 'mMNdHCofoG', "FHmzuxW", 'WR/dG0T+W48', 'g8kShCoIiW', "qGmcw2q", "sComWPXMga", "t3hcSeXD", "stPpWQBdVa", "amkIW5JcJSkD", "W7WBW7yIWQ4", 'WOxdJxmuuq', "smoJosWa", "efZdTCoSra", "Dfj9W67dU8k0WPCFDLhdH8oxWPi", "q8oQfCoQEW", "W4VdOJddHCoR", "W5K/W4NcLq", 'WQtdKXVcRCkH', 'c8k9W6pcGwy', 'AZnoWQxdNW', "W47dTSkMmbu", 'W4GGW4RcNSkq', "W7JcKCkbhha", "s8oVvSogWQS", "amkZW7/cIa", "hI7dJKn4", "W7imW6ffWOK", "W7n2WPZdHmkG", "wCoHWQZcI8oW", 'AI9kWQRdLa', "csxdSSolW4W", "qrddSq", "F8oJWQ7cGCot"];
    _0x2b04 = function () {
      return _0x329b71;
    };
    return _0x2b04();
  }
  function _0x3b9da0(_0x26ceab, _0xf64616, _0x3bc456, _0x397051, _0x143630) {
    return _0x41bd(_0x143630 - 0x17b, _0x397051);
  }
  function _0x3e5f0f(_0x3ba4f2, _0x599750, _0x10e352, _0x434000, _0x1a407d) {
    return _0x41bd(_0x434000 + 0x3e0, _0x3ba4f2);
  }
  function _0x26ca27(_0x4b4ead, _0x37d400, _0x268b3b, _0x517f69, _0x609b03) {
    return _0x41bd(_0x268b3b + 0x101, _0x609b03);
  }
  if (config.COMMAND_TYPE === "button") {
    const _0x28044a = {
      'pattern': "removebg",
      'react': '🔮',
      'alias': ['rmbg'],
      'desc': "It remove background your replied photo.",
      'category': 'convert',
      'use': ".removebg <Reply to image>",
      'filename': __filename
    };
    cmd(_0x28044a, async (_0x3fff24, _0x1282cc, _0x4d2552, {
      from: _0x82b925,
      l: _0x456eaa,
      quoted: _0x3132b8,
      prefix: _0x212248,
      body: _0x76dc7b,
      isCmd: _0x4af2c8,
      command: _0x3dc4e6,
      args: _0x77a9c3,
      q: _0x2a9e60,
      isGroup: _0x1d2f95,
      sender: _0x4b262b,
      senderNumber: _0x58cbc2,
      botNumber2: _0x1fba51,
      botNumber: _0x38cf0a,
      pushname: _0x20b768,
      isMe: _0x363e22,
      isOwner: _0x15e2cc,
      groupMetadata: _0x5bb08a,
      groupName: _0x78caaf,
      participants: _0x4942e2,
      groupAdmins: _0x191e57,
      isBotAdmins: _0x118ed0,
      isAdmins: _0x4e9822,
      reply: _0x30e187
    }) => {
      try {
        const _0x56f7ba = _0x4d2552.quoted ? _0x4d2552.quoted.type === "viewOnceMessage" : false;
        const _0x26f3ab = _0x4d2552.quoted ? _0x4d2552.quoted.type === "imageMessage" || (_0x56f7ba ? _0x4d2552.quoted.msg.type === "imageMessage" : false) : false;
        if (_0x4d2552.type === "imageMessage" || _0x26f3ab) {
          var _0x59cbec = getRandom('');
          var _0x5de8a0 = getRandom('');
          let _0x34c78a = _0x26f3ab ? await _0x4d2552.quoted.download(_0x59cbec) : await _0x4d2552.download(_0x59cbec);
          let _0x1065a7 = await fileType.fromBuffer(_0x34c78a);
          await fs.promises.writeFile('./' + _0x1065a7.ext, _0x34c78a);
          var _0x339fd3 = new FormData();
          _0x339fd3.append("image_file", fs.createReadStream('./' + _0x1065a7.ext));
          _0x339fd3.append("size", "auto");
          var _0x4bf88e = await got.stream.post("https://api.remove.bg/v1.0/removebg", {
            'body': _0x339fd3,
            'headers': {
              'X-Api-Key': "fLYByZwbPqdyqkdKK6zcBN9H"
            }
          });
          await pipeline(_0x4bf88e, fs.createWriteStream(_0x5de8a0 + '.png'));
          let _0xf734c6 = [{
            'name': "cta_url",
            'buttonParamsJson': JSON.stringify({
              'display_text': "ғᴏʟʟᴏᴡ ᴏᴜʀ ᴄʜᴀɴɴᴇʟl",
              'url': "https://whatsapp.com/channel/│0029Va8TzeF0AgW8dVET3U1w",
              'merchant_url': "https://whatsapp.com/channel/│0029Va8TzeF0AgW8dVET3U1w"
            })
          }, {
            'name': "single_select",
            'buttonParamsJson': JSON.stringify({
              'title': "ᴛᴀᴘ ʜᴇʀᴇ",
              'sections': [{
                'rows': [{
                  'title': "ᴀs ᴀ ɪᴍᴀɢᴇ",
                  'id': _0x212248 + "rbgI " + _0x5de8a0 + ".png"
                }, {
                  'title': "ᴀs ᴀ ᴅᴏᴄᴜᴍᴇɴᴛ",
                  'id': _0x212248 + "rbgd " + _0x5de8a0 + ".png"
                }, {
                  'title': "ᴀs ᴀ sᴛɪᴄᴋᴇʀ",
                  'id': _0x212248 + "rebgs " + _0x5de8a0 + '.png'
                }]
              }]
            })
          }];
          const _0x404d6c = {
            'video': "https://api-brunosobrino-dcaf9040.koyeb.app/api/anime/lolivid",
            'header': '',
            'footer': config.FOOTER,
            'body': "POWERED BY TALKDROVE\n\n   *BACKGROUND REMOVER*\n\n"
          };
          const _0x207e83 = {
            'quoted': _0x1282cc
          };
          return await _0x3fff24.sendButtonMessage(_0x82b925, _0xf734c6, _0x4d2552, _0x404d6c, _0x207e83);
        } else {
          return await _0x30e187("*Reply to a photo !*");
        }
      } catch (_0x55aa73) {
        _0x30e187("I can't remove background on this image.");
        _0x456eaa(_0x55aa73);
      }
    });
    const _0x371ad1 = {
      'pattern': "rbgi",
      'dontAddCommandList': true,
      'filename': __filename
    };
    cmd(_0x371ad1, async (_0x53fb1a, _0x20987f, _0x3c5004, {
      from: _0x24be8d,
      l: _0x511f18,
      quoted: _0x24ebe3,
      body: _0x126cb2,
      isCmd: _0x1557d0,
      command: _0x13e5dc,
      args: _0x51b4cc,
      q: _0x251a00,
      isGroup: _0x4af46d,
      sender: _0x5af767,
      senderNumber: _0x524e02,
      botNumber2: _0x348311,
      botNumber: _0x534902,
      pushname: _0x2a01d7,
      isMe: _0x1187d5,
      isOwner: _0x27bbc2,
      groupMetadata: _0x370f4c,
      groupName: _0x19b7af,
      participants: _0x566b88,
      groupAdmins: _0x5a0442,
      isBotAdmins: _0x5354c8,
      isAdmins: _0x3d7beb,
      reply: _0x3aae7c
    }) => {
      try {
        const _0x35271c = {
          'text': '📥',
          'key': _0x20987f.key
        };
        const _0x500033 = {
          'react': _0x35271c
        };
        await _0x53fb1a.sendMessage(_0x24be8d, _0x500033);
        const _0x33ad8d = {
          'quoted': _0x20987f
        };
        await _0x53fb1a.sendMessage(_0x24be8d, {
          'image': fs.readFileSync(_0x251a00),
          'caption': config.FOOTER
        }, _0x33ad8d);
        const _0x2d2859 = {
          'text': '✔',
          'key': _0x20987f.key
        };
        const _0x272e9b = {
          'react': _0x2d2859
        };
        await _0x53fb1a.sendMessage(_0x24be8d, _0x272e9b);
      } catch (_0x37ebaa) {
        _0x3aae7c("*ERROR !!*");
        _0x511f18(_0x37ebaa);
      }
    });
    const _0x5e48d0 = {
      'pattern': "rebgs",
      'dontAddCommandList': true,
      'filename': __filename
    };
    cmd(_0x5e48d0, async (_0x151773, _0x5590c6, _0x1f1fb9, {
      from: _0x17f3c7,
      l: _0x14975d,
      quoted: _0x2a5cd5,
      body: _0x4d902f,
      isCmd: _0xb9a15b,
      command: _0x14a7a0,
      args: _0x211399,
      q: _0x2351e1,
      isGroup: _0x108760,
      sender: _0x28a474,
      senderNumber: _0x1b32ea,
      botNumber2: _0x4e57ab,
      botNumber: _0xc40b3f,
      pushname: _0x10ed12,
      isMe: _0x36f7aa,
      isOwner: _0x4eede4,
      groupMetadata: _0x2c13d4,
      groupName: _0x32ab51,
      participants: _0x1358eb,
      groupAdmins: _0x30bbb8,
      isBotAdmins: _0x5b7334,
      isAdmins: _0x1df436,
      reply: _0x3662cf
    }) => {
      try {
        const _0x58292b = {
          'text': '📥',
          'key': _0x5590c6.key
        };
        const _0x1d38fb = {
          'react': _0x58292b
        };
        await _0x151773.sendMessage(_0x17f3c7, _0x1d38fb);
        let _0x51ee1c = new Sticker(_0x2351e1, {
          'pack': _0x10ed12,
          'author': '',
          'type': _0x2351e1.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
          'categories': ['🤩', '🎉'],
          'id': "12345",
          'quality': 0x4b,
          'background': "transparent"
        });
        const _0xcef58f = await _0x51ee1c.toBuffer();
        const _0x144fae = {
          'sticker': _0xcef58f
        };
        const _0x26a9e6 = {
          'quoted': _0x5590c6
        };
        await _0x151773.sendMessage(_0x17f3c7, _0x144fae, _0x26a9e6);
        const _0x491eb0 = {
          'text': '✔',
          'key': _0x5590c6.key
        };
        const _0x57b426 = {
          'react': _0x491eb0
        };
        await _0x151773.sendMessage(_0x17f3c7, _0x57b426);
      } catch (_0x4b0574) {
        _0x3662cf("*ERROR !!*");
        _0x14975d(_0x4b0574);
      }
    });
    const _0x39b347 = {
      'pattern': "rbgd",
      'dontAddCommandList': true,
      'filename': __filename
    };
    cmd(_0x39b347, async (_0x211c29, _0x4a7e97, _0x330d1b, {
      from: _0x819517,
      l: _0x44fdd1,
      quoted: _0x2ab274,
      body: _0x2c849d,
      isCmd: _0x2507d3,
      command: _0x29850e,
      args: _0x2c22d3,
      q: _0x16a637,
      isGroup: _0x5cac27,
      sender: _0x1999d7,
      senderNumber: _0x50be09,
      botNumber2: _0x481b5d,
      botNumber: _0x3533e5,
      pushname: _0x540d53,
      isMe: _0x206ede,
      isOwner: _0x5dca06,
      groupMetadata: _0x618448,
      groupName: _0x3c419f,
      participants: _0x26657c,
      groupAdmins: _0x2009fa,
      isBotAdmins: _0x560428,
      isAdmins: _0xb60cf2,
      reply: _0x5e1722
    }) => {
      try {
        const _0x25b6ad = {
          'text': '📥',
          'key': _0x4a7e97.key
        };
        const _0x2fc7e5 = {
          'react': _0x25b6ad
        };
        await _0x211c29.sendMessage(_0x819517, _0x2fc7e5);
        const _0xf5993a = {
          'quoted': _0x4a7e97
        };
        await _0x211c29.sendMessage(_0x819517, {
          'document': fs.readFileSync(_0x16a637),
          'mimetype': "image/x-png",
          'fileName': "Removebg.png",
          'caption': wm
        }, _0xf5993a);
        const _0x45809f = {
          'text': '✔',
          'key': _0x4a7e97.key
        };
        const _0x3e5ef0 = {
          'react': _0x45809f
        };
        await _0x211c29.sendMessage(_0x819517, _0x3e5ef0);
      } catch (_0xbca2bb) {
        _0x5e1722("*ERROR !!*");
        _0x44fdd1(_0xbca2bb);
      }
    });
  }