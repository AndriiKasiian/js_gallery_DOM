'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.querySelector('#largeImg');

  const thumbnails = document.querySelector('#thumbs');

  function changeImage(e) {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'A') {
      e.preventDefault();

      const necessaryLink = e.target.closest('a');
      const newSrc = necessaryLink.getAttribute('href');

      mainImage.setAttribute('src', newSrc);
    }
  }
  thumbnails.addEventListener('click', changeImage);
});
