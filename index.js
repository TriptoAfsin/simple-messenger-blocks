let lengthValidator = require('./validators/lengthValidator');


//for text blocks 
let textBlockGen = (text) => {
    return {
        "text": text
    }
}


//for payload buttons / postback buttons
let payloadBtnGen = (title, payload) => {
    return {
        "type": "postback",
        "title":  lengthValidator(title, 15),
        "payload": payload
    }
}


//for web link buttons
let webBtnGen = (title, url) => {
    return {
        "type": "web_url",
        "url": url,
        "title": lengthValidator(title, 15),
    }
}

//groupedBtn block
let groupedBtnBlockGen = (headerText, BtnObjArr) => {

    if(BtnObjArr.length > 3){
        console.warn(`⚠ Warning: Max btn(3) amount crossed! only 3 buttons were kept and rest were removed`);
        return {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "button",
                    "text": headerText,
                    "buttons": [BtnObjArr[0], BtnObjArr[1], BtnObjArr[2]],
                },
            },
        }
    }

    else{
        return {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "button",
                    "text": headerText,
                    "buttons": BtnObjArr,
                },
            },
        }
    }
}

//quick reply
let quickReplyBlockGen = (title, quickRepliesArr) => {
    return {
        "text": `${title}`,
        "quick_replies": quickRepliesArr
    }
}


//img block 

let imgBlockGen = (url) => {
    return {
        "attachment":{
            "type":"image", 
            "payload":{
              "is_reusable": false,
              "url": url
            }
          }
    }
}


//card block

let cardGenerator = (imgUrl, title, subtitle, defaultLink, BtnObjArr) => {
    if (BtnObjArr.length > 3) {
        console.warn(`⚠ Warning: Max btn(3) amount crossed! only 3 buttons were kept and rest were removed`);
        return {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": [{
                        "title": lengthValidator(title, 80),
                        "image_url": `${imgUrl}`,
                        "subtitle": lengthValidator(subtitle, 80),
                        "default_action": {
                            "type": "web_url",
                            "url": `${defaultLink}`
                        },
                        "buttons": [BtnObjArr[0], BtnObjArr[1], BtnObjArr[2]],
                    }]
                }
            }
        }
    }

    else {
        return {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": [{
                        "title": lengthValidator(title, 80),
                        "image_url": `${imgUrl}`,
                        "subtitle": lengthValidator(subtitle, 80),
                        "default_action": {
                            "type": "web_url",
                            "url": `${defaultLink}`
                        },
                        "buttons": BtnObjArr,
                    }]
                }
            }
        }
    }
}



module.exports = {
    textBlockGen: textBlockGen,
    payloadBtnGen: payloadBtnGen,
    webBtnGen: webBtnGen,
    groupedBtnBlockGen: groupedBtnBlockGen,
    quickReplyBlockGen: quickReplyBlockGen,
    imgBlockGen: imgBlockGen,
    cardGenerator: cardGenerator,
}