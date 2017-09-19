//Revealing Module Pattern

var rvlMdl=function() { //bir tane global değişken kullanıp diğerlini onn içine yazmak en kullanışlı çözüm.
  var program = function() {
    var a = function() {
      console.log("RMPa");
    };

    var b = function() {
      console.log("RMPb");
    };

    return {
      aBridge: a,
      bBridge: b
    }
  }

  var pr = program();
  pr.aBridge();
  pr.bBridge();
}();
