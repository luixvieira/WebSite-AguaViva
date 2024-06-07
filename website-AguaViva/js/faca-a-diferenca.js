//Recuperando o token através do sessionStorage
let tokenUser = sessionStorage.getItem("token");
if(tokenUser != "" && tokenUser != undefined){
    //Recuperando o objeto do usuario logado.
    const usuario = JSON.parse(localStorage.getItem("usuario-logado"));
}
else{
    window.location.href = "../index.html";
}