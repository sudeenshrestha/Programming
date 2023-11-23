//  Dark Mode Toggle
document.getElementById("toggle").addEventListener("change", function () {
      if (this.checked) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });

// AST3: Create an Image Slider

//Declarations
const imgContainer = document.getElementById("container");
images = ["./assets/1.jpg","./assets/2.jpg","./assets/3.jpg","./assets/4.jpg"];

let newContainer = document.getElementById("newContainer");

for (let index=0; index < images.length; index++) {
  let img = document.createElement("img");
  img.src = images[index];
  img.classList.add('w-64','h-48');
  newContainer.appendChild(img);
}

const next = document.getElementById("next")

next.addEventListener("click", function () {
  newContainer.style.marginLeft ="-256px"
});