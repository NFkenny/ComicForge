export function debounce(fun, delay) {
  let timeoutId;  // ✅ 使用闭包变量存储 ID
  return function (args) {
      let that = this
      let _args = args
      clearTimeout(timeoutId);  // ✅ 清除上一次的定时器
      timeoutId = setTimeout(function () {
          fun.call(that, _args);
      }, delay);
  }
}