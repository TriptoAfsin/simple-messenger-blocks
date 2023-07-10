//let lengthValidator = require('./validators/lengthValidator');

//img block
let imgBlockGen = (url: string) => {
  return {
    attachment: {
      type: "image",
      payload: {
        is_reusable: false,
        url: url,
      },
    },
  };
};

export default imgBlockGen;
