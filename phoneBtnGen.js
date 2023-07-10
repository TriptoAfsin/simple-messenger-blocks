let lengthValidator = require("./validators/lengthValidator");

//for web link buttons
let phoneBtnGen = (title, phoneNo) => {
  return {
    type: "phone_number",
    title: lengthValidator(title, 15),
    payload: phoneNo,
  };
};

module.exports = phoneBtnGen;
