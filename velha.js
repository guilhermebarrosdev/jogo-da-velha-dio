let jogador,
  vencedor = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado');
let vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('X');

function escolherQuadrado(id) {
  if (vencedor !== null) {
    return;
  }

  let quadrado = document.getElementById(id);
  if (quadrado.textContent !== '-') {
    return;
  }

  quadrado.textContent = jogador;
  quadrado.style.color = '#000';

  if (jogador === 'X') {
    jogador = 'O';
  } else {
    jogador = 'X';
  }

  mudarJogador(jogador);
  checaVencedor();
}

function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.textContent = jogador;
}

function checaVencedor() {
  let quadrado1 = document.getElementById(1);
  let quadrado2 = document.getElementById(2);
  let quadrado3 = document.getElementById(3);
  let quadrado4 = document.getElementById(4);
  let quadrado5 = document.getElementById(5);
  let quadrado6 = document.getElementById(6);
  let quadrado7 = document.getElementById(7);
  let quadrado8 = document.getElementById(8);
  let quadrado9 = document.getElementById(9);

  if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
    mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
    mudarVencedor(quadrado1);
    return;
  }

  if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
    mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
    mudarVencedor(quadrado4);
    return;
  }

  if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
    mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
    mudarVencedor(quadrado7);
    return;
  }

  if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
    mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
    mudarVencedor(quadrado1);
    return;
  }

  if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
    mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
    mudarVencedor(quadrado2);
    return;
  }

  if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
    mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
    mudarVencedor(quadrado3);
    return;
  }

  if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
    mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
    mudarVencedor(quadrado1);
    return;
  }

  if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
    mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
    mudarVencedor(quadrado3);
  }
}

function mudarVencedor(quadrado) {
  vencedor = quadrado.textContent;
  vencedorSelecionado.textContent = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
  quadrado1.style.background = '#0f0';
  quadrado2.style.background = '#0f0';
  quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
  let eigual = false;

  if (
    quadrado1.textContent !== '-' &&
    quadrado1.textContent === quadrado2.textContent &&
    quadrado2.textContent === quadrado3.textContent
  ) {
    eigual = true;
  }

  return eigual;
}

function reiniciar() {
  vencedor = null;
  vencedorSelecionado.textContent = '';

  for (let i = 1; i <= 9; i++) {
    let quadrado = document.getElementById(i);
    quadrado.style.background = '#eee';
    quadrado.style.color = '#eee';
    quadrado.textContent = '-';
  }

  mudarJogador('X');
}
