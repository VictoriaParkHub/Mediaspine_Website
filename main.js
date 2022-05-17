'use strict';

//scrolling
const nav = document.querySelector("#nav");
const headerHeight = nav.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    nav.setAttribute("style", "background: white;");
  } else {
    nav.setAttribute("style", "background: transparent;");
  }
});



//home
var carousel = document.getElementById('home__carousel');
var slides = 3;
var speed = 7000; // 5 seconds

function carouselHide(num) {
    indicators[num].setAttribute('data-state', '');
    slides[num].setAttribute('data-state', '');

    slides[num].style.opacity=0;
}

function carouselShow(num) {
    indicators[num].checked = true;
    indicators[num].setAttribute('data-state', 'active');
    slides[num].setAttribute('data-state', 'active');

    slides[num].style.opacity=1;
}

function setSlide(slide) {
    return function() {
        // Reset all slides
        for (var i = 0; i < indicators.length; i++) {
            indicators[i].setAttribute('data-state', '');
            slides[i].setAttribute('data-state', '');
            
            carouselHide(i);
    
        }

        // Set defined slide as active
        indicators[slide].setAttribute('data-state', 'active');
        slides[slide].setAttribute('data-state', 'active');
        carouselShow(slide);

        // Stop the auto-switcher
        clearInterval(switcher);
    };
}

function switchSlide() {
    var nextSlide = 0;

    // Reset all slides
    for (var i = 0; i < indicators.length; i++) {
        // If current slide is active & NOT equal to last slide then increment nextSlide
        if ((indicators[i].getAttribute('data-state') == 'active') && (i !== (indicators.length-1))) {
            nextSlide = i + 1;
        }

        // Remove all active states & hide
        carouselHide(i);
    }

    // Set next slide as active & show the next slide
    carouselShow(nextSlide);
}

if (carousel) {
    var slides = carousel.querySelectorAll('.home__item');
    var indicators = carousel.querySelectorAll('.home__indicator');

    var switcher = setInterval(function() {
        switchSlide();
    }, speed);

    for (var i = 0; i < indicators.length; i++) {
        indicators[i].addEventListener("click", setSlide(i));
    }
}



window.onload = function () {


//클릭했을 때 movebar width조정
function Move1() {
  document.querySelector('.movebar__move').style.width='33.3%';
  //font-weight (선택했을 때 폰트 굵기 변경)
  document.getElementById('indicator01').className += ' fontactive';
  document.getElementById('indicator02').classList.remove('fontactive');
  document.getElementById('indicator03').classList.remove('fontactive');
}
function Move2() {
  document.querySelector('.movebar__move').style.width='66.6%';
  //font-weight (선택했을 때 폰트 굵기 변경)
  document.getElementById('indicator02').className += ' fontactive';
  document.getElementById('indicator01').classList.remove('fontactive');
  document.getElementById('indicator03').classList.remove('fontactive');
}
function Move3() {
  document.querySelector('.movebar__move').style.width='100%';
  //font-weight (선택했을 때 폰트 굵기 변경)
  document.getElementById('indicator03').className += ' fontactive';
  document.getElementById('indicator01').classList.remove('fontactive');
  document.getElementById('indicator02').classList.remove('fontactive');
}

document.getElementById('indicator01').addEventListener('click', Move1);
document.getElementById('indicator02').addEventListener('click', Move2);
document.getElementById('indicator03').addEventListener('click', Move3);



//display

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
    //li active(border-bottom 파란색으로 변경된 모습)
    document.getElementById('bottom01').className += ' bottomactive';
    document.getElementById('bottom02').classList.remove('bottomactive');
    document.getElementById('bottom03').classList.remove('bottomactive');
    document.getElementById('bottom04').classList.remove('bottomactive');
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
    //li active(border-bottom 파란색으로 변경된 모습)
    document.getElementById('bottom02').className += ' bottomactive';
    document.getElementById('bottom01').classList.remove('bottomactive');
    document.getElementById('bottom03').classList.remove('bottomactive');
    document.getElementById('bottom04').classList.remove('bottomactive');

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
    //li active(border-bottom 파란색으로 변경된 모습)
    document.getElementById('bottom03').className += ' bottomactive';
    document.getElementById('bottom01').classList.remove('bottomactive');
    document.getElementById('bottom02').classList.remove('bottomactive');
    document.getElementById('bottom04').classList.remove('bottomactive');

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
    //li active(border-bottom 파란색으로 변경된 모습)
    document.getElementById('bottom04').className += ' bottomactive';
    document.getElementById('bottom01').classList.remove('bottomactive');
    document.getElementById('bottom02').classList.remove('bottomactive');
    document.getElementById('bottom03').classList.remove('bottomactive');

};

    document.getElementById('displayicon01').addEventListener('click', OneClick);
    document.getElementById('displayicon02').addEventListener('click', TwoClick);
    document.getElementById('displayicon03').addEventListener('click', ThreeClick);
    document.getElementById('displayicon04').addEventListener('click', FourClick);



//system


    function OneClick2() {
      document.querySelector('.oneclick2').style.display = 'block';
      document.querySelector('.twoclick2').style.display = 'none';
      document.querySelector('.threeclick2').style.display = 'none';
      document.querySelector('.fourclick2').style.display = 'none';
      //타이틀 font-weight변경 (선택된 모습)
      document.getElementById('system01').className += ' active';
      document.getElementById('system02').classList.remove('active');
      document.getElementById('system03').classList.remove('active');
      document.getElementById('system04').classList.remove('active');
  };
  
  function TwoClick2() {
      document.querySelector('.oneclick2').style.display = 'none';
      document.querySelector('.twoclick2').style.display = 'block';
      document.querySelector('.threeclick2').style.display = 'none';
      document.querySelector('.fourclick2').style.display = 'none';
      //타이틀 font-weight변경 (선택된 모습)
      document.getElementById('system02').className += ' active';
      document.getElementById('system01').classList.remove('active');
      document.getElementById('system03').classList.remove('active');
      document.getElementById('system04').classList.remove('active');
  };
  
  function ThreeClick2() {
      document.querySelector('.oneclick2').style.display = 'none';
      document.querySelector('.twoclick2').style.display = 'none';
      document.querySelector('.threeclick2').style.display = 'block';
      document.querySelector('.fourclick2').style.display = 'none'; 
      //타이틀 font-weight변경 (선택된 모습)
      document.getElementById('system03').className += ' active';
      document.getElementById('system01').classList.remove('active');
      document.getElementById('system02').classList.remove('active');
      document.getElementById('system04').classList.remove('active');
  };
  
  function FourClick2() {
      document.querySelector('.oneclick2').style.display = 'none';
      document.querySelector('.twoclick2').style.display = 'none';
      document.querySelector('.threeclick2').style.display = 'none';
      document.querySelector('.fourclick2').style.display = 'block';
      //타이틀 font-weight변경 (선택된 모습)
      document.getElementById('system04').className += ' active';
      document.getElementById('system01').classList.remove('active');
      document.getElementById('system02').classList.remove('active');
      document.getElementById('system03').classList.remove('active');
  };
  
      document.getElementById('system01').addEventListener('click', OneClick2);
      document.getElementById('system02').addEventListener('click', TwoClick2);
      document.getElementById('system03').addEventListener('click', ThreeClick2);
      document.getElementById('system04').addEventListener('click', FourClick2);

};


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
