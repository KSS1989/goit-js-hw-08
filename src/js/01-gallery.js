// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const item = [];

galleryItems.forEach((el) => {
  const galleryLink = document.createElement("a");
  galleryLink.className = "gallery__link";
  galleryLink.href = el.original;
  const galleryImg = document.createElement("img");
  galleryImg.className = "gallery__image";
  galleryImg.src = el.preview;
  galleryImg.setAttribute("data-source", el.original);
  galleryImg.alt = el.description;

  galleryLink.append(galleryImg);
  item.push(galleryLink);
});
gallery.append(...item);

new SimpleLightbox('.gallery__link');