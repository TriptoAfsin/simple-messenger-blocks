import lengthValidator from "./validators/lengthValidator";

//card block
let singleCardGen = (
  imgUrl: string,
  title: string,
  subtitle: string,
  defaultLink: string,
  BtnObjArr: any[]
) => {
  if (BtnObjArr.length > 3) {
    console.warn(
      `⚠ Warning: Max btn(3) amount crossed! only 3 buttons were kept and rest were removed`
    );
    return {
      title: lengthValidator(title, 80),
      image_url: `${imgUrl}`,
      subtitle: lengthValidator(subtitle, 80),
      default_action: {
        type: "web_url",
        url: `${defaultLink}`,
      },
      buttons: [BtnObjArr[0], BtnObjArr[1], BtnObjArr[2]],
    };
  } else {
    return {
      title: lengthValidator(title, 80),
      image_url: `${imgUrl}`,
      subtitle: lengthValidator(subtitle, 80),
      default_action: {
        type: "web_url",
        url: `${defaultLink}`,
      },
      buttons: BtnObjArr,
    };
  }
};

export default singleCardGen;
