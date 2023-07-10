//let lengthValidator = require('./validators/lengthValidator');

//groupedBtn block
let persistentMenuGen = (BtnObjArr: any[]) => {
  return {
    persistent_menu: [
      {
        locale: "default",
        composer_input_disabled: false,
        call_to_actions: BtnObjArr,
      },
    ],
  };
};

export default persistentMenuGen;
