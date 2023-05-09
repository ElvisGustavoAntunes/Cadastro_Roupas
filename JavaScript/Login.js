function logar(){
    var usuario = document.getElementById("login");
    var senha = document.getElementById("senha");

    console.log(usuario.value + senha.value);

    if(usuario.value == "admin" && senha.value == "admin"){
        localStorage.setItem("acesso", true);
        window.location.href = "Cadastro.html";
        preventDefault();
    }
}