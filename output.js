//Fri Dec 05 2025 11:18:43 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const API_BASE_URL = "https://quantumultx.me/";
(() => {
  function c(m) {
    var p = {
      ZiZnv: function (w, z) {
        return w || z;
      },
      jAfLg: function (w, x) {
        return w(x);
      },
      vXDiL: "未知平台",
      tsOvc: function (w, x) {
        return w(x);
      },
      NRhUM: function (w, z) {
        return w === z;
      },
      UNtTD: "YoDyY"
    };
    {
      var q;
      var u;
      var v;
      console.log("[".concat((q = Date.now(), u = new Date(q), v = function (x) {
        {
          return x.toString().padStart(2, "0");
        }
      }, "".concat(u.getFullYear(), "-").concat(v(u.getMonth() + 1), "-").concat(v(u.getDate()), " ").concat(v(u.getHours()), ":").concat(v(u.getMinutes()), ":").concat(v(u.getSeconds()))), "] [错误] ").concat(m));
    }
  }
  var f;
  var g = "undefined" != typeof $task;
  var h = "undefined" != typeof $loon;
  var i = "undefined" != typeof $httpClient && !g;
  function j(m) {
    return new Promise(function (u, v) {
      {
        if (g) {
          $task.fetch(m).then(u).catch(v);
        } else {
          if (h || i) {
            {
              var x = {
                url: m.url,
                method: m.method,
                headers: m.headers,
                body: m.body
              };
              $httpClient.post(x, function (z, A, B) {
                {
                  var C = {
                    body: B
                  };
                  z ? v(z) : u(C);
                }
              });
            }
          } else {
            v("未知平台");
          }
        }
      }
    });
  }
  function k(m) {
    {
      return j({
        url: "https://www.ssleye.com/ssltool/aes_decrypt_hander",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "Mozilla/5.0"
        },
        body: "text=".concat(encodeURIComponent(m), "&encode_flag=utf8&key=fd14f9f8e38808fa&iv=&mode=ECB&padding=pkcs7&out_mode=base64&mactag=")
      }).then(function (q) {
        {
          return JSON.parse(JSON.parse(q.body).msg);
        }
      });
    }
  }
  function l(m) {
    {
      return j({
        url: "https://www.ssleye.com/ssltool/aes_encrypt_hander",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "Mozilla/5.0"
        },
        body: "text=".concat(encodeURIComponent(JSON.stringify(m)), "&encode_flag=utf8&key=fd14f9f8e38808fa&iv=&mode=ECB&padding=pkcs7&out_mode=base64&mactag=")
      }).then(function (p) {
        {
          return JSON.parse(p.body).msg;
        }
      });
    }
  }
  /h5\/movie\/detail/.test($request.url) ? (f = $response.body, k(f).then(function (m) {
    var p = {
      rgzeZ: function (u, v) {
        return u !== v;
      },
      BVkaC: "Zrpfa",
      SmZLI: function (u, v) {
        return u != v;
      },
      NfkwU: "undefined",
      SaaAu: function (u, v) {
        return u != v;
      },
      yEScJ: "(((.+)+)+)+$",
      qxjQl: "zBNMq",
      bMllu: "bfNkI",
      kHXmJ: function (u, v) {
        return u(v);
      },
      uQOWf: function (u, v) {
        return u + v;
      },
      kDgVq: function (u, v) {
        return u || v;
      },
      etpzq: "未知平台",
      SpEMh: function (u, v) {
        return u === v;
      },
      StAtl: "MDJro",
      iMyOE: "play_ads",
      LHEZr: "ad_apps",
      XmjEH: "layer_ad",
      unzvV: "bottom_ad",
      wYrau: "post_banner",
      LELyx: "HwtPI",
      xyXGQ: "RSkiy",
      oOAxz: "gJqmC",
      tHFDd: "UjlQM",
      pBvGH: function (u, v) {
        return u != v;
      },
      epLKU: "视频 ID: ",
      TQNhV: function (u, v) {
        return u > v;
      },
      eMxlq: "notify_",
      pCWaS: "糖心视频解锁成功 ✅",
      KluKg: "ad_videos",
      NbCMU: "ad_box",
      hNqLA: function (u, v, w) {
        return u(v, w);
      },
      ATkUc: function (u, v) {
        return u !== v;
      },
      HLJUb: function (u, v) {
        return u(v);
      },
      owhPx: "2999-09-09到期",
      OgCiz: "https://t.me/GieGie777",
      rbPua: "https://zhongdu.oss-cn-beijing.aliyuncs.com/app/20250723/17532551159065978.jpg",
      zfAlr: "TiIqY",
      cVKCc: "gVzwt",
      nbhVh: "请求播放链接失败: ",
      HIAYi: function (u, v) {
        return u(v);
      },
      iPOGf: "BVZrF",
      eVevY: "POST",
      EvqPn: "application/json",
      HVSmF: "Mozilla/5.0"
    };
    {
      var q = m.data.id;
      !function v(w) {
        var x = {
          bhmsY: function (z, A) {
            return z !== A;
          },
          ujETM: "Zrpfa",
          tAVBh: function (z, A) {
            return z != A;
          },
          NXYSh: "undefined",
          HFhxr: function (z, A) {
            return z != A;
          },
          zJJwd: "(((.+)+)+)+$",
          KtrYX: "zBNMq",
          asSkv: "bfNkI",
          OWZBi: function (z, A) {
            return z(A);
          },
          fzURJ: function (z, A) {
            return z + A;
          },
          PVjhY: function (z, A) {
            return z || A;
          },
          lwxqV: "未知平台",
          ZiDBs: "AES 解密失败: ",
          tGrfz: function (z, A) {
            return z === A;
          },
          gNrce: "MDJro",
          nLOHm: "POST",
          xOAcV: function (z, A) {
            return z(A);
          },
          weOGA: "play_ads",
          niDYT: "ad_apps",
          Klwqf: "ad_spot",
          hTkYx: "layer_ad",
          WYzJp: "bottom_ad",
          CSprD: "post_banner",
          nVYnq: function (z, A) {
            return z !== A;
          },
          zKsGx: "KKJcR",
          PeUsB: "HwtPI",
          hOVvJ: "RSkiy",
          cvtYI: "gJqmC",
          RxemB: "UjlQM",
          invww: function (z, A) {
            return z != A;
          },
          kpmsI: function (z, A) {
            return z(A);
          },
          jrJQn: "视频 ID: ",
          FGVqC: function (z, A) {
            return z > A;
          },
          xopGP: "notify_",
          SDcZL: "糖心视频解锁成功 ✅",
          dOclq: function (z, A, B, C, D) {
            return z(A, B, C, D);
          },
          fmzkZ: "ad_videos",
          jhOKs: "ad_box",
          orqQs: function (z, A, B) {
            return z(A, B);
          },
          GnBIO: function (z, A) {
            return z(A);
          },
          KzwPC: function (z, A) {
            return z !== A;
          },
          GpBwe: function (z, A) {
            return z(A);
          },
          QqPPq: function (z, A) {
            return z(A);
          },
          qisiK: "2999-09-09到期",
          pTpSf: "https://t.me/GieGie777",
          pHKJO: "https://zhongdu.oss-cn-beijing.aliyuncs.com/app/20250723/17532551159065978.jpg",
          fHGeW: "TiIqY",
          Admdg: "gVzwt",
          Kwcds: "请求播放链接失败: ",
          khmPp: function (z, A) {
            return z(A);
          }
        };
        {
          var y = {
            video_id: q
          };
          j({
            url: API_BASE_URL,
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "User-Agent": "Mozilla/5.0",
              Cookie: ""
            },
            body: JSON.stringify(y)
          }).then(function (A) {
            {
              try {
                {
                  var C = JSON.parse(A.body);
                  if (C.success && C.playLink) {
                    {
                      var D = Date.now();
                      M = "notify_".concat(q);
                      var E = "undefined" != typeof $prefs ? $prefs.valueForKey(M) : "undefined" != typeof $persistentStore ? $persistentStore.read(M) : null;
                      var F = E ? parseInt(E) : 0;
                      var G = C.title ? C.title : "视频 ID: ".concat(q);
                      (!F || D - F > 60000) && (function (O, P) {
                        {
                          "undefined" != typeof $prefs ? $prefs.setValueForKey(P, O) : "undefined" != typeof $persistentStore && $persistentStore.write(P, O);
                        }
                      }("notify_".concat(q), D.toString()), I = "糖心视频解锁成功 ✅", J = G, K = C.playLink, L = {
                        "open-url": C.playLink
                      }, g ? $notify(I, J, K, L) : (h || i) && $notification.post(I, J, K));
                      m.data.play_link = C.playLink;
                      Array.isArray(m.data.lines) && m.data.lines.forEach(function (O) {
                        {
                          O.link = C.playLink;
                          O.is_vip && (O.is_vip = "n");
                        }
                      });
                      ["play_ads", "ad", "ad_apps", "ad_videos", "ad_banner", "ad_box", "ad_spot"].forEach(function (O) {
                        return delete m.data[O];
                      });
                      m.data.has_buy = "y";
                      m.data.pay_type = "y";
                      m.data.layer_type = "y";
                      m.data.money = "0";
                      l(m).then(function (O) {
                        {
                          var P = {
                            body: O
                          };
                          return $done(P);
                        }
                      }, function (O) {
                        {
                          var Q = {
                            body: $response.body
                          };
                          return $done(Q);
                        }
                      });
                    }
                  } else {
                    w < 5 ? setTimeout(function () {
                      {
                        return v(w + 1);
                      }
                    }, 300) : $done({
                      body: $response.body
                    });
                  }
                }
              } catch (Q) {
                {
                  var H = {
                    body: $response.body
                  };
                  c("JSON 解析失败: ".concat(Q));
                  $done(H);
                }
              }
              var I;
              var J;
              var K;
              var L;
              var M;
            }
          }, function (A) {
            var B = {
              lQcHM: function (D, E) {
                return D(E);
              }
            };
            {
              var C = {
                body: $response.body
              };
              c("请求播放链接失败: ".concat(A));
              $done(C);
            }
          });
        }
      }(1);
    }
  }, function (m) {
    {
      var p = {
        body: $response.body
      };
      c("AES 解密失败: ".concat(m));
      $done(p);
    }
  })) : /h5\/system\/info/.test($request.url) ? function (m) {
    k(m).then(function (q) {
      {
        q.data && ["ad", "play_ads", "ad_apps", "ad_videos", "ad_banner", "ad_box", "ad_spot", "ads", "layer_ad", "layer_ads", "layer_app", "bottom_ad", "bottom_ads", "post_banner"].forEach(function (v) {
          {
            return delete q.data[v];
          }
        });
        l(q).then(function (v) {
          {
            var w = {
              body: v
            };
            return $done(w);
          }
        }, function (v) {
          {
            var w = {
              body: $response.body
            };
            return $done(w);
          }
        });
      }
    }, function (q) {
      {
        var u = {
          body: $response.body
        };
        c("AES 解密失败: ".concat(q));
        $done(u);
      }
    });
  }($response.body) : /h5\/user\/info/.test($request.url) ? function (m) {
    k(m).then(function (q) {
      q.data && (q.data.is_vip = "y", q.data.is_dark_vip = "y", q.data.balance = "6666", q.data.balance_income = "8888", q.data.group_end_time = "2999-09-09到期", q.data.nickname = "https://t.me/GieGie777", q.data.headico = "https://zhongdu.oss-cn-beijing.aliyuncs.com/app/20250723/17532551159065978.jpg");
      l(q).then(function (u) {
        var v = {
          body: u
        };
        return $done(v);
      }, function (u) {
        var v = {
          body: $response.body
        };
        return $done(v);
      });
    }, function (q) {
      var u = {
        body: $response.body
      };
      c("AES 解密失败: ".concat(q));
      $done(u);
    });
  }($response.body) : $done({
    body: $response.body
  });
})();