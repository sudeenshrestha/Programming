let images = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg"];
let imageIndex = 0;

function imgCreate() {
  var img = document.createElement("img");
  img.src = images[0];
  img.width = "304";
  img.height = "228";
  img.alt = "Picture";

  document.body.appendChild(img);

  const next = document.getElementById("next");

  next.addEventListener("click", function () {
    let newImageIndex = imageIndex + 1;
    if (newImageIndex >= images.length) {
      newImageIndex = 0;
    }

    const image = images[newImageIndex];
    imageIndex = newImageIndex;
    img.src = image;
    console.log(newImageIndex);
  });

  const previous = document.getElementById("previous");

  previous.addEventListener("click", function () {
    let newImageIndex = imageIndex - 1;
    console.log(newImageIndex);

    if (newImageIndex < 0) {
      newImageIndex = images.length - 1;
    }

    let image = images[newImageIndex];
    imageIndex = newImageIndex;
    img.src = image;
  });
}
imgCreate();
