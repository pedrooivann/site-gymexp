function entrar() {
    let Usuario = document.getElementById("Usuario")
    let Senha = document.getElementById("Senha")
    let error = document.querySelector(".error")
    let ListaUser = [] /*array vazio*/
    let UserValid = {
        nome: "",
        sobrenome: "",
        email: "",
        usuario: "",
        senha: "",
        telefone: "",
        idade: "",

        /*objeto com os campos que desejo pegar do localstorage*/
}
    ListaUser = JSON.parse(localStorage.getItem("ListaUser"))

    /*O for each varrera a ListaUser no Localstorage afim de poder validar o login*/
    ListaUser.forEach((item) => {
        if (Usuario.value == item.NickUsuario || item.EmailUsuario && Senha.value == item.SenhaUsuario) {

            UserValid = {
                nome: item.NomeUsuario,
                sobrenome: item.SobrenomeUsuario,
                email: item.EmailUsuario,
                usuario: item.NickUsuario,
                senha: item.SenhaUsuario,
                telefone: item.TelefoneUsuario,
                idade: item.IdadeUsuario,
            }
          }
     });

    
    if(Usuario.value == UserValid.usuario || UserValid.email && Senha.value == UserValid.senha){
        alert("AEIOU") /*será alterado em breve*/

        /*Cria um token para o usuario garantindo que ele está autenticado no site*/
        let token = Math.random().toString(16).substring(2)
        localStorage.setItem("token", token)

    }
    else{
       alert("Deu ruim menor") /*será alterado em breve*/
    }
}

/*Falta implementar a visualização de senha, mensagens de alerta para campos vazios e outras coisas a mais*/









