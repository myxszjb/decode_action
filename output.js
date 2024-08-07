//Wed Aug 07 2024 10:23:40 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x19b0e1 = process.env.mxAccessToken,
  _0x28ac74 = process.env.mxround,
  _0x17a4cd = process.env.secretword,
  _0x3bcc24 = process.env.marketingId,
  _0xf24641 = require("axios"),
  _0x21f5fe = require("crypto"),
  _0x351506 = Date.now(),
  _0x21046a = 2,
  _0x2ebf23 = "c274bac6493544b89d9c4f9d8d542b84";
function _0x3053b9() {
  return _0x21f5fe.createHash("md5");
}
var _0x45b830 = function (_0x4dcbce) {
  return function (_0x3d9495) {
    const _0x4c8c70 = new _0x3053b9().update(_0x3d9495);
    return _0x4c8c70[_0x4dcbce]("hex");
  };
};
const _0x26c58c = _0x45b830("digest");
async function _0x258307(_0x20683f) {
  const _0x27c534 = _0x20683f.split("@");
  if (_0x27c534.length > 3) {
    console.log("检测到token数组大于3停止运行");
    process.exit(0);
  }
  const _0x16cd0f = _0x27c534.map(async _0x348a4c => {
    try {
      const _0x2e5230 = "marketingId=" + _0x3bcc24 + "&round=" + _0x28ac74 + "&s=" + _0x21046a + "&secretword=" + _0x17a4cd + "&stamp=" + _0x351506 + _0x2ebf23,
        _0x2e7649 = _0x26c58c(_0x2e5230);
      console.log("stamp", _0x351506);
      let _0x1b69a5 = JSON.stringify({
          "marketingId": _0x3bcc24,
          "round": _0x28ac74,
          "secretword": "170万杯茉莉奶绿免费喝",
          "sign": _0x2e7649,
          "s": 2,
          "stamp": _0x351506
        }),
        _0x448822 = {
          "method": "POST",
          "url": "https://mxsa.mxbc.net/api/v1/h5/marketing/secretword/confirm",
          "headers": {
            "User-Agent": "Mozilla/5.0 (Linux; Android 9; MI 8 Build/PQ3A.190801.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 KugouBrowser/6.2 TBS/046010 Mobile Safari/537.36 GDTTangramMobSDK/8.455.2731 GDTMobSDK/8.455.2731",
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Android WebView\";v=\"126\"",
            "Content-Type": "application/json;charset=UTF-8",
            "sec-ch-ua-mobile": "?1",
            "Access-Token": _0x348a4c,
            "sec-ch-ua-platform": "\"Android\"",
            "Origin": "https://mxsa-h5.mxbc.net",
            "X-Requested-With": "com.tencent.mm",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://mxsa-h5.mxbc.net/",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
          },
          "data": _0x1b69a5
        };
      const _0x357a93 = await _0xf24641(_0x448822);
      if (_0x357a93.status != 200) {
        console.log(phoneV + ":请求失败");
        return;
      }
      console.log(_0x357a93.data.msg);
    } catch (_0x3eec8d) {
      console.error(_0x3eec8d);
    }
  });
  await Promise.all(_0x16cd0f);
}
_0x258307(_0x19b0e1);