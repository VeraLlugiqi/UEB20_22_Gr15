let firstSlide = 0;
const data = [
  {
    image:
      "https://www.epokaere.com/wp-content/uploads/2020/08/konviktet.jpg",
  },
  {
    image:
      "https://kallxo.com/wp-content/uploads/2018/04/Mbjellja-e-fidaneve-n%C3%AB-Qendr%C3%ABn-e-Student%C3%ABve-768x576.jpg",
  },
  {
    image:
      "https://www.epokaere.com/wp-content/uploads/2020/08/konviktet.jpg",
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