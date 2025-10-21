/*Esse codigo ainda será muito alterado*/
function logar(){

    var Usuario = document.getElementById("Usuario").value;
    var Senha = document.getElementById("Senha").value;
    var error = document.querySelector(".error")
    

    
    /*Se o If for true o usuario será redirecionado para a pagina inicial*/
    if(Usuario == "admin" && Senha == "admin"){
        location.href = "/home.html";
    }

    /* Se nada for preenchido aparecerá esse alerta*/
    else if(Usuario=="" || Senha == ""){
        input.required.title = ""
    }

    /*Se for false ele cairá no else*/
    else{
        error.style.display = "block"
        error.innerHTML = "Usuario ou senha incorretos"
    }
}