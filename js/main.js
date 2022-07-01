const modifiers = {
  ImgThumbnailActive: 'img-showcase__thumbnail--active'
};

const elSiteHeaderCartLink = document.querySelector('.js-site-header-cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');


if (elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener('click', function (evt) {
    evt.preventDefault();

    elSiteHeaderCartModal.classList.toggle('site-header__cart-modal--open')
  })
}


//Image showcase

const elsImgShowcaseThumbnailsButton = document.querySelectorAll('.js-img-showcase-thumbnails-button');
const elsImgThumbnail = document.querySelectorAll('.img-showcase__thumbnail');

elsImgShowcaseThumbnailsButton.forEach(function (elButton) {
  elButton.addEventListener('click' , function () {
    // Removeactive state from all buttons
    elsImgThumbnail.forEach(function (elImgThumbnail) {
      elImgThumbnail.classList.remove(modifiers.ImgThumbnailActive)
    });
    //Add active state to clicked button
    elButton.parentElement.classList.add(modifiers.ImgThumbnailActive)
  });
});