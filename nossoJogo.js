// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */


// console.log(`Boas vindas ao jogo de BlackJack!`)

// const rodarJogo = () => {
//    // Fazendo o sorteio das cartas dos jogadores
//    const comprarCarta1Usuario = comprarCarta()
//    const comprarCarta2Usuario = comprarCarta()
//    const comprarCarta1Computador = comprarCarta()
//    const comprarCarta2Computador = comprarCarta()

//    //Armazendo o resultado das cartas sorteadas dos respectivos jogadores
//    const resultadoUsuario = comprarCarta1Usuario.valor + comprarCarta2Usuario.valor
//    const resultadoComputador = comprarCarta1Computador.valor +
//       comprarCarta2Computador.valor

//    //Imprimindo as informações
//    console.log(`Usuário - cartas: ${comprarCarta1Usuario.texto} ${comprarCarta2Usuario.texto} - Pontuação ${resultadoUsuario}`)
//    console.log(`Computador - cartas: ${comprarCarta1Computador.texto} ${comprarCarta2Computador.texto} - Pontuação ${resultadoComputador}`)

//    //Condições das pontuações
//    if (resultadoComputador === resultadoUsuario) {
//       console.log("Empate!")
//    } else if (resultadoUsuario > resultadoComputador) {
//       console.log("O usuário ganhou!")
//    } else {
//       console.log("O computador ganhou!")
//    }

// }

// //Condição para ínicio do jogo
// if (confirm("Quer iniciar uma nova rodada?")) {
//    rodarJogo()
// } else {
//    console.log("O jogo acabou")
// }
