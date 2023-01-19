let firstSlide = 0;
const data = [
  {
    image:
      "/foto/qendra.jpg",
  },
  {
    image:
      "/foto/fusha2.jpg",
  },
  {
    image:
      "/foto/konviktet2.jpg",
  },
  {
    image:
      "/foto/konv4.jpg",
  },
  
];

let image = document.getElementById("grow");
image.src = data[0].image;

function slide() {
  let image = document.getElementById("grow");
  image.src = data[firstSlide].image;
}

document.getElementById("slider-left").onclick = () => {
  firstSlide !== 0 ? firstSlide-- : (firstSlide = data.length - 1);

  slide();
};

document.getElementById("slider-right").onclick = () => {
  firstSlide < data.length - 1 ? firstSlide++ : (firstSlide = 0);
  slide();
};