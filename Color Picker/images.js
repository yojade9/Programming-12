const imagesBrand = [
    "https://imageio.forbes.com/specials-images/imageserve/5e9c4e7ef57d440006ee4931/Michael-Jordan-Brand-Niek-Shoe-Launch/960x0.jpg?format=jpg&width=960",
    "https://www.thefactshop.com/wp-content/uploads/2017/12/gucci-facts.webp",
    "https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Rewrite_Nike_Logo_Design_History_Evolution_0_1024x1024.jpg?v=1695304464",
    "https://editorial01.shutterstock.com/preview-440/12682542av/32f5ef70/Shutterstock_12682542av.jpg",
    "https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg"
  ];

  const imagesRandom = [
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/06/luffy-from-one-piece-goku-from-dragon-ball-z-and-saitama-from-one-punch-man.jpg",
    "https://i.redd.it/rfftqdg5flv71.jpg",
    "https://i.imgur.com/JnJ8emx.png",
    "https://wallpapers.com/images/featured/pinterest-aesthetic-o3jj48m2y0b90mys.jpg",
    "https://media.istockphoto.com/id/1476189983/photo/summer-rain-raindrops-bad-weather-depression.webp?b=1&s=170667a&w=0&k=20&c=pD_fkxyEOROx1zXxuABfciV7cAKpxrb5JWB63VDM4Rw=",
    "https://img.freepik.com/free-vector/gradient-tropical-sunset-background_52683-131844.jpg",
    "https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?cs=srgb&dl=pexels-alex-andrews-821718.jpg&fm=jpg"
  ];
  
  const btn = document.getElementById("btn");
  
  btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundImage = `url('${imagesBrand[randomNumber]}')`;
  });
  
  function getRandomNumber() {
    return Math.floor(Math.random() * imagesBrand.length);
  }

  const btn1 = document.getElementById("btn-ran");
  
  btn1.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundImage = `url('${imagesRandom[randomNumber]}')`;
  });
  
  function getRandomNumber() {
    return Math.floor(Math.random() * imagesRandom.length);
  }
  
  