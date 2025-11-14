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

    if (Usuario.value === "" || Senha.value === "") {
        error.style.display = "block";
        error.style.width = "45%"
        error.style.left = "80px"
        error.innerHTML = "Há campos vazios";
        return;
    }

    /*O for each varrera a ListaUser no Localstorage afim de poder validar o login*/
    ListaUser.forEach((item) => {
        if (Usuario.value == item.NickUsuario || Senha.value == item.SenhaUsuario) {

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

<<<<<<< HEAD
        if (Usuario.value == UserValid.usuario && Senha.value == UserValid.senha) {
            setTimeout(() => {
                window.location.href = "/home.html"
            }, 1000)

            /*Cria um token para o usuario garantindo que ele está autenticado no site*/
            let token = Math.random().toString(16).substring(2)
            localStorage.setItem("token", token)

            error.style.display = "block"
            error.style.width = "78%"
            error.style.left = "34px"
            error.style.background = "rgba(26, 216, 12, 0.412)"
            error.innerHTML = "Usuario encontrado com sucesso!"

        }



        else {
            error.style.display = "block"
            error.style.width = "59%"
            error.style.left = "65px"
            error.innerHTML = "Usuario não encontrado"
        }
=======
    if (Usuario.value == UserValid.usuario && Senha.value == UserValid.senha) {
        window.location.href = "/home.html"
        /*Cria um token para o usuario garantindo que ele está autenticado no site*/
        let token = Math.random().toString(16).substring(2)
        localStorage.setItem("token", token)
        localStorage.setItem("userLogado", JSON.stringify(UserValid));
    }
    
    else {
        error.style.display = "block"
        error.style.width = "59%"
        error.innerHTML = "Usuario não encontrado"
    }
>>>>>>> 1ceaee6f2efecbb3dbc5b96f51b6ee33e3dda914



        // Oculta erro quando o usuário começa a digitar
<<<<<<< HEAD
        [Usuario, Senha].forEach((input) => {
            input.addEventListener("keyup", () => {

                if (Usuario.value || Senha.value) {
                    error.style.display = "none";
                }

            })


        })

=======
    [Usuario, Senha].forEach((input) => {
        input.addEventListener("keyup", () => {
                
            if (Usuario.value || Senha.value) {
                error.style.display = "none";
            }            
        });
>>>>>>> 1ceaee6f2efecbb3dbc5b96f51b6ee33e3dda914
    });

    
}
