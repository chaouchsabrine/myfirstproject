
function boutiqueFashion(name) {
  return {
      name,
      list: [],
      Maker: Maker,
      displayItems: displayItems,
  };
}
  function makeproduct(price, name, category, image) {
    return {
      price: price,
      name: name,
      category: category,
      image: image,
      
    };
  }
 

  
  var product1 = makeproduct(100, "shirt", "femme","./imagess/imag1.png  ")
  var product2 = makeproduct(200, "kimino hijab", "femme", "./imagess/imag2.png");
  var product3 = makeproduct(500, "shirt", "femme", "./imagess/imag3.png");
  var product4 = makeproduct(50, "tracksuits", "femme", "./imagess/imag4.png");
  var product5 = makeproduct(300, "jacket", "homme", "./imagess/imag5.png");
  var product6 = makeproduct(80, "racksuits", "homme", "./imagess/imag7.png");
  var product7 = makeproduct(30, "t-shirt", "homme", "./imagess/imag8.png");
  var product8 = makeproduct(50, "t-shirt", "homme", "./imagess/imag9.png");
  var products=[product1,product2,product3,product4,product5,product6,product7,product8]

  
  