import lengthValidator from "./validators/lengthValidator";

//for web link buttons
let webBtnGen = (title: string, url: string) => {
  return {
    type: "web_url",
    url: url,
    title: lengthValidator(title, 15),
  };
};

export default webBtnGen;
