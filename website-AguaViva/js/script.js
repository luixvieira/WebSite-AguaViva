//Inserindo a lista no localStorage se ela não existir;
if(!localStorage.getItem("base-dados")){
    //Criando uma lista de usuários:
let listaUsuarios = [
    {txtNm:"João das Couves", txtEmail:"jo@email.com",txtSenha:"123456"},
    {txtNm:"Mario Willians", txtEmail:"ma@email.com",txtSenha:"123456"},
    {txtNm:"Luna Chaves", txtEmail:"lu@email.com",txtSenha:"123456"},
];
    localStorage.setItem("base-dados", JSON.stringify(listaUsuarios));
}
 
const alteraVisao = (inputSenha)=>{
    if(inputSenha.type == "password"){
        inputSenha.setAttribute("type","text");
    }else{
        inputSenha.setAttribute("type","password");
    }
}
 
let iconEye = document.querySelector("i");
iconEye.addEventListener('click', function(){
   
    let inputSenha = document.querySelector("#idSenha");
 
    if(this.className == "fa-regular fa-eye-slash" ){
        this.setAttribute("class","fa-regular fa-eye");
        inputSenha.setAttribute("type","text");
    }else{
        this.setAttribute("class","fa-regular fa-eye-slash");
        inputSenha.setAttribute("type","password");
    }
});
 
function validaCampos(input1,input2) {
 
    //Recuperando a base de dados do localStorage:
    let listaUsuarios = JSON.parse(localStorage.getItem("base-dados"));
 
    //Recuperando o elemento da msg do usuario.
    const elMsg = document.querySelector(".valida");
   
    for (let x = 0; x < listaUsuarios.length; x++) {
        if((listaUsuarios[x].txtEmail == input1.value) && (listaUsuarios[x].txtSenha == input2.value)){
        if((listaUsuarios[x].txtEmail == input1.value) && (listaUsuarios[x].txtSenha == input2.value)){
 
            //Criando um objeto no localStorage
            localStorage.setItem("usuario-logado", JSON.stringify(listaUsuarios[x]));
 
            const userToken = Math.random().toString(16).substring(2, 5)+Math.random().toString(16).substring(2, 5);
 
            sessionStorage.setItem("token", userToken);
           //Atribuir uma nova classe ao elemento de msg do usuario.
           elMsg.setAttribute("class","sucesso");
           elMsg.innerText = "Login realizado com SUCESSSO!";
 
           setTimeout(()=>{
                elMsg.setAttribute("class","valida");
                elMsg.innerText = "";
                window.location.href = "../paginas-informativas/faca-a-diferenca.html";
           },3000);
            return false;
        }
    }
}
    elMsg.setAttribute("class","erro");
    elMsg.innerText = "Nome de usuário ou senha incorretos!";
   
    return false;
}
 
//Recuperando o botão de login
const btnLogin = document.querySelector(".submit-button");
//Recuperando o elemento dialog
 const modal = document.querySelector("dialog");
 //Atrelando um evento ao botão
 btnLogin.addEventListener("click", function(e){
 
    // console.log(e.target.innerText);
    modal.showModal();
     
 });