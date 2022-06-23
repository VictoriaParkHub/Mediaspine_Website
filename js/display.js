"use strict";


//reference

const container = document.querySelector(".dsContent__container");
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


//infinet roof

function move(){

    var curIndex = 0;
  
    setInterval(function(){
        container.style.transition = 'all 10s easy-in-out';
        container.style.transform = "translate3d(-"+200*(curIndex+1)+"px, 0px, 0px)";
  
        curIndex++;
  
        if(curIndex === 4){
            curIndex = -1;
        }
  
        reorganizeEl();
  
    },2000);
  }
  
  document.addEventListener("DOMContentLoaded",function(){
    move();
  });