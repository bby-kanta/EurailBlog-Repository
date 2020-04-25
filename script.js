'use strict';

// 続きを読むボタン
// https://ao-system.net/javascript/code/1002/
(function(window,document){
  let _toggleMenuButton = document.getElementById('toggleMenuButton');
  let _toggleMenu = document.getElementById('toggleMenu');
  let _clientH;
  init();
  function init() {
      _toggleMenu.style.height = 'auto';
      _clientH = _toggleMenu.clientHeight;
      _toggleMenu.style.height = '0px';
      _toggleMenuButton.addEventListener('click',function(){clickToggle();});
  }
  function clickToggle() {
      let lastH = _toggleMenu.style.height;
      _toggleMenu.style.height = (lastH == '' || lastH == '0px') ? _clientH + 'px' : '0px';
      if(_toggleMenuButton.innerHTML == 'さらに表示'){
        _toggleMenuButton.innerHTML = '閉じる';
      } else {
        _toggleMenuButton.innerHTML = 'さらに表示';
      }
  }
})(window,document);


// カウントダウン
function countdown(due){
  const now = new Date()

  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest / 1000) % 60;
  const min = Math.floor(rest / 1000 / 60) % 60;
  const hours = Math.floor(rest / 1000/ 60 /60) % 24;
  const days = Math.floor(rest / 1000 / 60 /60 /24);
  const count = [days,hours,min,sec];

  return count;
}
// カウントダウンの目標の日時（今回は就活情報解禁日）
const goal = new Date(2021,3,1);

function recalc(){
  const counter = countdown(goal);
  document.getElementById('day').textContent = counter[0];
  document.getElementById('hour').textContent = counter[1];
  document.getElementById('min').textContent = String (counter[2]).padStart(2,'0');
  document.getElementById('sec').textContent = String (counter[3]).padStart(2,'0');
  refresh();
}

function refresh(){
  setTimeout(recalc,1000);
}

recalc();


