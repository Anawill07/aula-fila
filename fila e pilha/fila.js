//sistema de fila de um banco
//um usuario seleciona uma opção: senha normal, senha preferencial
let normal = []
let preferencial = []
let ultimoChamado = null;  

// dependendo da seleção, ele é colocado em uma fila diferente
function adicionarNaFila(selecao, usuario) {
    if (selecao === 'normal') {
      normal.push(usuario);
      console.log(`Usuário ${usuario} foi adicionado na fila normal.`);
    } else if (selecao === 'preferencial') {
      preferencial.push(usuario);
      console.log(`Usuário ${usuario} foi adicionado na fila preferencial.`);
    } else { 
      console.log("Seleção inválida!");
    }
}
   function chamarUsuario() {
   let usuario;

    if (preferencial.length > 0) {
        usuario = preferencial.shift();
      console.log(`Chamando usuário ${usuario} da fila preferencial`);
    } else if (normal.length > 0) {
        usuario = normal.shift(); 
      console.log(`Chamando usuário ${usuario} da fila normal.`);
    } else {
      console.log('Não há usuários na fila para atendimento.');
    }
  }
adicionarNaFila('normal', "Ana");
adicionarNaFila('preferencial', "Kaua");
adicionarNaFila('normal', "Heitor");
adicionarNaFila('preferencial', "Beatriz");
adicionarNaFila('normal', "Dennis");

chamarUsuario(); 
chamarUsuario(); 
chamarUsuario();
chamarUsuario(); 
chamarUsuario(); 
