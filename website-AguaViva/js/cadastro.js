const registraUsuario = (
    inputEmail,
    inputSenha,
    inputSenhaVerifica
  ) => {
    if (inputSenha.value == inputSenhaVerifica.value) {
      //Deixando o label em verde porque as senhas conferem.
      document
        .querySelector("label[for=idConfirmaSenha]")
        .setAttribute("class", "sucesso");
 
      //Voltando o campo ao normal quando recebe o foco;
      inputSenhaVerifica.addEventListener("focus", () => {
        document
          .querySelector("label[for=idConfirmaSenha]")
          .setAttribute("class", "");
      });
 
      const usuario = {
        email: inputEmail.value,
        senha: inputSenha.value,
      };
 
      //Recupera o banco do localStorage e adiciona o objeto na listaUsuários:
      let listaUsuarios = JSON.parse(localStorage.getItem("banco-dados")) || [];
 
      //Adicionando de fato o objeto na lista com o método push;
      listaUsuarios.push(usuario);
 
      //Adicionando a listaUsuarios novamente no LocalStorage:
      localStorage.setItem("banco-dados", JSON.stringify(listaUsuarios));
     
      return false;
    } else {
      //Deixando o label em vermelho porque as senhas não conferem.
      document
        .querySelector("label[for=idConfirmaSenha]")
        .setAttribute("class", "erro");
      //Voltando o campo ao normal quando recebe o foco;
      inputSenhaVerifica.addEventListener("focus", () => {
        document
          .querySelector("label[for=idConfirmaSenha]")
          .setAttribute("class", "");
      });
      return false;
    }
  };