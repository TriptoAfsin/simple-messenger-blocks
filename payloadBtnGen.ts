import lengthValidator from "./validators/lengthValidator";

//for payload buttons / postback buttons
let payloadBtnGen = (title: string, payload: string) => {
  return {
    type: "postback",
    title: lengthValidator(title, 15),
    payload: payload,
  };
};

export default payloadBtnGen;
