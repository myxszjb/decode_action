//Tue Jul 02 2024 17:21:40 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function (_0x12e704, _0x45840f) {
  _0x12e704.update = "9023年88月97日25:34:29更新";
  _0x45840f.info = "本站历时看见了回家看看结果就难度更高。";
  _0x45840f.feedback = "由于刚刚上线，有问题积客户给客户6";
  _0x45840f.tips = "如遇不兼容，请先暂时用v6加密，并反馈给我们。";
});
const _0x1f458e = new _0x424873("阅光宝盒"),
  _0x1145f2 = 1;
let _0x25fafd = "";
const _0x318c0a = 1,
  _0x4f386a = process.env.phoneV,
  _0x37d536 = "Mozilla/5.0 (Linux; Android 11; Redmi Note 10 Pro Build/RP1A.201005.004; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.159 Mobile Safari/537.36",
  _0x4992ff = "103",
  _0x343675 = require("crypto-js"),
  _0x478ba3 = require("base-64"),
  _0x59b25b = require("request");
function _0x1bc353(_0x25549e, _0x120f1c = "".split("").reverse().join("")) {
  const _0x58f4c3 = _0x343675.enc.Utf8.parse("gnirtS--setyB-61".split("").reverse().join(""));
  _0x120f1c = _0x343675.enc.Utf8.parse(_0x120f1c);
  let _0x476fb5 = JSON.stringify(_0x25549e),
    _0x4ed4c3 = _0x343675.enc.Utf8.parse(_0x476fb5),
    _0x3f2709 = _0x343675.AES.encrypt(_0x4ed4c3, _0x120f1c, {
      "iv": _0x58f4c3,
      "mode": _0x343675.mode.CBC,
      "padding": _0x343675.pad.Pkcs7
    }).ciphertext.toString();
  return _0x478ba3.encode(_0x3f2709);
}
const _0x26d9c6 = Object.assign,
  _0xfa05fc = {
    "data": {
      "phone": _0x4f386a
    }
  },
  _0x4d9b4d = _0x1bc353(_0x26d9c6({}, _0xfa05fc.data, {
    "timestamp": new Date().toISOString().slice(0, 19).replace(/[-:T]/g, "").substring(0, 14)
  }), "woreadst^&*12345"),
  _0x217573 = JSON.stringify({
    "sign": _0x4d9b4d
  }),
  _0x228c9d = {
    "method": "POST",
    "url": "https://10010.woread.com.cn/ng_woread_service/rest/account/login",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Linux; Android 12; Redmi K30 Pro Build/SKQ1.220213.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/123.0.6312.118 Mobile Safari/537.36; unicom{version:android@11.0501,desmobile:0};devicetype{deviceBrand:Xiaomi,deviceModel:Redmi K30 Pro}",
      "Accept": "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br, zstd",
      "Pragma": "no-cache",
      "Cache-Control": "no-cache",
      "sec-ch-ua": "\"Android WebView\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
      "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw",
      "Content-Type": "application/json;charset=UTF-8",
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-platform": "\"Android\"",
      "Origin": "https://10010.woread.com.cn",
      "X-Requested-With": "com.sinovatech.unicom.ui",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://10010.woread.com.cn/ng_woread/",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    },
    "body": _0x217573
  };
_0x59b25b(_0x228c9d, function (_0x3c13b2, _0x43a2d2, _0x4642c2) {
  if (_0x3c13b2) throw new Error(_0x3c13b2);
  _0x24be97(_0x4642c2);
});
function _0x24be97(_0x626617) {
  _0x626617 = JSON.parse(_0x626617);
  const _0x41f883 = _0x626617.data.token,
    _0x9b0c5 = _0x626617.data.userid,
    _0x49b170 = _0x626617.data.userindex,
    _0x304692 = _0x626617.data.phone,
    _0x72cea8 = _0x626617.data.verifycode,
    _0x2c37a8 = Object.assign,
    _0x5f2adb = {
      "datav": {
        "activeId": 16,
        "taskId": _0x4992ff
      }
    },
    _0x47c6d8 = _0x1bc353(_0x2c37a8({}, _0x5f2adb.datav, {
      "timestamp": new Date().toISOString().slice(0, 19).replace(/[-:T]/g, "").substring(0, 14),
      "token": _0x41f883,
      "userAccount": _0x304692,
      "userId": _0x9b0c5,
      "userIndex": _0x49b170,
      "verifyCode": _0x72cea8
    }), "woreadst^&*12345");
  _0x153569(_0x47c6d8);
}
function _0x153569(_0x330bc6) {
  const _0x17c48b = JSON.stringify({
      "sign": _0x330bc6
    }),
    _0xb2b81e = {
      "method": "POST",
      "url": "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask",
      "headers": {
        "User-Agent": _0x37d536,
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache",
        "sec-ch-ua": "\"Android WebView\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw",
        "Content-Type": "application/json;charset=UTF-8",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"Android\"",
        "Origin": "https://10010.woread.com.cn",
        "X-Requested-With": "com.sinovatech.unicom.ui",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://10010.woread.com.cn/ng_woread/",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
      },
      "body": _0x17c48b
    };
  _0x59b25b(_0xb2b81e, function (_0x2a196e, _0x2ed5dd, _0xfe2566) {
    if (_0x2a196e) throw new Error(_0x2a196e);
    let _0x3d48fc = JSON.parse(_0xfe2566);
    value = _0x3d48fc.message;
    value1 = _0x3d48fc.data;
    console.log(value);
    console.log(value1);
    _0x25fafd += value + "\n";
    _0x25fafd += "当前任务阅读240分钟得0.3元话费红包。结果：" + value1 + "\n";
    _0x2a6c65(_0x25fafd);
  });
}
function _0x2a6c65(_0x487fd6) {
  if (!_0x487fd6 || _0x318c0a === 0) return;
  if (_0x1145f2 > 0) {
    if (_0x1f458e.isNode()) {
      const _0x19156c = require("../sendNotify");
      _0x19156c.sendNotify(_0x1f458e.name, _0x487fd6);
    } else {
      _0x1f458e.msg(_0x487fd6);
    }
  } else {
    console.log(_0x487fd6);
  }
}
function _0x424873(_0x2f6abe, _0x5ef58e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x5b16a4 {
    constructor(_0x4e2ab1) {
      this.env = _0x4e2ab1;
    }
    ["send"](_0x5dafc0, _0x5e6b30 = "GET") {
      _0x5dafc0 = "string" == typeof _0x5dafc0 ? {
        "url": _0x5dafc0
      } : _0x5dafc0;
      let _0xe9115d = this.get;
      return "POST" === _0x5e6b30 && (_0xe9115d = this.post), new Promise((_0x50963d, _0x44e393) => {
        _0xe9115d.call(this, _0x5dafc0, (_0x4d7a35, _0xb736a1, _0x36ba45) => {
          _0x4d7a35 ? _0x44e393(_0x4d7a35) : _0x50963d(_0xb736a1);
        });
      });
    }
    ["get"](_0x6d1d12) {
      return this.send.call(this.env, _0x6d1d12);
    }
    ["post"](_0x16612d) {
      return this.send.call(this.env, _0x16612d, "POST");
    }
  }
  return new class {
    constructor(_0x41972d, _0x48579f) {
      this.name = _0x41972d;
      this.http = new _0x5b16a4(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x48579f);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x57ac53, _0x49d57c = null) {
      try {
        return JSON.parse(_0x57ac53);
      } catch {
        return _0x49d57c;
      }
    }
    ["toStr"](_0x1cc308, _0x4fccfc = null) {
      try {
        return JSON.stringify(_0x1cc308);
      } catch {
        return _0x4fccfc;
      }
    }
    ["getjson"](_0xb554d4, _0x1eb475) {
      let _0x26a0ac = _0x1eb475;
      const _0x4c33ce = this.getdata(_0xb554d4);
      if (_0x4c33ce) try {
        _0x26a0ac = JSON.parse(this.getdata(_0xb554d4));
      } catch {}
      return _0x26a0ac;
    }
    ["setjson"](_0x12b94f, _0x3f73b9) {
      try {
        return this.setdata(JSON.stringify(_0x12b94f), _0x3f73b9);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x58141c) {
      return new Promise(_0x47c74f => {
        this.get({
          "url": _0x58141c
        }, (_0x43f95a, _0x22c3b6, _0x1fd2b1) => _0x47c74f(_0x1fd2b1));
      });
    }
    ["runScript"](_0x8c467e, _0x25fb1b) {
      return new Promise(_0x5e4e5b => {
        let _0x5874af = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x5874af = _0x5874af ? _0x5874af.replace(/\n/g, "").trim() : _0x5874af;
        let _0x5bf24a = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x5bf24a = _0x5bf24a ? 1 * _0x5bf24a : 20;
        _0x5bf24a = _0x25fb1b && _0x25fb1b.timeout ? _0x25fb1b.timeout : _0x5bf24a;
        const [_0x481985, _0x39eda9] = _0x5874af.split("@"),
          _0x27549d = {
            "url": "http://" + _0x39eda9 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x8c467e,
              "mock_type": "cron",
              "timeout": _0x5bf24a
            },
            "headers": {
              "X-Key": _0x481985,
              "Accept": "*/*"
            }
          };
        this.post(_0x27549d, (_0x583ebd, _0x47f0e1, _0x21b0c9) => _0x5e4e5b(_0x21b0c9));
      }).catch(_0x170a43 => this.logErr(_0x170a43));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x2f94dd = this.path.resolve(this.dataFile),
          _0x4991ed = this.path.resolve(process.cwd(), this.dataFile),
          _0x3caa6a = this.fs.existsSync(_0x2f94dd),
          _0x1b0bf1 = !_0x3caa6a && this.fs.existsSync(_0x4991ed);
        if (!_0x3caa6a && !_0x1b0bf1) return {};
        {
          const _0x59b8c4 = _0x3caa6a ? _0x2f94dd : _0x4991ed;
          try {
            return JSON.parse(this.fs.readFileSync(_0x59b8c4));
          } catch (_0x5afa17) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x5a33d0 = this.path.resolve(this.dataFile),
          _0x4764eb = this.path.resolve(process.cwd(), this.dataFile),
          _0x276b64 = this.fs.existsSync(_0x5a33d0),
          _0xbb3e5d = !_0x276b64 && this.fs.existsSync(_0x4764eb),
          _0x1cdbbc = JSON.stringify(this.data);
        _0x276b64 ? this.fs.writeFileSync(_0x5a33d0, _0x1cdbbc) : _0xbb3e5d ? this.fs.writeFileSync(_0x4764eb, _0x1cdbbc) : this.fs.writeFileSync(_0x5a33d0, _0x1cdbbc);
      }
    }
    ["lodash_get"](_0x2f8a61, _0x47a69f, _0x32525f) {
      const _0x44dfa3 = _0x47a69f.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x349434 = _0x2f8a61;
      for (const _0x5f48f8 of _0x44dfa3) if (_0x349434 = Object(_0x349434)[_0x5f48f8], void 0 === _0x349434) return _0x32525f;
      return _0x349434;
    }
    ["lodash_set"](_0x3c0b60, _0x20f548, _0x1e472c) {
      return Object(_0x3c0b60) !== _0x3c0b60 ? _0x3c0b60 : (Array.isArray(_0x20f548) || (_0x20f548 = _0x20f548.toString().match(/[^.[\]]+/g) || []), _0x20f548.slice(0, -1).reduce((_0x9141cb, _0xae697d, _0x37492c) => Object(_0x9141cb[_0xae697d]) === _0x9141cb[_0xae697d] ? _0x9141cb[_0xae697d] : _0x9141cb[_0xae697d] = Math.abs(_0x20f548[_0x37492c + 1]) >> 0 == +_0x20f548[_0x37492c + 1] ? [] : {}, _0x3c0b60)[_0x20f548[_0x20f548.length - 1]] = _0x1e472c, _0x3c0b60);
    }
    ["getdata"](_0x87a30f) {
      let _0x54d79b = this.getval(_0x87a30f);
      if (/^@/.test(_0x87a30f)) {
        const [, _0x410dd4, _0xa3526] = /^@(.*?)\.(.*?)$/.exec(_0x87a30f),
          _0x13411d = _0x410dd4 ? this.getval(_0x410dd4) : "";
        if (_0x13411d) try {
          const _0x189098 = JSON.parse(_0x13411d);
          _0x54d79b = _0x189098 ? this.lodash_get(_0x189098, _0xa3526, "") : _0x54d79b;
        } catch (_0x1ea4ef) {
          _0x54d79b = "";
        }
      }
      return _0x54d79b;
    }
    ["setdata"](_0x30383e, _0x2a1b33) {
      let _0x401141 = false;
      if (/^@/.test(_0x2a1b33)) {
        const [, _0x5b52cf, _0x250d25] = /^@(.*?)\.(.*?)$/.exec(_0x2a1b33),
          _0x35cd71 = this.getval(_0x5b52cf),
          _0x18e220 = _0x5b52cf ? "null" === _0x35cd71 ? null : _0x35cd71 || "{}" : "{}";
        try {
          const _0x2d38d7 = JSON.parse(_0x18e220);
          this.lodash_set(_0x2d38d7, _0x250d25, _0x30383e);
          _0x401141 = this.setval(JSON.stringify(_0x2d38d7), _0x5b52cf);
        } catch (_0x532b49) {
          const _0xc46c0 = {};
          this.lodash_set(_0xc46c0, _0x250d25, _0x30383e);
          _0x401141 = this.setval(JSON.stringify(_0xc46c0), _0x5b52cf);
        }
      } else _0x401141 = this.setval(_0x30383e, _0x2a1b33);
      return _0x401141;
    }
    ["getval"](_0x468ffb) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x468ffb) : this.isQuanX() ? $prefs.valueForKey(_0x468ffb) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x468ffb]) : this.data && this.data[_0x468ffb] || null;
    }
    ["setval"](_0x2aa291, _0x460e63) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x2aa291, _0x460e63) : this.isQuanX() ? $prefs.setValueForKey(_0x2aa291, _0x460e63) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x460e63] = _0x2aa291, this.writedata(), !0) : this.data && this.data[_0x460e63] || null;
    }
    ["initGotEnv"](_0x2925fe) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x2925fe && (_0x2925fe.headers = _0x2925fe.headers ? _0x2925fe.headers : {}, void 0 === _0x2925fe.headers.Cookie && void 0 === _0x2925fe.cookieJar && (_0x2925fe.cookieJar = this.ckjar));
    }
    ["get"](_0x3d833e, _0x1d393e = () => {}) {
      _0x3d833e.headers && (delete _0x3d833e.headers["Content-Type"], delete _0x3d833e.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x3d833e.headers = _0x3d833e.headers || {}, Object.assign(_0x3d833e.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x3d833e, (_0xe868a0, _0x15f978, _0x426f6c) => {
        !_0xe868a0 && _0x15f978 && (_0x15f978.body = _0x426f6c, _0x15f978.statusCode = _0x15f978.status);
        _0x1d393e(_0xe868a0, _0x15f978, _0x426f6c);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x3d833e.opts = _0x3d833e.opts || {}, Object.assign(_0x3d833e.opts, {
        "hints": !1
      })), $task.fetch(_0x3d833e).then(_0x2f838b => {
        const {
          statusCode: _0x20abda,
          statusCode: _0x4942de,
          headers: _0x28fdad,
          body: _0x914587
        } = _0x2f838b;
        _0x1d393e(null, {
          "status": _0x20abda,
          "statusCode": _0x4942de,
          "headers": _0x28fdad,
          "body": _0x914587
        }, _0x914587);
      }, _0x560cc8 => _0x1d393e(_0x560cc8))) : this.isNode() && (this.initGotEnv(_0x3d833e), this.got(_0x3d833e).on("redirect", (_0x2f7d17, _0x3d1119) => {
        try {
          if (_0x2f7d17.headers["set-cookie"]) {
            const _0x301047 = _0x2f7d17.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x301047 && this.ckjar.setCookieSync(_0x301047, null);
            _0x3d1119.cookieJar = this.ckjar;
          }
        } catch (_0x1326f9) {
          this.logErr(_0x1326f9);
        }
      }).then(_0x34b662 => {
        const {
          statusCode: _0x292962,
          statusCode: _0x1208a7,
          headers: _0x1511e4,
          body: _0x513711
        } = _0x34b662;
        _0x1d393e(null, {
          "status": _0x292962,
          "statusCode": _0x1208a7,
          "headers": _0x1511e4,
          "body": _0x513711
        }, _0x513711);
      }, _0x540646 => {
        const {
          message: _0x3ec1aa,
          response: _0x47dad1
        } = _0x540646;
        _0x1d393e(_0x3ec1aa, _0x47dad1, _0x47dad1 && _0x47dad1.body);
      }));
    }
    ["post"](_0x52948b, _0x211807 = () => {}) {
      if (_0x52948b.body && _0x52948b.headers && !_0x52948b.headers["Content-Type"] && (_0x52948b.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x52948b.headers && delete _0x52948b.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x52948b.headers = _0x52948b.headers || {}, Object.assign(_0x52948b.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x52948b, (_0x5b138a, _0x450750, _0x3c8e90) => {
        !_0x5b138a && _0x450750 && (_0x450750.body = _0x3c8e90, _0x450750.statusCode = _0x450750.status);
        _0x211807(_0x5b138a, _0x450750, _0x3c8e90);
      });else {
        if (this.isQuanX()) _0x52948b.method = "POST", this.isNeedRewrite && (_0x52948b.opts = _0x52948b.opts || {}, Object.assign(_0x52948b.opts, {
          "hints": !1
        })), $task.fetch(_0x52948b).then(_0x276f2b => {
          const {
            statusCode: _0x55335d,
            statusCode: _0x3766ed,
            headers: _0x486ff6,
            body: _0x4919b7
          } = _0x276f2b;
          _0x211807(null, {
            "status": _0x55335d,
            "statusCode": _0x3766ed,
            "headers": _0x486ff6,
            "body": _0x4919b7
          }, _0x4919b7);
        }, _0x386b5b => _0x211807(_0x386b5b));else {
          if (this.isNode()) {
            this.initGotEnv(_0x52948b);
            const {
              url: _0x3195e9,
              ..._0x14e6d2
            } = _0x52948b;
            this.got.post(_0x3195e9, _0x14e6d2).then(_0x4cee71 => {
              const {
                statusCode: _0x265e4d,
                statusCode: _0xddc2e6,
                headers: _0xf2b9bc,
                body: _0x35b577
              } = _0x4cee71;
              _0x211807(null, {
                "status": _0x265e4d,
                "statusCode": _0xddc2e6,
                "headers": _0xf2b9bc,
                "body": _0x35b577
              }, _0x35b577);
            }, _0x59a931 => {
              const {
                message: _0x2eba75,
                response: _0x399308
              } = _0x59a931;
              _0x211807(_0x2eba75, _0x399308, _0x399308 && _0x399308.body);
            });
          }
        }
      }
    }
    ["time"](_0x46eea5, _0x51cad8 = null) {
      const _0x1be6de = _0x51cad8 ? new Date(_0x51cad8) : new Date();
      let _0x339865 = {
        "M+": _0x1be6de.getMonth() + 1,
        "d+": _0x1be6de.getDate(),
        "H+": _0x1be6de.getHours(),
        "m+": _0x1be6de.getMinutes(),
        "s+": _0x1be6de.getSeconds(),
        "q+": Math.floor((_0x1be6de.getMonth() + 3) / 3),
        "S": _0x1be6de.getMilliseconds()
      };
      /(y+)/.test(_0x46eea5) && (_0x46eea5 = _0x46eea5.replace(RegExp.$1, (_0x1be6de.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3d7693 in _0x339865) new RegExp("(" + _0x3d7693 + ")").test(_0x46eea5) && (_0x46eea5 = _0x46eea5.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x339865[_0x3d7693] : ("00" + _0x339865[_0x3d7693]).substr(("" + _0x339865[_0x3d7693]).length)));
      return _0x46eea5;
    }
    ["msg"](_0x3c7235 = _0x2f6abe, _0x59a8f6 = "", _0xe4bbb3 = "", _0x176189) {
      const _0x36f52c = _0x3c225a => {
        if (!_0x3c225a) return _0x3c225a;
        if ("string" == typeof _0x3c225a) return this.isLoon() ? _0x3c225a : this.isQuanX() ? {
          "open-url": _0x3c225a
        } : this.isSurge() ? {
          "url": _0x3c225a
        } : void 0;
        if ("object" == typeof _0x3c225a) {
          if (this.isLoon()) {
            let _0x3c3d47 = _0x3c225a.openUrl || _0x3c225a.url || _0x3c225a["open-url"],
              _0x2c8d5a = _0x3c225a.mediaUrl || _0x3c225a["media-url"];
            return {
              "openUrl": _0x3c3d47,
              "mediaUrl": _0x2c8d5a
            };
          }
          if (this.isQuanX()) {
            let _0x1d2a27 = _0x3c225a["open-url"] || _0x3c225a.url || _0x3c225a.openUrl,
              _0x516b43 = _0x3c225a["media-url"] || _0x3c225a.mediaUrl;
            return {
              "open-url": _0x1d2a27,
              "media-url": _0x516b43
            };
          }
          if (this.isSurge()) {
            let _0x50cde0 = _0x3c225a.url || _0x3c225a.openUrl || _0x3c225a["open-url"];
            return {
              "url": _0x50cde0
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x3c7235, _0x59a8f6, _0xe4bbb3, _0x36f52c(_0x176189)) : this.isQuanX() && $notify(_0x3c7235, _0x59a8f6, _0xe4bbb3, _0x36f52c(_0x176189))), !this.isMuteLog) {
        let _0x5330bd = ["", "==============📣系统通知📣=============="];
        _0x5330bd.push(_0x3c7235);
        _0x59a8f6 && _0x5330bd.push(_0x59a8f6);
        _0xe4bbb3 && _0x5330bd.push(_0xe4bbb3);
        console.log(_0x5330bd.join("\n"));
        this.logs = this.logs.concat(_0x5330bd);
      }
    }
    ["log"](..._0x3e73cf) {
      _0x3e73cf.length > 0 && (this.logs = [...this.logs, ..._0x3e73cf]);
      console.log(_0x3e73cf.join(this.logSeparator));
    }
    ["logErr"](_0x53c193, _0x542c71) {
      const _0x52f911 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x52f911 ? this.log("", "❗️" + this.name + ", 错误!", _0x53c193.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x53c193);
    }
    ["wait"](_0x396980) {
      return new Promise(_0x4d9dac => setTimeout(_0x4d9dac, _0x396980));
    }
    ["done"](_0x23567d = {}) {
      const _0x1feb78 = new Date().getTime(),
        _0x1d7575 = (_0x1feb78 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x1d7575 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x23567d);
    }
  }(_0x2f6abe, _0x5ef58e);
}