let {textBlockGen, imgBlockGen, cardGenerator, webBtnGen, groupedBtnBlockGen, payloadBtnGen, quickReplyBlockGen} = require('./index')


textBlockGen("Hello")

imgBlockGen("url of your image") //this function accepts a param of string(url)

cardGenerator(
    "Image URL",
    "Title",
    "Subtitle",
    "Default URL",
    [
        webBtnGen("Visit 🌍", "URL Here")
    ]
)


groupedBtnBlockGen(`🔰 Select Topic for PHY-I - `,
        [
            payloadBtnGen("Books", "phy1_books_flow"),
            payloadBtnGen("Questions", "phy1_ques_flow"),
            payloadBtnGen("Circular Motion", "phy1_circular_flow"),
        ]
)


quickReplyBlockGen(
    "Title",
    [
        payloadBtnGen("Btn Title", "Payload"),
        payloadBtnGen("Btn Title2", "Payload2")
    ]
)