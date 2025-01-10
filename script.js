let user = document.getElementById("user");
  let num = document.getElementById("num")
let respostaS = document.getElementById("F1");
let respostaN = document.getElementById("F2");
let change = document.getElementById("change")
let ola = document.getElementById("ola")

let proximo = document.getElementById("prox")

document.getElementById("enter").onclick = function(){
    user = document.getElementById("nome").value;

    document.getElementById("ola").textContent = `  Olá, ${user}`

    document.getElementById("change").textContent = `Gostaria de continuar? esse é um teste para saber se você pode ser meu amigo`

    document.getElementById("nome").style.display = 'none'

    document.getElementById("enter").style.display = 'none'

    let display = document.getElementById("display").style.display = 'block'
}

//socorro ta uma zona esse codigo puta que pariu

respostaN.onclick = function(){
    document.getElementById("change").textContent = `VOCÊ VAI SER OBRIGADO A RESPONDER CARALHO`
    respostaN.style.visibility = 'hidden'
    respostaS.textContent = `Ok, me desculpe`
    document.getElementById("ola").textContent = `🫥`
}

respostaS.onclick = function prox(){

    respostaS.textContent = `sim`
    document.getElementById("ola").textContent = `Pergunta séria`
    change.textContent = `Você tem iphone?`

    respostaN.style.visibility ='visible'

   respostaN.onclick = function(){
    ola.textContent= `puts, perdeu 1 ponto comigo`
    change.textContent = `Nossa ${user} você é bem pobrezinho, q dó`
    respostaN.style.visibility = 'hidden'
    respostaS.style.visibility = 'hidden'
    proximo.textContent = `Próximo`
    proximo.style.visibility = 'visible'
   }
   respostaS.onclick = function (){
    ola.textContent= `Legal, 1 ponto a mais`
    change.textContent = `Hm, gostei`
    proximo.textContent = `Próximo`
    proximo.style.visibility = 'visible'
respostaN.style.visibility = 'hidden'
respostaS.style.visibility = 'hidden'

}
}   
proximo.onclick = function next(){
    ola.textContent = `Tem quantos anos?`
    change.textContent = ` `
  
   num.style.display = 'block'
    

    proximo.onclick = function(){
       num.style.display = 'none'
        if(num.value < 18){
            ola.textContent = `meh, se fosse mais velho seria melhor >:(`
        }else{
            ola.textContent = `ui, adoro mais velhos`
        }
        proximo.onclick = function(){
            num.style.visibility = 'hidden'
            ola.textContent = `A pergunta mais importante, você é rico?`
            respostaN.style.visibility= 'visible'
            respostaS.style.visibility= 'visible'
            proximo.style.visibility = 'hidden'
            respostaN.onclick = function(){
                ola.textContent = `VOCÊ NÃO VAI SER MEU AMIGO SEU DESGRAÇADO POBRE FUDIDO`
                respostaN.style.display ='none'
                respostaS.style.display ='none'
                change.textContent = `feito por Matheus Gomes(rei dessa obra de arte)`
            }
            respostaS.onclick = function(){
                ola.textContent = `Aiiiii que legalll, vamos migar❤️`
                respostaN.style.display ='none'
                respostaS.style.display ='none'
                change.textContent = `feito por Matheus Gomes(rei dessa obra de arte)`
            }

        }
    }}
       