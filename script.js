function criarQuadrado() {
    let quadradoExterno = document.querySelectorAll('#pixel.board');
    for(let index; index <= 4; index += 1){
        let criarColuna = document.createElement('ul');
        criarColuna.className = 'coluna';
        quadradoExterno.body.appendChild(criarColuna);
    
      for (let elemento; elemento <= 4; elemento += 1) {
          let criarLinha = document.createElement('li');
          criarLinha.className = 'linha';
          criarColuna.body.appendChild(criarLinha);
          
  }  
}
//https://stackoverflow.com/questions/55224589/document-createelementdiv-with-a-class