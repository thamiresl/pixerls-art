let corGuardada ='black';

function selecionarCor(div) {
  let objetoDiv = document.getElementById(div);
  corGuardada = window.getComputedStyle(objetoDiv).backgroundColor;
  document.getElementsByClassName('selected')[0].classList.remove('selected');
  objetoDiv.classList.add('selected');
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

function aumentarBoard(quadrado) {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';
  for (let index = 0; index < quadrado; index += 1) {
    const linha = document.createElement('section');
    linha.className = 'line';
    for (let index = 0; index < quadrado; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      linha.appendChild(pixel);
    }
    pixelBoard.appendChild(linha);
  }
}

function tamanhoLimite() {
  let valor = document.querySelector('#board-size').value;
  if (valor === '') {
    alert('Board inválido!');
  }
  if (valor < 5) {
    valor = 5;
  }
  if (valor > 50) {
    valor = 50;
  }
  aumentarBoard(valor);
}

const botaoAdicionar = document.querySelector('#generate-board');
botaoAdicionar.addEventListener('click', tamanhoLimite);

// Referencias:
// https://stackoverflow.com/questions/1887104/how-to-get-the-background-color-of-an-html-element
// https://stackoverflow.com/questions/9681601/how-can-i-count-the-number-of-elements-with-same-class 