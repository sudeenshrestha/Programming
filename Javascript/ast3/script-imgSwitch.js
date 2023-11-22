let images = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg"];
let imageIndex = 0;

// images.forEach(transition);

// function transition(){
//   if (i === imageIndex){
//     .style.opacity = 0.5;
//     return;
//   }
//   image.style.opacity = 1;
// };

function imgCreate() {
  var img = document.createElement("img");
  img.src = images[0];
  img.width = "304";
  img.height = "228";
  img.alt = "Picture";
  img.classList.add("myImg");
  
  document.getElementById("container").appendChild(img);

  document.getElementById("previous").style.color = "red";

  const next = document.getElementById("next");

  next.addEventListener("click", function () {
    let newImageIndex = imageIndex + 1;
    img.classList.toggle('fade');
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
    img.classList.toggle('fade');
    img.style.opacity = 1;
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


