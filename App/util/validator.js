import validate from 'validate.js';

const validateO = (function validateFunc() {
  const email_validate = {
    from: {
      email: true,
    },
  };
  function email(email) {
    const res = validate({from: email}, email_validate);
    if (email && res === undefined) {
      return true;
    } else {
      if (email) {
        return false;
      } else {
        return null;
      }
    }
  }

  function string(_str) {
    return _str && validate.isString(_str);
  }

  return {
    email,
    string,
  };
})();

module.exports = validateO;
