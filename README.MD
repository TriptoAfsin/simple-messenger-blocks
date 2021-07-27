# Simple Messenger Blocks 

This npm package generates common messenger chatbot blocks(buttons, texts, images, cards, grouped button containers) for Node JS

I know that writing messenger chatbot response object blocks can be bit repetitive, and it leads to messy code. I'm a the creator of [BUTEX NoteBOT](https://github.com/TriptoAfsin/notebot-engine-v1) and I myself faced these issues, so I made this object generators to simplify my workflow and might help you as well 😀

### Available Blocks - 
1. Text Block
2. Grouped Button Block(url button + postback buttons)
3. Card Block
4. Image Block 
5. Quick Reply Block  

### How To Install - 

```
npm i simple-messenger-blocks

```

### Usage - 

1. **Text Block** - 

```javascript
let {textBlockGen} = require('simple-messenger-blocks')


textBlockGen("Hello 😀") // this function accepts a parameter of string

````

![Text Block SS](https://i.imgur.com/b5tFhAS.png)

2. **Image Block** - 

```javascript

let {imgBlockGen} = require('simple-messenger-blocks')

imgBlockGen("url of your image") //this function accepts a param of string(url)

````

![Img Block SS](https://i.imgur.com/Aakq9vo.png)

3. **Card Block** - 

```javascript

let {cardGenerator, webBtnGen} = require('simple-messenger-blocks')


cardGenerator(
    "Image URL",
    "Title",
    "Subtitle",
    "Default URL",
    [
        webBtnGen("Visit 🌍", "URL Here")
    ]
)

````

![Card Block SS](https://i.imgur.com/px00nkI.png)

4. **Grouped Button Block** - 

```javascript

let {groupedBtnBlockGen, payloadBtnGen} = require('simple-messenger-blocks')


groupedBtnBlockGen(`🔰 Select Topic for PHY-I - `,
        [
            payloadBtnGen("Books", "phy1_books_flow"),
            payloadBtnGen("Questions", "phy1_ques_flow"),
            payloadBtnGen("Circular Motion", "phy1_circular_flow"),
        ]
)

````

![grouped Btn SS](https://i.imgur.com/dry48ah.png)

5. **Quick Reply Block** - 

```javascript

let {quickReplyBlockGen, payloadBtnGen} = require('simple-messenger-blocks')


quickReplyBlockGen(
    "Title",
    [
        payloadBtnGen("Btn Title", "Payload"),
        payloadBtnGen("Btn Title2", "Payload2")
    ]
)

````

![quick reply Btn SS](https://i.imgur.com/m0XPueJ.png)