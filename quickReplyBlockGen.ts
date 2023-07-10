//let lengthValidator = require('./validators/lengthValidator');

//quick reply
let quickReplyBlockGen = (title: string, quickRepliesArr: any[]) => {
  return {
    text: `${title}`,
    quick_replies: quickRepliesArr,
  };
};

export default quickReplyBlockGen;
