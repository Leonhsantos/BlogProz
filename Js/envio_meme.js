let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

function realizarPopup(input, label){
    input.addEventListener("focus", () =>{
        label.classList.add("required-popup")
        }
        )
        
        
        
        input.addEventListener("blur", ()=>{
            label.classList.remove("required-popup")
        })
         
}
realizarPopup(usernameInput,usernameLabel)

function estilisarInputCorreto(input, helper){
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
}

function estilisarInputIncorreto(input, helper){
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
}


usernameInput.addEventListener("change", (e) =>{
let valor = e.target.value 
if(valor.length <3){
usernameHelper.innerText = "O username precisa ter 3 ou mais caracteres"
estilisarInputIncorreto(usernameInput, usernameHelper)
    inputsCorretos.username = false
}else{
estilisarInputCorreto(usernameInput, usernameHelper)
    inputsCorretos.username = true
}
})





let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

realizarPopup(senhaInput,senhaLabel)


senhaInput.addEventListener("blur",(e) =>{
    let valor = e.target.value

    if(valor == ""){
        senhaHelper.innerText = "Senha incorreta"
        estilisarInputIncorreto(senhaInput, senhaHelper)
        inputsCorretos.senha= false
    }else{
        estilisarInputCorreto(senhaInput, senhaHelper)
        inputsCorretos.senha = true
    }
})


let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");


realizarPopup(confirmaSenhaInput,confirmaSenhaLabel)

confirmaSenhaInput.addEventListener("change",(e)=>{
    let valorconfirmaSenha = e.target.value
    
    if(valorconfirmaSenha == senhaInput.value){
        estilisarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper)
        inputsCorretos.confirmaSenha = true

    }else{
        confirmaSenhaHelper.innerText = "As senhas precisam ser iguais"
        estilisarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper)
        inputsCorretos.confirmaSenha = false
    }
})



let btnSubmit = document.querySelector('button[type="submit"]')
let inputsCorretos = {
    username: true,
    senha:false,
    confirmaSenha:false
}

btnSubmit.addEventListener("click",(e) => {

    if(inputsCorretos.username == false || 
        inputsCorretos.senha == false ||
        inputsCorretos.confirmaSenha == false){
        e.preventDefault()
        alert("Os campos obrigatórios precisam ser preenchidos")
    }else{
        alert("Meme enviado com sucesso")
    }
})