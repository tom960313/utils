//函数防抖

function debounce (fn, time, triggleNow) {  //第3个参数是指第一次操作是否延时处理
  var t = null;

  var debounced = function () {
    var _self = this;
        args = arguments;
    
    if (t) {
      clearTimeout(t)
    }

    if(triggleNow){
      var exec = !t;
      t = setTimeout(function(){
        t = null;
      }, time);

      if(exec) {
        fn.apply(_self, args);
      }
    }else {
      t = setTimeout(function(){
        fn.apply(_self, args)
      }, time)
    }
  }

  debounced.remove = function(){
    clearTimeout(t);
    t = null;
  }

  return debounced
}


//函数节流
function throttle (fn, delay) {  //第2个参数是指每隔n秒执行一次

  var t = null,
      begin = new Date().getTime();

  return function () {
    var _self = this,
        args = arguments,
        cur = new Date().getTime();

    clearTimeout(t);
    if(cur - begin >= delay){
      fn.apply(_self, args);
      begin = cur;
    }else {
      t = setTimeout(function () {
        fn.apply(_self, args);
      }, delay)
    }
  }
}