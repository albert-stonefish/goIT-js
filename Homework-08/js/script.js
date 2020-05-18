"use strict";

import galleryItems from "./gallery-items.js";

let gallery = document.querySelector("ul.js-gallery");
let lightbox = document.querySelector("div.js-lightbox");
let lightboxImage = document.querySelector("img.lightbox__image");
let buttonClose = document.querySelector(
  "button[data-action='close-lightbox']"
);

const openLightbox = function () {
  if (event.target.classList.contains("gallery__image")) {
    lightboxImage.setAttribute("src", event.target.getAttribute("data-hires"));
    lightboxImage.setAttribute("alt", event.target.alt);
    lightbox.classList.add("is-open");
  }
};

const closeLightbox = function () {
  lightbox.classList.remove("is-open");
  lightboxImage.setAttribute("src", "");
};

galleryItems.forEach((item) => {
  let galleryItem = document.createElement("div");
  let galleryImage = document.createElement("img");
  galleryItem.setAttribute("class", "gallery__item");
  galleryImage.setAttribute("class", "gallery__image");
  galleryImage.setAttribute("src", item.preview);
  galleryImage.setAttribute("data-hires", item.original);
  galleryImage.setAttribute("alt", item.description);
  galleryItem.appendChild(galleryImage);
  gallery.appendChild(galleryItem);
});

gallery.addEventListener("click", openLightbox);
buttonClose.addEventListener("click", closeLightbox);
