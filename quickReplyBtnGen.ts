import lengthValidator from "./validators/lengthValidator";

//for quick reply buttons
let quickReplyBtnGen = (title: string, payload: string) => {
  return {
    content_type: "text",
    payload: payload,
    title: lengthValidator(title, 15),
  };
};

export default quickReplyBtnGen;
