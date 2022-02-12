let linha = document.querySelectorAll(".linha")
let quatEle = 162
let DIVELE

const criaElementos = () => {
    for (let i = 1; i < quatEle+1; i++) {
        DIVELE = document.createElement("div")
        DIVELE.setAttribute('class', 'elementos')

        if (i<=18) {linha[0].appendChild(DIVELE)}
        if (i>1 && i<=17) { 
            DIVELE.setAttribute('class', 'branco')
            DIVELE.innerHTML = ""
        }
        
        if (i>=19 && i<=18*2) {linha[1].appendChild(DIVELE)}
        if (i>20 && i<=30) { 
            DIVELE.setAttribute('class', 'branco')
            DIVELE.innerHTML = ""
        }

        if (i>=37 && i<=18*3) {linha[2].appendChild(DIVELE)}
        if (i>38 && i<=48) { 
            DIVELE.setAttribute('class', 'branco')
            DIVELE.innerHTML = ""
        }

        if (i>=55 && i<=18*4) {linha[3].appendChild(DIVELE)}
        if (i>=73 && i<=18*5) {linha[4].appendChild(DIVELE)}

        if (i>=91 && i<=18*6) {linha[5].appendChild(DIVELE)}
        if (i==93) { 
            DIVELE.setAttribute('class', 'branco')
            DIVELE.innerHTML = "<h2>57-71</h2><p>*</p>"
        }

        if (i>=109 && i<=18*7) {linha[6].appendChild(DIVELE)}
        if (i==111) { 
            DIVELE.setAttribute('class', 'branco')
            DIVELE.innerHTML = "<h2>89-103</h2><p>**</p>"
        }

        if (i>=127 && i<=18*8) {linha[7].appendChild(DIVELE)}
        if (i>126 && i<=129) { 
            DIVELE.setAttribute('class', 'branco')
            linha[7].classList.add('margin')
            DIVELE.innerHTML = ""
        }
        if (i==129) {DIVELE.innerHTML = "*"}


        if (i>=145 && i<=18*9) {linha[8].appendChild(DIVELE)}
        if (i>144 && i<=147) { 
            DIVELE.setAttribute('class', 'branco')
            DIVELE.innerHTML = ""
        }
        if (i==147) {DIVELE.innerHTML = "**"}

    }
}

criaElementos()

const MOSTRA_ELEMENTOS_NA_TELA = (elemento, dados) => {
    let elementos = document.querySelectorAll(".elementos")

    elementos[elemento].innerHTML = `
    <h2>${dados[elemento].numeroAtomico}</h2>
    <p>${dados[elemento].simbolo}</p>
        <span class="tooltip">
            <span class="tooltiptext">
                Nome: ${dados[elemento].nome}</br>
                Massa atômica: ${dados[elemento].massaAtomica}
            </span>
        </span>
    `
    
    if (elemento>55 && elemento<=72) {
        // elementos[elemento].style.backgroundColor = "red"
        elementos[elemento].innerHTML = `
        <h2>${dados[elemento+15].numeroAtomico}</h2>
        <p>${dados[elemento+15].simbolo}</p>
            <span class="tooltip">
                <span class="tooltiptext">
                    Nome: ${dados[elemento+15].nome}</br>
                    Massa atômica: ${dados[elemento+15].massaAtomica}
                </span>
            </span>
        `
    }
    if (elemento>72 && elemento<=87) {
        // elementos[elemento].style.backgroundColor = "#2596be"
        elementos[elemento].innerHTML = `
        <h2>${dados[elemento+30].numeroAtomico}</h2>
        <p>${dados[elemento+30].simbolo}</p>
            <span class="tooltip">
                <span class="tooltiptext">
                    Nome: ${dados[elemento+30].nome}</br>
                    Massa atômica: ${dados[elemento+30].massaAtomica}
                </span>
            </span>
        `
    }
    if (elemento>87 && elemento<=102) {
        // elementos[elemento].style.backgroundColor = "#4705BB"
        elementos[elemento].innerHTML = `
        <h2>${dados[elemento-32].numeroAtomico}</h2>
        <p>${dados[elemento-32].simbolo}</p>
            <span class="tooltip">
                <span class="tooltiptext">
                    Nome: ${dados[elemento-32].nome}</br>
                    Massa atômica: ${dados[elemento-32].massaAtomica}
                </span>
            </span>
        `
    }
    if (elemento>102 && elemento<=117) {
        elementos[elemento].style.backgroundColor = "#AE21A2"
        elementos[elemento].innerHTML = `
        <h2>${dados[elemento-15].numeroAtomico}</h2>
        <p>${dados[elemento-15].simbolo}</p>
            <span class="tooltip">
                <span class="tooltiptext">
                    Nome: ${dados[elemento-15].nome}</br>
                    Massa atômica: ${dados[elemento-15].massaAtomica}
                </span>
            </span>
        `
    }
}

const PEGA_ELEMENTOS = dados => {
    for (var i = 0; i<dados.length; i++){
        MOSTRA_ELEMENTOS_NA_TELA(i, dados)
    }
    // console.log(dados[1])
}


const PEGA_DADOS_ELEMENTOS = () => {
    fetch("elementos.json")
        .then(resposta => {
            return resposta.json()
        })
        .then(dados => {
            PEGA_ELEMENTOS(dados)
        })
}


PEGA_DADOS_ELEMENTOS()
