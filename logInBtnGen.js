//for login buttons
let loginBtnGen = url => {
  return {
    type: "account_link",
    url: url,
  };
};

module.exports = loginBtnGen;
