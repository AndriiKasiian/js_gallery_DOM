'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.querySelector('#largeImg');

  const thumbnails = document.querySelector('#thumbs');

  function changeImage(e) {
    const clickedImage = e.target.tagName === 'IMG' ? e.target : null;
    const necessaryLink = clickedImage ? clickedImage.closest('a') : null;

    if (clickedImage && necessaryLink) {
      e.preventDefault();

      const newSrc = necessaryLink.getAttribute('href');

      mainImage.setAttribute('src', newSrc);
    }
  }
  thumbnails.addEventListener('click', changeImage);
});
