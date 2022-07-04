"use strict";


//reference 01

const container = document.querySelector(".cNewscontents__container");
const prevBtn = document.querySelector(".before__btn");
const nextBtn = document.querySelector(".after__btn");

(function addEvent(){
  prevBtn.addEventListener('click', translateContainer.bind(this, 1));
  nextBtn.addEventListener('click', translateContainer.bind(this, -1));
})();

function translateContainer(direction){
  const selectedBtn = (direction === 1) ? '.before__btn' : '.after__btn';
  container.style.transitionDuration = '300ms';
  container.style.transform = `translateX(${direction * (100 / 10)}%)`;
  container.ontransitionend = () => reorganizeEl(selectedBtn);

}

function reorganizeEl(selectedBtn) {
  container.removeAttribute('style');
  (selectedBtn === '.before__btn') ? container.insertBefore(container.lastElementChild, container.firstElementChild): container.appendChild(container.firstElementChild);
}



//reference 02

const container2 = document.querySelector(".cWeathercontents__container");
const prevBtn2 = document.querySelector(".before__btn2");
const nextBtn2 = document.querySelector(".after__btn2");

(function addEvent(){
  prevBtn2.addEventListener('click', translateContainer2.bind(this, 1));
  nextBtn2.addEventListener('click', translateContainer2.bind(this, -1));
})();

function translateContainer2(direction){
  const selectedBtn2 = (direction === 1) ? '.before__btn2' : '.after__btn2';
  container2.style.transitionDuration = '300ms';
  container2.style.transform = `translateX(${direction * (100 / 10)}%)`;
  container2.ontransitionend = () => reorganizeEl2(selectedBtn2);

}

function reorganizeEl2(selectedBtn2) {
  container2.removeAttribute('style');
  (selectedBtn2 === '.before__btn2') ? container2.insertBefore(container2.lastElementChild, container2.firstElementChild): container2.appendChild(container2.firstElementChild);
}



//reference 03

const container3 = document.querySelector(".cTipcontents__container");
const prevBtn3 = document.querySelector(".before__btn3");
const nextBtn3 = document.querySelector(".after__btn3");

(function addEvent(){
  prevBtn3.addEventListener('click', translateContainer3.bind(this, 1));
  nextBtn3.addEventListener('click', translateContainer3.bind(this, -1));
})();

function translateContainer3(direction){
  const selectedBtn3 = (direction === 1) ? '.before__btn3' : '.after__btn3';
  container3.style.transitionDuration = '300ms';
  container3.style.transform = `translateX(${direction * (100 / 10)}%)`;
  container3.ontransitionend = () => reorganizeEl3(selectedBtn3);

}

function reorganizeEl3(selectedBtn3) {
  container3.removeAttribute('style');
  (selectedBtn3 === '.before__btn3') ? container3.insertBefore(container3.lastElementChild, container3.firstElementChild): container3.appendChild(container3.firstElementChild);
}


//reference 04

const container4 = document.querySelector(".cKiosk__container");
const prevBtn4 = document.querySelector(".before__btn4");
const nextBtn4 = document.querySelector(".after__btn4");

(function addEvent(){
  prevBtn4.addEventListener('click', translateContainer4.bind(this, 1));
  nextBtn4.addEventListener('click', translateContainer4.bind(this, -1));
})();

function translateContainer4(direction){
  const selectedBtn4 = (direction === 1) ? '.before__btn4' : '.after__btn4';
  container4.style.transitionDuration = '300ms';
  container4.style.transform = `translateX(${direction * (100 / 10)}%)`;
  container4.ontransitionend = () => reorganizeEl4(selectedBtn4);

}

function reorganizeEl4(selectedBtn4) {
  container4.removeAttribute('style');
  (selectedBtn4 === '.before__btn4') ? container4.insertBefore(container4.lastElementChild, container4.firstElementChild): container4.appendChild(container4.firstElementChild);
}