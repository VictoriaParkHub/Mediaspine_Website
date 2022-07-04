"use strict";
window.onload = function () {

    function Scontainer01() {
        document.querySelector('.scontainer01').style.display = 'block';
        document.querySelector('.scontainer02').style.display = 'none';
        document.querySelector('.scontainer03').style.display = 'none';
        //numberactive
        document.getElementById('number__item1').className += ' numberactive';
        document.getElementById('number__item2').classList.remove('numberactive');
        document.getElementById('number__item3').classList.remove('numberactive');
      };

      function Scontainer02() {
        document.querySelector('.scontainer01').style.display = 'none';
        document.querySelector('.scontainer02').style.display = 'block';
        document.querySelector('.scontainer03').style.display = 'none';
        //numberactive
        document.getElementById('number__item2').className += ' numberactive';
        document.getElementById('number__item1').classList.remove('numberactive');
        document.getElementById('number__item3').classList.remove('numberactive');
      };

      function Scontainer03() {
        document.querySelector('.scontainer01').style.display = 'none';
        document.querySelector('.scontainer02').style.display = 'none';
        document.querySelector('.scontainer03').style.display = 'block';
        //numberactive
        document.getElementById('number__item3').className += ' numberactive';
        document.getElementById('number__item1').classList.remove('numberactive');
        document.getElementById('number__item2').classList.remove('numberactive');
      };
    
      document.getElementById('number__item1').addEventListener('click', Scontainer01);
      document.getElementById('number__item2').addEventListener('click', Scontainer02);
      document.getElementById('number__item3').addEventListener('click', Scontainer03);

    
}