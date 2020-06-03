const createGallery = (images, delay = 10000) => {
  const galleryThumbs = document.createElement("div");
  galleryThumbs.className = "gallery-thumbs";
  galleryThumbs.style.marginRight = "1rem";
  galleryThumbs.style.width = "10%";
  galleryThumbs.style.cursor = "pointer";

  const galleryContainer = document.createElement("div");
  galleryContainer.className = "gallery-container";
  galleryContainer.style.width = "90%";
  galleryContainer.style.overflow = "hidden";
  galleryContainer.style.maxHeight = "500px";

  const swiperWrapper = document.createElement("div");
  swiperWrapper.className = "swiper-wrapper";

  images.forEach(i => {
    const image = document.createElement("img");
    image.style.maxWidth = "100%";
    image.style.maxHeight = "100%";
    image.src = i;

    const swiperSlide = document.createElement("div");
    swiperSlide.className = "swiper-slide";
    swiperSlide.appendChild(image);

    swiperWrapper.appendChild(swiperSlide);
  });

  const swipperWrapperThumbs = swiperWrapper.cloneNode(true);

  galleryThumbs.appendChild(swipperWrapperThumbs);
  galleryContainer.appendChild(swiperWrapper.cloneNode(true));

  const gallery = document.getElementsByClassName("gallery")[0];

  gallery.appendChild(galleryThumbs);
  gallery.appendChild(galleryContainer);

  var mySwiper = new Swiper(".gallery-container", {
    autoplay: {
      delay
    },
    loop: true,
    thumbs: {
      swiper: {
        el: ".gallery-thumbs",
        slidesPerView: images.length,
        direction: "vertical"
      }
    }
  });
};
