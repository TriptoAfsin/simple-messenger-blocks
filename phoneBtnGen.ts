import lengthValidator from "./validators/lengthValidator";

//for phone link buttons
let phoneBtnGen = (title: string, phoneNo: string) => {
  return {
    type: "phone_number",
    title: lengthValidator(title, 15),
    payload: phoneNo,
  };
};

export default phoneBtnGen;
