//cardCarousel block
let cardCarouselGen = (cardArray = []) => {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: cardArray,
      },
    },
  };
};

export default cardCarouselGen;
