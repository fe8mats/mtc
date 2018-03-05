(function () {
  "use strict";

  var getElm = document.getElementById; // 元のメソッドを退避
  var Applet1 = null; // 後でApplet1 が入る

  addEventListener("DOMContentLoaded", function() {
    var apid = document.getElementsByTagName("applet")[0].id;

    // getElementById 乗っ取り
    document.getElementById = function(id) {
      if (Applet1 && id === apid) {
        return Applet1;
      }
      return getElm.call(document, id);
    };

    JSMasaoFX.replace(apid, {
      userJSCallback: function(g, m, x, y, ap) {
        Applet1 = ap;
        if (window.userJS) {
          window.userJS.call(window, g, m, x, y);
        }
      }
    });

  });
}());

