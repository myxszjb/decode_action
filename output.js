//Sat Nov 15 2025 15:42:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var encode_version = "jsjiami.com.v5";
try {
  var _0x510037 = ["domain", "split", "reverse", "join", "search", "href", "random", true];
  var _0x533e51 = document[_0x510037[0]];
  var _0x3b5498 = function (_0x20a646) {
    return _0x20a646[_0x510037[1]]("")[_0x510037[2]]()[_0x510037[3]]("");
  };
  var _0xa5d95a = function (_0x3fd9b7, _0x3a58d7) {
    var _0x45a444 = function () {
      var _0x52aa6f = true;
      return function (_0x578ffa, _0xb417a3) {
        var _0x5bcfdc = _0x52aa6f ? function () {
          if (_0xb417a3) {
            {
              var _0x444496 = _0xb417a3.apply(_0x578ffa, arguments);
              _0xb417a3 = null;
              return _0x444496;
            }
          }
        } : function () {};
        _0x52aa6f = false;
        return _0x5bcfdc;
      };
    }();
    var _0x541e41 = _0x45a444(this, function () {
      var _0x156205 = function () {};
      var _0xd33d48 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      if (!_0xd33d48.console) {
        {
          _0xd33d48.console = function (_0x586954) {
            var _0xd63df = {};
            _0xd63df.log = _0x586954;
            _0xd63df.warn = _0x586954;
            _0xd63df.debug = _0x586954;
            _0xd63df.info = _0x586954;
            _0xd63df.error = _0x586954;
            _0xd63df.exception = _0x586954;
            _0xd63df.trace = _0x586954;
            return _0xd63df;
          }(_0x156205);
        }
      } else {
        _0xd33d48.console.log = _0x156205;
        _0xd33d48.console.warn = _0x156205;
        _0xd33d48.console.debug = _0x156205;
        _0xd33d48.console.info = _0x156205;
        _0xd33d48.console.error = _0x156205;
        _0xd33d48.console.exception = _0x156205;
        _0xd33d48.console.trace = _0x156205;
      }
    });
    _0x541e41();
    return _0x3b5498(_0x3fd9b7)[_0x510037[4]](_0x3a58d7) === 0;
  };
  if (!(_0xa5d95a(_0x533e51, "moc.ecizro") || _0xa5d95a(_0x533e51, "moc.ecigca"))) {
    while (_0x510037[7]) {
      location[_0x510037[5]] = location[_0x510037[5]] + "?" + Math[_0x510037[6]]();
    }
  }
} catch (_0x1107a7) {
  console.log(_0x1107a7);
}
function FuncMapPwd() {
  AppDataVue.map_pwd = {
    a: ["", ""],
    b: ["", ""],
    c: ["", ""],
    d: ["", ""],
    e: ["", ""]
  };
  axios.get(BaseApiHost + "/api/xtc/map_pwd" + GetPath("")).then(_0x56d85f => {
    {
      let _0x376a7c = _0x56d85f.data;
      if (_0x376a7c.code == 0) {
        _0x376a7c.data = GetData01(_0x376a7c.data);
        AppDataVue.map_pwd = _0x376a7c.data;
      } else {
        AppDataVue.$message({
          message: _0x376a7c.msg,
          type: "error"
        });
      }
    }
  }).catch(_0x57f7bf => {
    AppDataVue.$message({
      message: "获取地图密码失败，请刷新网页",
      type: "error"
    });
  });
}
function FuncGetKeysDay(_0xee51d7) {
  AppDataVue.keys_day = [];
  axios.get(BaseApiHost + "/api/xtc/keys_day" + GetPath("")).then(_0x46d26d => {
    {
      let _0x20c851 = _0x46d26d.data;
      if (_0x20c851.code == 0) {
        {
          _0x20c851.data = GetData01(_0x20c851.data);
          let _0x1671bf = _0x20c851.data;
          let _0x1296ea = [];
          let _0x6959dd = new Date();
          let _0x466a8d = _0x6959dd.getHours();
          if (_0xee51d7 == 1) {
            {
              for (let _0x5ea9dc = _0x466a8d; _0x5ea9dc < _0x466a8d + 2; _0x5ea9dc++) {
                let _0x4f8c16 = _0x5ea9dc % 24;
                for (let _0x124574 = 0; _0x124574 < _0x1671bf.length; _0x124574++) {
                  if (_0x1671bf[_0x124574].hour == _0x4f8c16) {
                    {
                      _0x1296ea.push(_0x1671bf[_0x124574]);
                    }
                  }
                }
              }
            }
          } else {
            {
              _0x1296ea = _0x1671bf;
            }
          }
          AppDataVue.keys_day = _0x1296ea;
        }
      } else {
        {
          AppDataVue.$message({
            message: _0x20c851.msg,
            type: "error"
          });
        }
      }
    }
  }).catch(_0x5dd4c5 => {
    AppDataVue.$message({
      message: "数据已失效，请刷新网页",
      type: "error"
    });
  });
}
function FuncGetManufacture(_0x55a4c3, _0x39411d, _0x25ffc5) {
  AppDataVue[_0x55a4c3] = [];
  axios.get(BaseApiHost + "/api/xtc/manufacture" + GetPath("t=" + _0x39411d)).then(_0x425031 => {
    let _0x46390a = _0x425031.data;
    if (_0x46390a.code == 0) {
      _0x46390a.data = GetData01(_0x46390a.data);
      let _0x4c8d3a = _0x46390a.data;
      _0x4c8d3a.sort((_0xedc5db, _0x2293ec) => {
        {
          return _0x2293ec.price_hour - _0xedc5db.price_hour;
        }
      });
      if (_0x25ffc5 == 1) {
        _0x4c8d3a = _0x4c8d3a.slice(0, 4);
      }
      AppDataVue[_0x55a4c3] = _0x4c8d3a;
    } else {
      AppDataVue.$message({
        message: _0x46390a.msg,
        type: "error"
      });
    }
  }).catch(_0x426fd7 => {
    AppDataVue.$message({
      message: "数据已失效，请刷新网页",
      type: "error"
    });
  });
}
function FuncGetBase(_0x235b1a, _0x131c70) {
  AppDataVue.data = [];
  axios.get(BaseApiHost + "/api/sjz/" + _0x235b1a + GetPath(_0x131c70)).then(_0x5f6c8e => {
    let _0x1b908e = _0x5f6c8e.data;
    if (_0x1b908e.code == 0) {
      {
        _0x1b908e.data = GetData01(_0x1b908e.data);
        AppDataVue.data = _0x1b908e.data;
      }
    } else {
      {
        AppDataVue.$message({
          message: _0x1b908e.msg,
          type: "error"
        });
      }
    }
  }).catch(_0x9c2202 => {
    {
      AppDataVue.$message({
        message: "数据已失效，请刷新网页",
        type: "error"
      });
    }
  });
}
function FuncGetXTCBase(_0x4ab48f, _0x9bf3b1) {
  AppDataVue.data = [];
  axios.get(BaseApiHost + "/api/xtc/" + _0x4ab48f + GetPath(_0x9bf3b1)).then(_0x12a4e3 => {
    {
      let _0x16b0bb = _0x12a4e3.data;
      if (_0x16b0bb.code == 0) {
        _0x16b0bb.data = GetData01(_0x16b0bb.data);
        AppDataVue.data = _0x16b0bb.data;
      } else {
        {
          AppDataVue.$message({
            message: _0x16b0bb.msg,
            type: "error"
          });
        }
      }
    }
  }).catch(_0x46bad8 => {
    AppDataVue.$message({
      message: "数据已失效，请刷新网页",
      type: "error"
    });
  });
}
function ZbV3DiyFunc() {
  if (GunVue.difference < 1500) {
    GunVue.$message({
      message: "战备差值最低为1500",
      type: "error"
    });
    return;
  }
  if (GunVue.captcha_num == "") {
    {
      GunVue.$message({
        message: "请输入图片验证码",
        type: "error"
      });
      return;
    }
  }
  var _0x32862a = "zb=" + GunVue.difference + "&key=" + GunVue.captcha_key + "&key_num=" + GunVue.captcha_num;
  if (GunVue.typeSwitches.is_bb) {
    {
      _0x32862a += "&is_bb=1";
    }
  } else {
    _0x32862a += "&is_bb=0";
  }
  if (GunVue.typeSwitches.is_gun) {
    {
      _0x32862a += "&is_gun=1";
    }
  } else {
    _0x32862a += "&is_gun=0";
  }
  if (GunVue.typeSwitches.is_tk) {
    _0x32862a += "&is_tk=1";
  } else {
    {
      _0x32862a += "&is_tk=0";
    }
  }
  if (GunVue.typeSwitches.is_hj) {
    _0x32862a += "&is_hj=1";
  } else {
    _0x32862a += "&is_hj=0";
  }
  if (GunVue.typeSwitches.is_xg) {
    {
      _0x32862a += "&is_xg=1";
    }
  } else {
    {
      _0x32862a += "&is_xg=0";
    }
  }
  if (GunVue.typeSwitches.is_sq) {
    _0x32862a += "&is_sq=1";
  } else {
    {
      _0x32862a += "&is_sq=0";
    }
  }
  GunVue.zb = {
    data: [],
    time: ""
  };
  GunVue.changeCode();
  GunVue.captcha_num = "";
  const _0x1f45b2 = GunVue.$loading({
    lock: true,
    text: "系统正在处理中.....",
    spinner: "el-icon-loading",
    background: "rgba(0, 0, 0, 0.7)"
  });
  axios.get(BaseApiHost + "/api/sjz/jzv3_diy" + GetPath(_0x32862a)).then(_0x4b472c => {
    {
      let _0x18f98f = _0x4b472c.data;
      if (_0x18f98f.code == 0) {
        let _0x1a7430 = _0x18f98f.data;
        GunVue.zb = GetData01(_0x1a7430);
      } else {
        {
          GunVue.$message({
            message: _0x18f98f.msg,
            type: "error"
          });
        }
      }
      GunVue.showId("1");
      _0x1f45b2.close();
    }
  }).catch(_0xd2db91 => {
    {
      console.error("获取失败，可能是计算服务器异常", _0xd2db91);
      _0x1f45b2.close();
    }
  });
}
function ZbV3TopFunc() {
  GunVue.top_data = [];
  axios.get(BaseApiHost + "/api/xtc/jzv3_top" + GetPath("a=" + GunVue.showId)).then(_0x5015f7 => {
    let _0x4036e7 = _0x5015f7.data;
    if (_0x4036e7.code == 0) {
      {
        let _0x19f9fa = _0x4036e7.data;
        GunVue.top_data = GetData01(_0x19f9fa);
      }
    } else {
      {
        GunVue.$message({
          message: _0x4036e7.msg,
          type: "error"
        });
      }
    }
  }).catch(_0x1d1ea9 => {
    {
      console.error("获取失败", _0x1d1ea9);
      GunVue.$message({
        message: "数据已失效，请刷新网页",
        type: "error"
      });
    }
  });
}
function FuncShowLinesMinuteV3(_0x2a1fed, _0x133b27) {
  axios.get("/api/sjz/v3/minute" + GetPath("id=" + _0x2a1fed)).then(_0x59f93b => {
    let _0x545448 = _0x59f93b.data;
    if (_0x545448.code == 0) {
      {
        _0x545448.data = GetData01(_0x545448.data);
        let _0x28ae66 = _0x545448.data;
        console.log(_0x28ae66);
        ShowLinesPlusV3(p_name, _0x28ae66, _0x133b27);
        cache[_0x2a1fed] = _0x545448.data;
      }
    }
  }).catch(_0x5697bb => {
    {
      if (base_vue) {
        base_vue.$message({
          message: "系统异常",
          type: "error"
        });
      } else {
        {
          alert("系统异常");
        }
      }
    }
  });
}
function FuncShowLinesHourV3(_0x20892e, _0x3713dd, _0x52f173) {
  const _0x4d0ce2 = GunVue.$loading({
    lock: true,
    text: "系统正在处理中.....",
    spinner: "el-icon-loading",
    background: "rgba(0, 0, 0, 0.7)"
  });
  axios.get("/api/sjz/v3/hour" + GetPath("id=" + _0x20892e)).then(_0x27498e => {
    {
      let _0x2105d3 = _0x27498e.data;
      if (_0x2105d3.code == 0) {
        _0x2105d3.data = GetData01(_0x2105d3.data);
        let _0x4f3881 = _0x2105d3.data;
        ShowLinesPlusV3(p_name, _0x4f3881, _0x52f173);
        cache_hour[_0x20892e] = _0x4f3881;
      } else {
        ErrorLinesId.push(_0x20892e);
        if (base_vue) {
          base_vue.$message({
            message: _0x3713dd,
            type: "error"
          });
        } else {
          alert(_0x3713dd);
        }
        GoItemLinesV3();
      }
      _0x4d0ce2.close();
    }
  }).catch(_0x4c98fc => {
    console.log(_0x4c98fc);
    if (base_vue) {
      base_vue.$message({
        message: "系统异常",
        type: "error"
      });
    } else {
      alert("系统异常");
    }
    _0x4d0ce2.close();
  });
}
function FuncShowLinesDayV3(_0x53e88d, _0xa2ace9, _0x40ccf4) {
  axios.get("/api/sjz/v3/day" + GetPath("id=" + _0x53e88d + "&day=" + _0xa2ace9)).then(_0x93f2eb => {
    {
      let _0x535584 = _0x93f2eb.data;
      if (_0x535584.code == 0) {
        _0x535584.data = GetData01(_0x535584.data);
        let _0x13df0d = _0x535584.data;
        ShowLinesPlusV3(p_name, _0x13df0d, _0x40ccf4);
        cache_day[_0x53e88d + "_" + _0xa2ace9] = _0x535584.data;
      }
    }
  }).catch(_0x4e6428 => {
    if (base_vue) {
      base_vue.$message({
        message: "系统异常",
        type: "error"
      });
    } else {
      alert("系统异常");
    }
  });
}
function ZbV3Func() {
  GunVue.tj = [];
  axios.get(BaseApiHost + "/api/xtc/jzv3_tj" + GetPath("")).then(_0x36e695 => {
    let _0x3b39ed = _0x36e695.data;
    if (_0x3b39ed.code == 0) {
      let _0x40d68f = _0x3b39ed.data;
      GunVue.tj = GetData01(_0x40d68f);
    } else {
      GunVue.$message({
        message: _0x3b39ed.msg,
        type: "error"
      });
    }
  }).catch(_0xc4e95a => {
    console.error("获取失败", _0xc4e95a);
    GunVue.$message({
      message: "数据已失效，请刷新网页",
      type: "error"
    });
  });
  GunVue.peijian = [];
  axios.get(BaseApiHost + "/api/xtc/jzv3_pj" + GetPath("")).then(_0x329067 => {
    let _0x4a840e = _0x329067.data;
    if (_0x4a840e.code == 0) {
      let _0x53546b = _0x4a840e.data;
      GunVue.peijian = GetData01(_0x53546b);
    } else {
      GunVue.$message({
        message: _0x4a840e.msg,
        type: "error"
      });
    }
  }).catch(_0x48a638 => {
    console.error("获取失败", _0x48a638);
    GunVue.$message({
      message: "数据已失效，请刷新网页",
      type: "error"
    });
  });
  GunVue.gunList = {
    data: [],
    time: ""
  };
  axios.get(BaseApiHost + "/api/xtc/jzv3_gunList" + GetPath("")).then(_0x5aad5c => {
    {
      let _0x5c91e5 = _0x5aad5c.data;
      if (_0x5c91e5.code == 0) {
        let _0x54f22d = _0x5c91e5.data;
        GunVue.gunList = GetData01(_0x54f22d);
      } else {
        GunVue.$message({
          message: _0x5c91e5.msg,
          type: "error"
        });
      }
    }
  }).catch(_0x14de2f => {
    console.error("获取失败", _0x14de2f);
    GunVue.$message({
      message: "数据已失效，请刷新网页",
      type: "error"
    });
  });
  ZbV3FuncId(0);
  ZbV3FuncId(1);
  ZbV3FuncId(2);
  ZbV3FuncId(3);
  ZbV3FuncId(5);
}
function ZbV3FuncId(_0x225811) {
  GunVue["zb_" + _0x225811] = {
    data: [],
    time: ""
  };
  axios.get(BaseApiHost + "/api/xtc/jzv3_zb" + GetPath("lv=" + _0x225811)).then(_0x38e355 => {
    let _0x5e1913 = _0x38e355.data;
    if (_0x5e1913.code == 0) {
      let _0x7e780e = _0x5e1913.data;
      GunVue["zb_" + _0x225811] = GetData01(_0x7e780e);
    } else {
      {
        GunVue.$message({
          message: _0x5e1913.msg,
          type: "error"
        });
      }
    }
  }).catch(_0x435a08 => {
    console.error("获取失败", _0x435a08);
    GunVue.$message({
      message: "数据已失效，请刷新网页",
      type: "error"
    });
  });
}
function FuncGetItemList(_0xa4d5bc) {
  AppDataVue.data = [];
  axios.get(BaseApiHost + "/api/sjz/item_list" + GetPath(_0xa4d5bc)).then(_0x48e0c0 => {
    let _0x25f571 = _0x48e0c0.data;
    if (_0x25f571.code == 0) {
      {
        _0x25f571.data = GetData01(_0x25f571.data);
        AppDataVue.data = _0x25f571.data;
        AppDataVue.count = _0x25f571.count;
      }
    } else {
      {
        AppDataVue.$message({
          message: _0x25f571.msg,
          type: "error"
        });
      }
    }
  }).catch(_0x7f729a => {
    {
      AppDataVue.$message({
        message: "数据已失效，请刷新网页",
        type: "error"
      });
    }
  });
}
function FuncOauthApiTag(_0x19dfbc, _0x41dd41, _0x42fa33, _0x545555) {
  AppDataVue[_0x42fa33] = [];
  axios.get(BaseApiHost + "/api/oauthApi/v1/user_get" + GetPath(_0x19dfbc)).then(_0x5c9d2a => {
    let _0x205f6e = _0x5c9d2a.data;
    if (_0x205f6e.code == 0) {
      {
        _0x205f6e.data = GetData01(_0x205f6e.data);
        AppDataVue[_0x42fa33] = _0x205f6e.data;
        let _0x31a02b = _0x205f6e.data.vopenid;
        if (_0x31a02b != "") {
          AppDataVue[_0x545555] = [];
          axios.get(BaseApiHost + "/api/oauthApi/v1/user_get_tag_list" + GetPath("limit=" + _0x41dd41 + "&vopenid=" + _0x31a02b)).then(_0xffcc47 => {
            let _0x240062 = _0xffcc47.data;
            if (_0x240062.code == 0) {
              _0x240062.data = GetData01(_0x240062.data);
              AppDataVue[_0x545555] = _0x240062.data;
              AppDataVue.UpdateUserList();
            } else {
              AppDataVue.$message({
                message: _0x240062.msg,
                type: "error"
              });
            }
          }).catch(_0x5c23a3 => {
            AppDataVue.$message({
              message: "数据已失效，请刷新网页",
              type: "error"
            });
          });
        }
      }
    } else {
      {
        AppDataVue.$message({
          message: _0x205f6e.msg,
          type: "error"
        });
      }
    }
  }).catch(_0x2ba743 => {
    AppDataVue.$message({
      message: "数据已失效，请刷新网页",
      type: "error"
    });
  });
}
function FuncOauthApi(_0x2dd8cb, _0x3e20fb, _0x4dc069) {
  AppDataVue[_0x4dc069] = [];
  axios.get(BaseApiHost + "/api/oauthApi/" + _0x2dd8cb + GetPath(_0x3e20fb)).then(_0x40c530 => {
    {
      let _0x59b31b = _0x40c530.data;
      if (_0x59b31b.code == 0) {
        _0x59b31b.data = GetData01(_0x59b31b.data);
        AppDataVue[_0x4dc069] = _0x59b31b.data;
      } else {
        {
          AppDataVue.$message({
            message: _0x59b31b.msg,
            type: "error"
          });
        }
      }
    }
  }).catch(_0x5bb66f => {
    AppDataVue.$message({
      message: "数据已失效，请刷新网页",
      type: "error"
    });
  });
}
function FuncOauthApiCall(_0x3f40fb, _0x4f48b5, _0xa150b9) {
  axios.get(BaseApiHost + "/api/oauthApi/" + _0x3f40fb + GetPath(_0x4f48b5)).then(_0x3f2925 => {
    let _0x380aaf = _0x3f2925.data;
    if (_0x380aaf.code == 0) {
      _0x380aaf.data = GetData01(_0x380aaf.data);
    }
    _0xa150b9(_0x380aaf);
  }).catch(_0x53a9f2 => {
    {
      AppDataVue.$message({
        message: "数据已失效，请刷新网页",
        type: "error"
      });
    }
  });
}
function FuncZhanJiGetAuth(_0x92a0d6, _0x37de62) {
  const _0x5a226a = base_vue.$loading({
    lock: true,
    text: "数据正在处理中.....",
    spinner: "el-icon-loading",
    background: "rgba(0, 0, 0, 0.7)"
  });
  _0x92a0d6 = encodeURIComponent(_0x92a0d6);
  axios.get(BaseApiHost + "/api/sjz/zhanji_get_auth" + GetPath("url=" + _0x92a0d6)).then(_0x2782d9 => {
    let _0x53d0a6 = _0x2782d9.data;
    if (_0x53d0a6.code == 0) {
      _0x53d0a6.data = GetData01(_0x53d0a6.data);
      let _0x544e93 = _0x53d0a6.data.vopenid;
      if (_0x544e93 != "") {
        {
          FuncZhanJiBase("zhanji_get_rb");
          FuncZhanJiBase("zhanji_get_zb");
          FuncZhanJiBase("zhanji_get_zj");
          setTimeout(function () {
            FuncZhanJiBase("zhanji_get_info");
            FuncZhanJiBase("zhanji_get_zb");
          }, 800);
          setTimeout(function () {
            if (_0x37de62) {
              window.location.href = "/v/zj_oauth?vopenid=" + _0x544e93;
            } else {
              {
                window.location.href = "/v/zj/" + _0x544e93;
              }
            }
          }, 1800);
        }
      }
    } else {
      _0x5a226a.close();
      AppDataVue.$message({
        message: _0x53d0a6.msg,
        type: "error"
      });
    }
  }).catch(_0x5e37fa => {
    _0x5a226a.close();
    AppDataVue.$message({
      message: "数据已失效，请刷新网页",
      type: "error"
    });
  });
}
function FuncZhanJiBase(_0x457c36) {
  axios.get(BaseApiHost + "/api/sjz/" + _0x457c36 + GetPath("")).then(_0x5b2b94 => {}).catch(_0x30b297 => {});
}
function FuncZhanJiUpdate() {
  const _0x4ce49c = base_vue.$loading({
    lock: true,
    text: "数据正在处理中.....",
    spinner: "el-icon-loading",
    background: "rgba(0, 0, 0, 0.7)"
  });
  axios.get(BaseApiHost + "/api/sjz/zhanji_get_info" + GetPath("")).then(_0x5118e1 => {
    let _0x274df6 = _0x5118e1.data;
    if (_0x274df6.code == 0) {
      FuncZhanJiBase("zhanji_get_rb");
      FuncZhanJiBase("zhanji_get_zb");
      setTimeout(function () {
        location.reload();
      }, 1800);
    } else {
      _0x4ce49c.close();
      AppDataVue.$message({
        message: _0x274df6.msg,
        type: "error"
      });
      AppDataVue.zhanji_bd();
    }
  }).catch(_0x2c6abb => {
    AppDataVue.zhanji_bd();
    _0x4ce49c.close();
    AppDataVue.$message({
      message: "数据已失效，请刷新网页",
      type: "error"
    });
  });
}
function FuncGetFollow() {
  AppDataVue.data = [];
  let _0x1d545b = localStorage.getItem("follow");
  if (_0x1d545b == null) {
    {
      _0x1d545b = [];
    }
  } else {
    _0x1d545b = JSON.parse(_0x1d545b);
  }
  let _0x1602c7 = [];
  for (let _0x14f7a8 = 0; _0x14f7a8 < _0x1d545b.length; _0x14f7a8++) {
    if (_0x14f7a8 > 15) {
      {
        return;
      }
    }
    let _0x5b9bb7 = _0x1d545b[_0x14f7a8];
    let _0x527c4e = {};
    axios.get(BaseApiHost + "/api/sjz/item_info" + GetPath("id=" + _0x5b9bb7.id)).then(_0x4f3828 => {
      {
        let _0x2348b2 = _0x4f3828.data;
        if (_0x2348b2.code == 0) {
          {
            _0x2348b2.data = GetData01(_0x2348b2.data);
            _0x527c4e = _0x2348b2.data;
            _0x1602c7.push(_0x527c4e);
            AppDataVue.data = _0x1602c7;
          }
        } else {
          {
            AppDataVue.$message({
              message: _0x2348b2.msg,
              type: "error"
            });
          }
        }
      }
    }).catch(_0x17bb6e => {
      AppDataVue.$message({
        message: "数据已失效，请刷新网页",
        type: "error"
      });
    });
  }
}
function FuncLoadRQ(_0x1c94e9) {
  AppDataVue.RQ = [];
  axios.get(BaseApiHost + "/api/xtc/mnq_item" + GetPath("id=" + _0x1c94e9)).then(_0x13ee74 => {
    {
      let _0x2e82c5 = _0x13ee74.data;
      if (_0x2e82c5.code == 0) {
        _0x2e82c5.data = GetData01(_0x2e82c5.data);
        AppDataVue.RQ = _0x2e82c5.data;
      }
    }
  }).catch(_0x3d0e41 => {});
}
(function (_0xdd216b, _0x1f79e9, _0x2e343b) {
  _0x2e343b = "al";
  try {
    _0x2e343b += "ert";
    _0x1f79e9 = encode_version;
    if (!(typeof _0x1f79e9 !== "undefined" && _0x1f79e9 === "jsjiami.com.v5")) {
      _0xdd216b[_0x2e343b]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x3e77d2) {
    {
      _0xdd216b[_0x2e343b]("删除版本号，js会定期弹窗");
    }
  }
})(window);
encode_version = "jsjiami.com.v5";