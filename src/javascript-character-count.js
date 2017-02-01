export function (el, options, callback = null) {
  let value = el.value.length;
  el.addEventListener('input', () => {
    value = el.value.length;
    if (el.value.length < options.to) {
         options.output.value = value;
    } else {
      if (callback !== null) {
        callback();
      }
    }
  })
}
