"use strict";

import galleryItems from "./gallery-items.js";

const refs = {
  gallery: document.querySelector("ul.js-gallery"),
  lightbox: document.querySelector("div.js-lightbox"),
  lightboxImage: document.querySelector("img.lightbox__image"),
  buttonClose: document.querySelector("button[data-action='close-lightbox']"),
};

const openLightbox = function (event) {
  console.log(event);
  if (event.target.classList.contains("gallery__image")) {
    refs.lightboxImage.setAttribute(
      "src",
      event.target.getAttribute("data-hires")
    );
    refs.lightboxImage.setAttribute("alt", event.target.alt);
    refs.lightbox.classList.add("is-open");
  }
};

const closeLightbox = function (event) {
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImage.setAttribute("src", "");
};

const fragment = document.createDocumentFragment();

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("div");
  const galleryImage = document.createElement("img");
  galleryItem.setAttribute("class", "gallery__item");
  galleryImage.setAttribute("class", "gallery__image");
  galleryImage.setAttribute("src", item.preview);
  galleryImage.setAttribute("data-hires", item.original);
  galleryImage.setAttribute("alt", item.description);
  galleryItem.appendChild(galleryImage);
  fragment.appendChild(galleryItem);
});

refs.gallery.appendChild(fragment);
refs.gallery.addEventListener("click", openLightbox);
refs.buttonClose.addEventListener("click", closeLightbox);
