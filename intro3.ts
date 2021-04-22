interface DadosDoUsuario {
  id: string, nome: string, email: string
}

//function cadastrarUsuario (dadosDoUsuario: DadosDoUsuario) {
 // console.log(dadosDoUsuario.id, dadosDoUsuario.nome, dadosDoUsuario.email)
//}
function cadastrarUsuario ({id, nome, email}: DadosDoUsuario) {
  console.log(id, nome, email)
  }// desestruturação

class CadastrarAdministrador {
  cadastro() {
    cadastrarUsuario("45646jkhghj", "Roberto", "sejaluz.roberto@gmail.com")
  }
}