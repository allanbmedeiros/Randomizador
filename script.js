const botao = document.querySelector(".bot")

function generateNumber(){
    //para randomizar é presico usar o Math.ceil no valor minimo e colocar entre parenteses() o document...
    //e Math.floor no valor maximo e colocar o document...
    const min = Math.ceil(document.querySelector("#min").value)  
    const max = Math.floor(document.querySelector("#max").value)

    //coloquei em uma variavel para poder monstrar o resultado
    //mas a formula tem q ser do jeito q foi feito após a variavel
    //lembrando que nessa formula (por ter colocado o ceil e floor acima) é possivel sortear o numero
    //minimo e maximo ex: um numero entre 1 e 3 sem a formula sempre vai ser 2, com a formula completa
    //tambem cai o 1 e 3
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result)
}

botao.addEventListener("click", generateNumber)