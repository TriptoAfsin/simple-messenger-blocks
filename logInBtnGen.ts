//for login buttons
let loginBtnGen = (url: string) => {
  return {
    type: "account_link",
    url: url,
  };
};

export default loginBtnGen;
