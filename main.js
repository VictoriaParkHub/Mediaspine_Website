'use strict';

//reference

const container = document.querySelector(".reference__container");
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



//display

window.onload = function () {
    
function OneClick() {
    document.querySelector('.oneclick').style.display = 'block';
    document.querySelector('.twoclick').style.display = 'none';
    document.querySelector('.threeclick').style.display = 'none';
    document.querySelector('.fourclick').style.display = 'none';
    //타이틀 font-weight변경 (선택된 모습)
    document.getElementById('h2title01').className += ' h2active';
    document.getElementById('h2title02').classList.remove('h2active');
    document.getElementById('h2title03').classList.remove('h2active');
    document.getElementById('h2title04').classList.remove('h2active');
};

function TwoClick() {
    document.querySelector('.oneclick').style.display = 'none';
    document.querySelector('.twoclick').style.display = 'block';
    document.querySelector('.threeclick').style.display = 'none';
    document.querySelector('.fourclick').style.display = 'none';
    //타이틀 font-weight변경 (선택된 모습)
    document.getElementById('h2title02').className += ' h2active';
    document.getElementById('h2title01').classList.remove('h2active');
    document.getElementById('h2title03').classList.remove('h2active');
    document.getElementById('h2title04').classList.remove('h2active');
};

function ThreeClick() {
    document.querySelector('.oneclick').style.display = 'none';
    document.querySelector('.twoclick').style.display = 'none';
    document.querySelector('.threeclick').style.display = 'block';
    document.querySelector('.fourclick').style.display = 'none'; 
    //타이틀 font-weight변경 (선택된 모습)
    document.getElementById('h2title03').className += ' h2active';
    document.getElementById('h2title01').classList.remove('h2active');
    document.getElementById('h2title02').classList.remove('h2active');
    document.getElementById('h2title04').classList.remove('h2active');
};

function FourClick() {
    document.querySelector('.oneclick').style.display = 'none';
    document.querySelector('.twoclick').style.display = 'none';
    document.querySelector('.threeclick').style.display = 'none';
    document.querySelector('.fourclick').style.display = 'block';
    //타이틀 font-weight변경 (선택된 모습)
    document.getElementById('h2title04').className += ' h2active';
    document.getElementById('h2title01').classList.remove('h2active');
    document.getElementById('h2title02').classList.remove('h2active');
    document.getElementById('h2title03').classList.remove('h2active');    
};

    document.getElementById('displayicon01').addEventListener('click', OneClick);
    document.getElementById('displayicon02').addEventListener('click', TwoClick);
    document.getElementById('displayicon03').addEventListener('click', ThreeClick);
    document.getElementById('displayicon04').addEventListener('click', FourClick);

};

