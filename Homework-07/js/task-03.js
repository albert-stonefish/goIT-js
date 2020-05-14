"use strict";
console.log("task_03");

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

let gallery = document.querySelector("#gallery");
images.forEach((image) => {
  let galleryOption = document.createElement("li");
  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;
  galleryOption.appendChild(img);
  gallery.appendChild(galleryOption);
  img.setAttribute("style", "width: 500px;");
});

gallery.setAttribute(
  "style",
  "display: flex; flex-direction: column; height: 1200px; justify-content: space-evenly;"
);

console.log("...");
