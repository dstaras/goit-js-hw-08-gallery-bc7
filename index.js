import galleryItems from "./gallery-items.js";
console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  imageLightbox: document.querySelector(".lightbox__image"),
  closeLightboxBtn: document.querySelector(".lightbox__button"),
};
const listImages = galleryItems
  .map(
    (image) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img
          class="gallery__image"
          src="${image.preview}"
          data-source="${image.original}"
          alt="${image.description}"
        />
      </a>
    </li>`
  )
  .join("");

refs.gallery.insertAdjacentHTML("beforeend", listImages);

const setLightBtn = (src = "", alt = "") => {
  refs.imageLightbox.src = src;
  refs.imageLightbox.alt = alt;
};

refs.gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "IMG") return;
  refs.lightbox.classList.add("is-open");
  setLightBtn(event.target.dataset.source, event.target.alt);
});

refs.closeLightboxBtn.addEventListener("click", (event) => {
  refs.lightbox.classList.remove("is-open");
  setLightBtn();
});
