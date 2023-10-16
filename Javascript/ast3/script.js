// const btnPrevious = document.createElement('button');
// btnPrevious.textContent = 'Previous';

// const btnNext = document.createElement('button');
// btnNext.textContent = 'Next';

// const body = document.getElementsByTagName('body')[0];
// body.appendChild(btnNext);
// body.appendChild(btnPrevious);

//////////////////////////////////////////////////////

var photos = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg"];
function imgCreate() {
  // for (let i=0; i<photos.length;i++){
  var img = document.createElement("img");
  img.src = photos[0];
  img.width = "304";
  img.height = "228";
  img.alt = "Picture";

  document.body.appendChild(img);

  const next = document.getElementById("next");

  let nextPhotoCount = 1;

  next.addEventListener("click", function () {
    if (nextPhotoCount === 0) {
      img.src = photos[0];
      nextPhotoCount++;

      return img.src;
    }
    img.src = photos[nextPhotoCount];
    nextPhotoCount++;

    if (nextPhotoCount === photos.length) {
      nextPhotoCount = 0;
    }
  });
  
//   countPrevious = 1;
  const previous = document.getElementById("previous");

  previous.addEventListener("click", function () {
    img.src = photos[nextPhotoCount - 1];
    console.log(img.src);
    console.log(nextPhotoCount);

    nextPhotoCount--;

    if (nextPhotoCount === 0) {
      img.src = photos[photos.length-1];
      return;
    }
    // countPrevious = photos.length-1;
  });
}
imgCreate();
