module.exports = function (el, options, callback = null, invert = false) {

  function sync() {
    return options.output.value = false === invert ?  el.value.length : options.max - el.value.length;
  }

  sync();

  el.addEventListener('input', () => {
    if (false === invert) {
      if (sync() > options.max && null !== callback) {
        callback();
      }
    } else {
      if (sync() < 0 && null !== callback) {
        callback();
      }
    }
  });
};
