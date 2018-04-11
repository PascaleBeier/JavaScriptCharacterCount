module.exports = function (el, options, callback = null) {

  function sync() {
    return options.output.value = options.invert === true ? options.max - el.value.length : el.value.length;
  }

  if (typeof (el) != 'undefined' && el !== null) {

    sync();

    el.addEventListener('input', () => {
      if (options.invert === true) {
        if (sync() < 0 && callback !== null) {
          callback();
        }
      } else {
        if (sync() > options.max && callback !== null) {
          callback();
        }
      }
    });

  }
};
