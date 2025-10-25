/*Esse codigo ainda será muito alterado*/
function logar(){

    const Usuario = document.getElementById("Usuario").value;
    const Senha = document.getElementById("Senha").value;
    const error = document.querySelector(".error")
    const Username = document.querySelector(".Username")
    const Password = document.querySelector(".Password")
   
    

    
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
        Username.style.outline = "1px solid red"
        Username.style.background = "rgba(255, 122, 122, 0.3)"
        Password.style.outline = "1px solid red"
        Password.style.background = "rgba(255, 122, 122, 0.3)"
        


       

       
        
    }
}