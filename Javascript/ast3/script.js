// const btnPrevious = document.createElement('button');
// btnPrevious.textContent = 'Previous';

// const btnNext = document.createElement('button');
// btnNext.textContent = 'Next';

// const body = document.getElementsByTagName('body')[0];
// body.appendChild(btnNext);
// body.appendChild(btnPrevious);

//////////////////////////////////////////////////////

let images = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg"];

// let currentPhotoCount = 1;
function imgCreate() {
  var img = document.createElement("img");
  img.src = images[0];
  img.width = "304";
  img.height = "228";
  img.alt = "Picture";

  document.body.appendChild(img);
  let currentPhotoCount = 1;

  const next = document.getElementById("next");

  next.addEventListener("click", function () {
    console.log(currentPhotoCount);
    if (currentPhotoCount === 0) {
      img.src = images[0];
      currentPhotoCount++;
      return img.src;
    }
    console.log(currentPhotoCount);
    
    if (currentPhotoCount>images.length){
        currentPhotoCount === images.length-1;
    }
    img.src = images[currentPhotoCount];
    console.log(img.src = images[currentPhotoCount]);
    currentPhotoCount++;
    console.log("finalnext", currentPhotoCount);
    console.log(images.length);

    if (currentPhotoCount === images.length) {
      currentPhotoCount = 0;
    }
  });

  const previous = document.getElementById("previous");

  previous.addEventListener("click", function () {
    
    console.log(currentPhotoCount);
    img.src = images[currentPhotoCount-2];
    console.log(img.src);
    console.log(currentPhotoCount);

    currentPhotoCount--;
    console.log("final:", currentPhotoCount);
    if(currentPhotoCount <2){
        currentPhotoCount = images.length+1;
    }

    
    // previousCount = images.length;
  });
}
imgCreate();
