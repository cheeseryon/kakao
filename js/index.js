let headerBase = document.querySelector('.headerBase');
let gnbList = document.querySelectorAll('.gnbList');
let subList = document.querySelectorAll('.subList');
let logo = document.querySelector('.logo > a');
let gnbArea = document.querySelector('.gnbArea');


for (let i = 0; i < gnbList.length; i++) {
  gnbList[i].addEventListener('mouseover', function () {
    headerBase.style.transition = 'all 0.2s';
    headerBase.style.backgroundColor = 'white';
    logo.style.color = '#333';
    gnbArea.style.transition = 'all 0.3s'; 
    gnbArea.style.color = '#333';
    this.style.color = '#f1d100';
  });

  gnbList[i].addEventListener('mouseout', function () {
    gnbArea.style.color = 'white';
    headerBase.style.backgroundColor = '#f1d100';
    logo.style.color = '';
    this.style.color = '';
  });
}

/* mainArrow */

let paginationElement = document.querySelector(".swiper-pagination");
paginationElement.style.bottom = "0px";
paginationElement.style.left = "-45%";

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

let swiper = new Swiper(".liveSwiper", {
  slidesPerView: 3,
  loop: true,
  effect: "slide",
  spaceBetween: 60,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 3000)}s`;
    },
    speed: 5000,
  }
});





