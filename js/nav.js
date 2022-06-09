//scrolling 변수
const nav = document.querySelector("#nav");
const headerHeight = nav.getBoundingClientRect().height;
const mainmenu = document.querySelectorAll("#mainmenu");
//문의하기 버튼 변수
const contactbtn = document.querySelector(".contactbtn");

//submenubg 변수
const submenubg = document.querySelector('.nav__submenu__bg');
const submenucontainer = document.querySelectorAll('.nav__submenu__container');


//scrolling -> headerHeight값으로 if문
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.setAttribute("style", "background-color:white");
    document.getElementById("logo").src="css/img/logo2.png";
    mainmenu.forEach(mainmenu => mainmenu.setAttribute("style", "color:black"));
    contactbtn.classList.remove("contactbtn");
    contactbtn.classList.add("contactbtn2");
  }
  else {
    nav.setAttribute("style", "background: transparent;");
    document.getElementById("logo").src="css/img/logo.png";
    mainmenu.forEach(mainmenu => mainmenu.setAttribute("style", "color:white"));
    contactbtn.classList.remove("contactbtn2");
    contactbtn.classList.add("contactbtn");
  }
});

 //mouseover하면 submenubg가 보임
function mouseOver(){
  submenubg.setAttribute("style", "visibility: visible");
  document.getElementById("logo").src="css/img/logo2.png";
  //queryselectorAll은 반복문인 forEach와 함께 사용해준다. (계속 한개만 선택되니까)
  //mainmenu.forEach(mainmenu => mainmenu.setAttribute("style", "color:black")); -> 화살표 함수
  mainmenu.forEach(function(mainmenu) {
    mainmenu.setAttribute("style", "color:black");
  }
  );
  submenucontainer.forEach(function(submenucontainer) {
    submenucontainer.setAttribute("style", "display:block");
  }
  );
}
function mouseOut(){
  submenubg.setAttribute("style", "visibility: hidden");
  document.getElementById("logo").src="css/img/logo.png";
  mainmenu.forEach(mainmenu => mainmenu.setAttribute("style", "color:white"));
  submenucontainer.forEach(function(submenucontainer) {
    submenucontainer.setAttribute("style", "display:none");
  }
  );

  if(window.scrollY > headerHeight){
    mainmenu.forEach(mainmenu => mainmenu.setAttribute("style", "color:black"));
    document.getElementById("logo").src="css/img/logo2.png";
  }
};
