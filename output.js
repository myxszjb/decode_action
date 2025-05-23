//Fri May 23 2025 14:04:54 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env('整点抽');
var ueyyKID = Object['defineProperty'],
  Wj6frz,
  iGjLQj,
  qug6zSM,
  ojZ2dE,
  EdGx6MU,
  BHIikz,
  X82KKo,
  vACefm;
function RP8VdfO() {
  return globalThis;
}
function zuGsmv3() {
  return global;
}
function uA9RgT8() {
  return window;
}
function YetJQm() {
  return new Function('\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73')();
}
function PVo6VQ(ueyyKID = [RP8VdfO, zuGsmv3, uA9RgT8, YetJQm], Kp8uA5M, UBbTOJG = [], yABG1Ax, Wj6frz) {
  Kp8uA5M = Kp8uA5M;
  try {
    Kp8uA5M = Object;
    UBbTOJG.push(''.__proto__.constructor.name);
  } catch (e) {}
  pPy1Qd9: for (yABG1Ax = 0; yABG1Ax < ueyyKID["length"]; yABG1Ax++) try {
    Kp8uA5M = ueyyKID[yABG1Ax]();
    for (Wj6frz = 0x0; Wj6frz < UBbTOJG.length; Wj6frz++) if (typeof Kp8uA5M[UBbTOJG[Wj6frz]] === 'undefined') {
      continue pPy1Qd9;
    }
    return Kp8uA5M;
  } catch (e) {}
  return Kp8uA5M || this;
}
Wj6frz = PVo6VQ() || {};
iGjLQj = Wj6frz.TextDecoder;
qug6zSM = Wj6frz.Uint8Array;
ojZ2dE = Wj6frz.Buffer;
EdGx6MU = Wj6frz["String"] || String;
BHIikz = Wj6frz.Array || Array;
function kGXgWLc(...ueyyKID) {
  return ueyyKID[ueyyKID["length"] - 0x1];
}
function p7M42q(_oBEGGq, ueyyKID) {
  switch (vACefm) {
    case 26:
      return _oBEGGq + ueyyKID;
    case 33:
      return !_oBEGGq;
    case -47:
      return _oBEGGq / ueyyKID;
    case 0xd:
      return _oBEGGq - ueyyKID;
    case 46:
      return _oBEGGq * ueyyKID;
  }
}
function Zgy6Sn(_oBEGGq) {
  return kGXgWLc(_oBEGGq = vACefm + (vACefm = _oBEGGq, 0), _oBEGGq);
}
vACefm = vACefm;
const vc01RZU = require('./jdCookie'),
  LPVGSP0 = require('./utils/Rebels_sendJDNotify'),
  BWWUfXa = require('./utils/Rebels_jdCommon'),
  {
    ["H5st"]: bFLchu
  } = require('./utils/Rebels_H');
let F4Cl23 = null,
  lDUFPmh = null;
const sMOzNj = new Date()["getHours"](),
  IkiT1Tw = new Date()["getMinutes"](),
  Xd1Liq = p7M42q(sMOzNj, IkiT1Tw / 0x3c, vACefm = 0x1a);
let CFxGgvZ = false,
  Gw2cQa = false,
  KQ2lanV = process["env"]["jd_daycj_threads"] || '\u0031';
const uWtMv3t = process["env"]["jd_daycj_interval"] || "2000",
  DwNNNM = (process["env"]["jd_daycj_notify"] || process["env"]["jd_daycj_Notify"]) === "true",
  gaNEcbd = (process["env"]["jd_daycj_pinFilter"] || '')["split"]('\x40'),
  n1AAxsr = process["env"]["jd_daycj_prizeNotify"] === "true",
  Dq6gUI = 5;
let w2sBrnx = Object["keys"](vc01RZU)["map"](_oBEGGq => vc01RZU[_oBEGGq])["filter"](_oBEGGq => _oBEGGq);
if (p7M42q(w2sBrnx[0x0], Zgy6Sn(0x21))) {
  $["msg"]($["name"], "【提示】请先获取Cookie");
  process["exit"](1);
}
p7M42q((async () => {
  if (kGXgWLc(LPVGSP0["config"]({
    ["title"]: $["name"]
  }), await K9XyCd(), DwNNNM && LPVGSP0["getMessage"]())) {
    await LPVGSP0["push"]();
  }
})()["catch"](_oBEGGq => $["logErr"](_oBEGGq))["finally"](() => {
  return $["done"]();
}), Zgy6Sn(33));
async function K9XyCd() {
  try {
    try {
      const EdGx6MU = parseInt(KQ2lanV);
      if (EdGx6MU > 0 && EdGx6MU !== 0x1) {
        KQ2lanV = EdGx6MU;
      }
    } catch {
      KQ2lanV = 0x1;
    }
    if (kGXgWLc(KQ2lanV = Math["min"](KQ2lanV, Dq6gUI), $["waitTime"] = null, uWtMv3t)) {
      try {
        const BHIikz = parseInt(uWtMv3t);
        if (BHIikz >= 0x0) {
          $["waitTime"] = BHIikz;
        }
      } catch {
        var X82KKo = ["⚠ 自定义运行间隔时长设置错误"];
        console["log"](X82KKo[0x0]);
      }
    }
    const r6Uyy8 = kGXgWLc($["needRemoveCookieIndex"] = [], console["log"](`==========${$["name"]}变量开启状态==========`), console["log"](`间隔时长: [${p7M42q($["waitTime"], 0x3e8, vACefm = -0x2f)}秒]运行间隔时长`), console["log"](`代理开关: [${BWWUfXa["getProxyStatus"]()}]`), console["log"](`通知推送: [${DwNNNM ? '开启' : '关闭'}]`), console["log"](`账号过滤: [${gaNEcbd["join"]('\u002c\u0020')}]`), console["log"](`==========${$["name"]}变量状态结束==========`), console["log"](''), `jd_${BWWUfXa["genRandomString"](13, "0123456789abcdefghijklmnopqrstuvwxyz")}`),
      {
        ["token"]: tI2NPTO,
        ["actKey"]: YOXQbU
      } = kGXgWLc($.UA = BWWUfXa["genUA"](r6Uyy8), await WQfBjd("https://prodev.m.jd.com/mall/active/VAjs3vpayA513UwxL5XC4eGBXqY/index.html"));
    if (kGXgWLc(F4Cl23 = tI2NPTO, lDUFPmh = YOXQbU, console["log"](`获取到的token: ${F4Cl23}`), console["log"](`获取到的actKey: ${lDUFPmh}`), p7M42q(F4Cl23, vACefm = 0x21) && p7M42q(lDUFPmh, vACefm = 33))) {
      return kGXgWLc(console["log"]("获取token和actKey失败，请检查网络"), undefined);
    }
    if (kGXgWLc(await BWWUfXa["concTask"](KQ2lanV, w2sBrnx, Bor_BB5), $["runEnd"] = false, $["needRemoveCookieIndex"]["length"]) > 0x0) {
      w2sBrnx = w2sBrnx["filter"]((ueyyKID, UBbTOJG) => {
        return p7M42q($["needRemoveCookieIndex"]["includes"](p7M42q(UBbTOJG, 1, Zgy6Sn(0x1a))), Zgy6Sn(0x21));
      });
      $["needRemoveCookieIndex"] = [];
    }
    const zuGsmv3 = LPVGSP0["getMessage"]();
    if (zuGsmv3) {
      var uA9RgT8 = {
        OxsFkT: " ➜ "
      };
      console["log"](`\n📣 运行结果\n${zuGsmv3["replace"](/：/g, uA9RgT8.OxsFkT)}`);
    }
  } catch (e) {
    console["log"](`❌ 脚本运行遇到了错误\n${e}`);
  }
}
async function Bor_BB5(ueyyKID, UBbTOJG) {
  if ($["runEnd"]) {
    return {
      ["runEnd"]: true
    };
  }
  const BHIikz = decodeURIComponent(BWWUfXa["getCookieValue"](ueyyKID, "pt_pin")),
    X82KKo = `【账号${UBbTOJG}】${BWWUfXa["dataMasking"](BHIikz, {
      ["printWidth"]: 6
    })}：`,
    zKA_Dxl = LPVGSP0["create"](UBbTOJG, BHIikz);
  if (gaNEcbd["length"] > 0 && (gaNEcbd["includes"](BHIikz) || gaNEcbd["includes"](encodeURIComponent(BHIikz)))) {
    return kGXgWLc(zKA_Dxl["fix"]("已设置跳过运行当前账号"), console["log"](zKA_Dxl["getInlineContent"]()), $["needRemoveCookieIndex"]["push"](UBbTOJG), undefined);
  }
  const YOXQbU = await BWWUfXa["getLoginStatus"](ueyyKID);
  if (p7M42q(YOXQbU, Zgy6Sn(0x21)) && typeof YOXQbU === "boolean") {
    return kGXgWLc(console["log"](`${X82KKo}账号无效`), zKA_Dxl["fix"]("账号无效"), $["needRemoveCookieIndex"]["push"](UBbTOJG), undefined);
  }
  const RP8VdfO = BWWUfXa["genUA"](BHIikz);
  let zuGsmv3, uA9RgT8;
  if (kGXgWLc(await FS0By7("comp_data_load"), zuGsmv3)) {
    if (zuGsmv3["rewardProgressItems"] && zuGsmv3["rewardProgressItems"]["length"] > 0) {
      const YetJQm = zuGsmv3["rewardProgressItems"][0x0];
      if (YetJQm) {
        if (p7M42q(Gw2cQa, Zgy6Sn(33))) {
          if (zuGsmv3["actBasicInfo"]) {
            const sMOzNj = zuGsmv3["actBasicInfo"]["name"],
              IkiT1Tw = zuGsmv3["actBasicInfo"]["showExtInfo"]?.["countdownTitle"];
            if (sMOzNj) {
              console["log"](`当前场次：${sMOzNj}`);
            }
            if (IkiT1Tw) {
              console["log"](`下一场时间：${IkiT1Tw}\n`);
            }
          }
          Gw2cQa = true;
        }
        const Xd1Liq = Date["now"](),
          KQ2lanV = YetJQm["rewardOpenTime"];
        let uWtMv3t = false,
          DwNNNM = 0;
        if (KQ2lanV && Xd1Liq < KQ2lanV) {
          if (kGXgWLc(DwNNNM = p7M42q(KQ2lanV - Xd1Liq, 100, vACefm = 0xd), DwNNNM) > 0x1b7740 && true) {
            console["log"](`${X82KKo}等待时间超过30分钟，退出脚本`);
            process["exit"](0x0);
          }
          if (DwNNNM > 0x0) {
            uWtMv3t = true;
          }
        }
        if (uWtMv3t) {
          if (p7M42q(CFxGgvZ, vACefm = 33)) {
            console["log"](`距离时间还有${Math["floor"](p7M42q(DwNNNM, 0x3e8, vACefm = -47))}秒，等待中...\n`);
            CFxGgvZ = true;
          }
          if (kGXgWLc(await $["wait"](DwNNNM), await FS0By7("comp_data_load"), p7M42q(zuGsmv3, vACefm = 33) || p7M42q(zuGsmv3["rewardProgressItems"], vACefm = 33) || zuGsmv3["rewardProgressItems"]["length"] === 0)) {
            return kGXgWLc(console["log"](`${X82KKo}等待后未获取到数据`), undefined);
          }
          const F3KWHZ = zuGsmv3["rewardProgressItems"][0];
          if (p7M42q(F3KWHZ, vACefm = 33)) {
            return kGXgWLc(console["log"](`${X82KKo}等待后未获取到进度项信息`), undefined);
          }
          uA9RgT8 = F3KWHZ["rewardReceiveKey"];
        } else {
          uA9RgT8 = YetJQm["rewardReceiveKey"];
        }
        if (uA9RgT8) {
          await FS0By7("comp_data_interact");
        } else {
          const HoMXf1V = uWtMv3t ? zuGsmv3["rewardProgressItems"][0] : YetJQm;
          if (HoMXf1V["rewardInfoList"] && HoMXf1V["rewardInfoList"]["length"] > 0x0) {
            const bAgST8 = HoMXf1V["rewardInfoList"][0];
            if (bAgST8 && bAgST8["couponInfo"]) {
              var bUBwcW5 = {
                RBEmom: "couponInfo",
                ["DoI7mdN"]: "couponQuota"
              };
              const M6UBFZ = bAgST8[bUBwcW5["RBEmom"]];
              console["log"](`${X82KKo}[已领取]满${M6UBFZ[bUBwcW5["DoI7mdN"]]}减${M6UBFZ["couponDiscount"]}(${new Date(M6UBFZ["beginTime"])["toLocaleString"]()}-${new Date(M6UBFZ["endTime"])["toLocaleString"]()})`);
            } else {
              console["log"](`${X82KKo}💨 空气`);
            }
          } else {
            console["log"](`${X82KKo}💨 空气`);
          }
        }
      } else {
        console["log"](`${X82KKo}未获取到进度项信息`);
      }
    } else {
      console["log"](`${X82KKo}未获取到信息`);
    }
  } else {
    console["log"](`${X82KKo}未获取到数据`);
  }
  if ($["runEnd"]) {
    return {
      ["runEnd"]: true
    };
  }
  await $["wait"](parseInt(p7M42q($["waitTime"] * 1, 0x1f4, vACefm = 0x1a), 10));
  async function igG0TH(ueyyKID, iGjLQj) {
    try {
      var qug6zSM = {
        R__Byah: "success"
      };
      switch (ueyyKID) {
        case "comp_data_load":
          if (iGjLQj["data"]) {
            zuGsmv3 = iGjLQj["data"];
          } else {
            var ojZ2dE = {
              ["Tg3q34"]: "log"
            };
            msg = BWWUfXa["getErrorMsg"](iGjLQj["data"]);
            console[ojZ2dE["Tg3q34"]](`${X82KKo}失败[${iGjLQj["code"]}]：${msg}`);
          }
          break;
        case "comp_data_interact":
          if (iGjLQj[qug6zSM.R__Byah]) {
            var r6Uyy8 = "length";
            if (kGXgWLc(comp_data_interact = iGjLQj["data"], iGjLQj["data"] && iGjLQj["data"]["rewardInfoList"] && iGjLQj["data"]["rewardInfoList"][r6Uyy8] > 0x0)) {
              const tI2NPTO = iGjLQj["data"]["rewardInfoList"][0];
              if (tI2NPTO && tI2NPTO["couponInfo"]) {
                var YOXQbU = "couponQuota";
                const RP8VdfO = tI2NPTO["couponInfo"];
                if (kGXgWLc(console["log"](`${X82KKo}✅满${RP8VdfO[YOXQbU]}减${RP8VdfO["couponDiscount"]}(${new Date(RP8VdfO["beginTime"])["toLocaleString"]()}-${new Date(RP8VdfO["endTime"])["toLocaleString"]()})`), zKA_Dxl["insert"](`满${RP8VdfO["couponQuota"]}减${RP8VdfO["couponDiscount"]}(${new Date(RP8VdfO["beginTime"])["toLocaleString"]()}-${new Date(RP8VdfO["endTime"])["toLocaleString"]()})`), n1AAxsr)) {
                  await LPVGSP0["sendNotify"](`${$["name"]}`, `【京东账号${UBbTOJG}】${BHIikz}：获得外卖卷，满${RP8VdfO["couponQuota"]}减${RP8VdfO["couponDiscount"]}(${new Date(RP8VdfO["beginTime"])["toLocaleString"]()}-${new Date(RP8VdfO["endTime"])["toLocaleString"]()})，请尽快使用~`);
                }
              } else {
                console["log"](`${X82KKo}💨 空气`);
              }
            } else {
              console["log"](`${X82KKo}💨 空气`);
            }
          } else {
            const YetJQm = iGjLQj["message"] || "未知错误",
              PVo6VQ = iGjLQj["errorCode"] || "unknown";
            console["log"](`${X82KKo}失败[${PVo6VQ}]：${YetJQm}`);
          }
      }
    } catch (e) {
      console["log"](`❌ 未能正确处理 ${ueyyKID} 请求响应 ${e["message"] || e}`);
    }
  }
  async function FS0By7(UBbTOJG) {
    if ($["runEnd"]) {
      return;
    }
    let r6Uyy8 = '',
      tI2NPTO = null,
      YOXQbU = null,
      zuGsmv3 = "POST",
      YetJQm = {},
      PVo6VQ = {};
    switch (UBbTOJG) {
      case "comp_data_load":
        PVo6VQ = {
          ["appId"]: "ec373",
          ["functionId"]: "comp_data_load",
          ["appid"]: "day_day_reward",
          ["clientVersion"]: BWWUfXa["getLatestAppVersion"](),
          ["client"]: "ios",
          ["body"]: {
            ["token"]: F4Cl23,
            ["commParams"]: {
              ["ubbLoc"]: "ttf.lqzx",
              ["lid"]: "4_50952_60426_0",
              ["client"]: 0,
              ["sdkToken"]: "jdd01URAYXIIMN7Q7GJY7XVOFGTMGLEHG3G2JIK6AFW2IO33UIVTUIAIAWY6JYE3UGDSW7IC3AFZCW4NDMLEDBZT26ZREHZW6MLYVR4PFLFI01234567"
            },
            ["bizParams"]: {
              ["openChannel"]: "jdAppHome",
              ["actKey"]: lDUFPmh,
              ["subLabel"]: ''
            }
          },
          ua: RP8VdfO,
          t: true
        };
        YetJQm = await bFLchu["getH5st"](PVo6VQ);
        r6Uyy8 = "https://api.m.jd.com/client.action?functionId=comp_data_load";
        tI2NPTO = YetJQm["paramsData"];
        break;
      case "comp_data_interact":
        PVo6VQ = {
          ["appId"]: "93453",
          ["functionId"]: "comp_data_interact",
          ["appid"]: "day_day_reward",
          ["clientVersion"]: BWWUfXa["getLatestAppVersion"](),
          ["client"]: "ios",
          ["body"]: {
            ["token"]: F4Cl23,
            ["fnCode"]: "invoke",
            ["commParams"]: {
              ["longitude"]: '',
              ["latitude"]: '',
              ["ubbLoc"]: "ttf.lqzx",
              ["lid"]: "4_50952_60426_0",
              ["client"]: 0x0,
              ["sdkToken"]: "jdd01YG5AHZNQU4TUXDWWHFZ7G5SAAJCXWGQWUMQPTWY6BVJJMTTEDYJVZXJSSF3ZHX2UFPU26WZJWZN4GY7TS4QAKPSMUCCDJSBBUTS5AFI01234567"
            },
            ["bizParams"]: {
              ["rewardReceiveKey"]: uA9RgT8,
              ["openChannel"]: "jdAppHome",
              ["actFlowCode"]: "receiveReward",
              ["actKey"]: lDUFPmh,
              ["subLabel"]: ''
            }
          },
          ua: RP8VdfO,
          t: true
        };
        YetJQm = await bFLchu["getH5st"](PVo6VQ);
        r6Uyy8 = "https://api.m.jd.com/client.action?functionId=comp_data_interact";
        tI2NPTO = YetJQm["paramsData"];
        break;
      default:
        console["log"](`❌ 未知请求 ${UBbTOJG}`);
        return;
    }
    const vc01RZU = {};
    if (tI2NPTO) {
      Object["assign"](tI2NPTO, vc01RZU);
    }
    if (YOXQbU) {
      Object["assign"](YOXQbU, vc01RZU);
    }
    const sMOzNj = {
      ["url"]: r6Uyy8,
      ["method"]: zuGsmv3,
      ["headers"]: {
        ["Host"]: "api.m.jd.com",
        ["Origin"]: "https://prodev.m.jd.com",
        ["Content-Type"]: "application/x-www-form-urlencoded",
        ["Cookie"]: ueyyKID,
        ["User-Agent"]: RP8VdfO
      },
      ["params"]: YOXQbU,
      ["data"]: tI2NPTO,
      ["timeout"]: 0x7530,
      ["httpsTlsOptions"]: {
        ["secureProtocol"]: "TLSv1_2_method",
        ["ciphers"]: "ECDHE-RSA-AES256-GCM-SHA384"
      }
    };
    if (zuGsmv3 === "GET") {
      delete (delete sMOzNj["data"], sMOzNj["headers"]["Content-Type"]);
    }
    const IkiT1Tw = 1;
    let Xd1Liq = 0,
      KQ2lanV = null;
    while (Xd1Liq < IkiT1Tw) {
      var uWtMv3t = {
        ["W7sXQv"]: "request"
      };
      if (Xd1Liq > 0) {
        await $["wait"](0x3e8);
      }
      const DwNNNM = await BWWUfXa[uWtMv3t["W7sXQv"]](sMOzNj);
      if (p7M42q(DwNNNM["success"], Zgy6Sn(0x21))) {
        KQ2lanV = `🚫 ${UBbTOJG} 请求失败 ➜ ${DwNNNM["error"]}`;
        Xd1Liq++;
        continue;
      }
      if (p7M42q(DwNNNM["data"], vACefm = 33) && true) {
        KQ2lanV = `🚫 ${UBbTOJG} 请求失败 ➜ 无响应数据`;
        Xd1Liq++;
        continue;
      }
      await igG0TH(UBbTOJG, DwNNNM["data"]);
      break;
    }
    if (Xd1Liq >= IkiT1Tw) {
      console["log"](KQ2lanV);
    }
  }
}
async function WQfBjd(ueyyKID) {
  const UBbTOJG = 0x3;
  let Wj6frz = 0,
    iGjLQj = null;
  while (Wj6frz < UBbTOJG) try {
    const ojZ2dE = await BWWUfXa["request"]({
      ["url"]: ueyyKID,
      ["method"]: "GET",
      ["headers"]: {
        ["Cookie"]: w2sBrnx[0],
        ["User-Agent"]: $.UA
      },
      ["debug"]: false,
      ["timeout"]: 0x7530
    });
    if (p7M42q(ojZ2dE["success"], vACefm = 0x21)) {
      throw new Error(`请求失败: ${ojZ2dE["error"] || "未知错误"}`);
    }
    if (p7M42q(ojZ2dE["data"], Zgy6Sn(0x21))) {
      throw new Error("响应数据为空");
    }
    const EdGx6MU = ojZ2dE["data"];
    let BHIikz = null,
      X82KKo = null;
    try {
      const zKA_Dxl = EdGx6MU["match"](/"token":"([^"]+)"/);
      BHIikz = zKA_Dxl ? zKA_Dxl[0x1] : null;
    } catch (e) {
      console["log"](`❌ token匹配失败: ${e["message"]}`);
    }
    try {
      const r6Uyy8 = EdGx6MU["match"](/"ddrActKey":"([^"]+)"/);
      X82KKo = r6Uyy8 ? r6Uyy8[1] : null;
    } catch (e) {
      console["log"](`❌ actKey匹配失败: ${e["message"]}`);
    }
    if (p7M42q(BHIikz, vACefm = 0x21) || p7M42q(X82KKo, vACefm = 0x21)) {
      throw new Error(`数据解析失败: token=${p7M42q(p7M42q(BHIikz, Zgy6Sn(0x21)), Zgy6Sn(33))}, actKey=${p7M42q(p7M42q(X82KKo, Zgy6Sn(0x21)), Zgy6Sn(0x21))}`);
    }
    return {
      ["token"]: BHIikz,
      ["actKey"]: X82KKo,
      ["data"]: EdGx6MU
    };
  } catch (e) {
    if (kGXgWLc(iGjLQj = e, Wj6frz++, Wj6frz) < UBbTOJG) {
      console["log"](`⚠️ 第${Wj6frz}次请求失败: ${e["message"]}, 等待${p7M42q(Wj6frz, 2, Zgy6Sn(0x2e))}秒后重试...`);
      await $["wait"](p7M42q(Wj6frz, 0x7d0, vACefm = 46));
    }
  }
  return kGXgWLc(console["log"](`❌ 达到最大重试次数(${UBbTOJG}), 最终错误: ${iGjLQj["message"]}`), {
    ["token"]: null,
    ["actKey"]: null,
    ["data"]: null
  });
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = false, this.isNeedRewrite = false, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], undefined === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), true) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : undefined;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}