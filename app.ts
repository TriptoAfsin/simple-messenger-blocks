import cardGenerator from "./cardGenerator";
import groupedBtnBlockGen from "./groupedBtnBlockGen";
import imgBlockGen from "./imgBlockGen";
import payloadBtnGen from "./payloadBtnGen";
import quickReplyBlockGen from "./quickReplyBlockGen";
import textBlockGen from "./textBlockGen";
import webBtnGen from "./webBtnGen";

textBlockGen("Hello");

imgBlockGen("url of your image"); //this function accepts a param of string(url)

cardGenerator("Image URL", "Title", "Subtitle", "Default URL", [
  webBtnGen("Visit 🌍", "URL Here"),
]);

groupedBtnBlockGen(`🔰 Select Topic for PHY-I - `, [
  payloadBtnGen("Books", "phy1_books_flow"),
  payloadBtnGen("Questions", "phy1_ques_flow"),
  payloadBtnGen("Circular Motion", "phy1_circular_flow"),
]);

quickReplyBlockGen("Title", [
  payloadBtnGen("Btn Title", "Payload"),
  payloadBtnGen("Btn Title2", "Payload2"),
]);
