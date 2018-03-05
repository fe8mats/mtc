/*
Masao to Canvas for chrome extension
v1.0
Developed by Tex - Tetsuya 2018
http://tex1.symphonic-net.com/

License : CC BY 4.0

mss.js by くるりん
http://sy.yryr.me/club/

*/

var mtc = (function() {
  "use strict";

  //アプレットタグが存在するか
  var applet = document.getElementsByTagName('applet')[0];
  var sc = document.getElementsByTagName('script');
  if (applet != null) {
    var flag = 1;
    //スクリプトタグを取得
    for (var i = 0; i < sc.length; i++) {
      var cvs_c = sc[i].getAttribute("src");
      //ScriptタグにCanvasMasaoが含まれるかチェック
      if (cvs_c != null) {
        if (~cvs_c.indexOf('CanvasMasao')) {
          console.log("Already converted");
          flag = 0;
        }
      }

    }
    //変換
    if (flag == 1) {
      port();
    }
  }

  function jsConvert() {

    var result = window.confirm('このゲームにはJS拡張が含まれています。実行の為新規ページで開きます。よろしいですか？\n（必ず実行できるとは限りません）');

    if (result) {
      console.log('OK');

      var html = document.getElementsByTagName('html')[0].innerHTML;
      var jsurl = chrome.extension.getURL('CanvasMasao.js');
      //CODE BY Kururin (jss.js)
      var new_code2 = "<script type=\"text/javascript\" src=\"" + jsurl + "\" charset=\"UTF-8\"></script>\
        <head><script type=\"text/javascript\" charset=\"UTF-8\">\n\
        (function () {\n\
          \"use strict\";\n\
    \n\
          var getElm = document.getElementById; // 元のメソッドを退避\n\
          var Applet1 = null; // 後でApplet1 が入る\n\
    \n\
          addEventListener(\"DOMContentLoaded\", function() {\n\
            var apid = document.getElementsByTagName(\"applet\")[0].id;\n\
    \n\
            // getElementById 乗っ取り\n\
            document.getElementById = function(id) {\n\
              if (Applet1 && id === apid) {\n\
                return Applet1;\n\
              }\n\
              return getElm.call(document, id);\n\
            };\n\
    \n\
            JSMasaoFX.replace(apid, {\n\
              userJSCallback: function(g, m, x, y, ap) {\n\
                Applet1 = ap;\n\
                if (window.userJS) {\n\
                  window.userJS.call(window, g, m, x, y);\n\
                }\n\
              }\n\
            });\n\
    \n\
          });\n\
        }());\n\
    </script>";
      var new_html = html.replace("<head>", new_code2);

      var win = window.open();
      win.document.open();
      win.document.write(new_html);
      win.document.close();
    } else {
      console.log('Cancel');
    }



    return;

  }

  function jsConvert2() {

    var result = window.confirm('このゲームにはJS拡張が含まれています。実行の為新規ページで開きます。よろしいですか？\n（必ず実行できるとは限りません）');

    if (result) {
      console.log('OK');
      var html = document.getElementsByTagName('html')[0].innerHTML;
      var jsurl = chrome.extension.getURL('CanvasMasao.js');
      //CODE BY Kururin (jss.js)
      var new_code2 = "<script type=\"text/javascript\" src=\"" + jsurl + "\" charset=\"UTF-8\"></script>\
        <head><script type=\"text/javascript\" charset=\"UTF-8\">\n\
        (function () {\n\
          \"use strict\";\n\
    \n\
          var getElm = document.getElementById; // 元のメソッドを退避\n\
          var Applet1 = null; // 後でApplet1 が入る\n\
    \n\
          addEventListener(\"DOMContentLoaded\", function() {\n\
            var apid = document.getElementsByTagName(\"applet\")[0].id;\n\
    \n\
            // getElementById 乗っ取り\n\
            document.getElementById = function(id) {\n\
              if (Applet1 && id === apid) {\n\
                return Applet1;\n\
              }\n\
              return getElm.call(document, id);\n\
            };\n\
    \n\
            JSMasaoFX.replace(apid, {\n\
              userJSCallback: function(g, m, x, y, ap) {\n\
                Applet1 = ap;\n\
                if (window.onLoadJS) {\n\
                  window.onLoadJS.call(window);\n\
                }\n\
              }\n\
            });\n\
    \n\
          });\n\
        }());\n\
    </script>";
      var new_html = html.replace("<head>", new_code2);
      new_html = new_html.replace('onload="onLoadJS()"', "");
      console.log(new_html);
      var win = window.open();
      win.document.open();
      win.document.write(new_html);
      win.document.close();

    } else {
      console.log('Cancel');
    }



    return;

  }

  function port() {

    var mc_c = applet.getAttribute("archive");
    var code = applet.getAttribute("code");
    console.log("mc_c", mc_c);
    console.log("code", code);
    var body = document.getElementsByTagName('body')[0].innerHTML;

    //正男のアプレットがあるか判定
    if (mc_c == "mc_c.zip") {

      console.log("Masao was found.");
      //正男のプログラムを取得
      CanvasMasao28.Game.replaceAll();

      console.log("This masao (2.8) was converted to Canvas.");




    } else if (mc_c == "mc_c.jar") {

      console.log("Masao was found.");
      switch (code) {
        //kani.classの場合
        case "MasaoKani.class":
          var prm1 = document.getElementsByName('oriboss_waza')[0];
          prm1.setAttribute("name", "oriboss_waza1");
          var prm2 = document.getElementsByName('oriboss_waza_wait')[0];
          prm2.setAttribute("name", "oriboss_waza1_wait");

          JSMasaoK2.replaceAll();
          console.log("This masao (FX, Kani1) was converted to Canvas.");
          break;

        case "MasaoKani2.class":
          JSMasaoK2.replaceAll();
          console.log("This masao (FX, Kani2) was converted to Canvas.");
          break;

          //拡張スクリプト使用の場合
        case "MasaoJSS.class":
          console.log("拡張スクリプト");

          jsConvert();
          console.log("This masao (JSS) was converted to Canvas.");

          break;
        case "MasaoFXApplet.class":
          console.log("拡張スクリプト");

          jsConvert();
          console.log("This masao (MasaoFXApplet) was converted to Canvas.");

          break;
        case "MasaoXJSS2.class":
          console.log("拡張スクリプト");
          jsConvert();
          console.log("This masao (XJSS2) was converted to Canvas.");

          break;
          //通常のFX、又はKani2の場合
        default:
          var js_check = document.getElementsByTagName('body')[0].getAttribute("onLoad");
          console.log("js:", js_check);
          if (js_check == "onLoadJS()") {
            jsConvert2();
          } else {
            JSMasaoFX.replaceAll();
            console.log("This masao (FX) was converted to Canvas.");
          }

          break;

      }


    }

  }
  return;

}(window));
