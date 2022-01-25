let corGuardada ='black';

function selecionarCor(div) {
  objetoDiv = document.getElementById(div);
  corGuardada = window.getComputedStyle(objetoDiv).backgroundColor;
}

function colorirPixel(div) {
  document.getElementById(div).style.backgroundColor = corGuardada;
}

const botaoLimpar = document.querySelector('#clear-board');
function limparPixel() {
  for(let index = 0; index < document.getElementsByClassName('pixel').length; index +=1) {
    document.getElementsByClassName('pixel')[index].style.backgroundColor = 'white';
  }
}
botaoLimpar.addEventListener('click', limparPixel);

// Referencias:
// https://stackoverflow.com/questions/1887104/how-to-get-the-background-color-of-an-html-element
// https://stackoverflow.com/questions/9681601/how-can-i-count-the-number-of-elements-with-same-class 