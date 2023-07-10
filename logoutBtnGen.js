//for logout buttons
let logoutBtnGen = () => {
  return {
    type: "account_unlink",
  };
};

module.exports = logoutBtnGen;
