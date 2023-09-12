const btnCalcular = document.querySelector('#chamar')
console.log(btnCalcular)

btnCalcular.addEventListener('click', function(event) {
    event.preventDefault();
    let resultado = 0;
    const nomes = document.querySelector('#nome').value;
    const usuarios = document.querySelector('#usuario').value;
    const datas = document.querySelector('#data').value;
    const datas1 = document.querySelector('#ida').value;
    const pessoa = document.querySelector('#pessoas').value;
    const pessoa1 = document.querySelector('#pessoas').value;
    const lugar = document.querySelector('#lugares').value;

    if (pessoa1 === "1") {
        resultado1 = (1);
    } else if (pessoa1 === "2") {
        resultado1 = (2)
    } else if (pessoa1 === "3") {
        resultado1 = (3)
    } else if (pessoa1 === "4") {
        resultado1 = (4)
    } else if (pessoa1 === "5") {
        resultado1 = (5)
    }
    if (pessoa === "1") {
        resultado = (9500 * 1);
    } else if (pessoa === "2") {
        resultado = (9500 * 2)
    } else if (pessoa === "3") {
        resultado = (9500 * 3)
    } else if (pessoa === "4") {
        resultado = (9500 * 4)
    } else if (pessoa === "5") {
        resultado = (9500 * 5)
    }

    if (pessoa === "1") {
        translado = (33500 * 1);
    } else if (pessoa === "2") {
        translado = (33500 * 2)
    } else if (pessoa === "3") {
        translado = (33500 * 3)
    } else if (pessoa === "4") {
        translado = (33500 * 4)
    } else if (pessoa === "5") {
        translado = (33500 * 5)
    }
    if (lugar === "1") {
        Destino = ("San Blás");
    } else if (lugar === "2") {
        Destino = ("Maya Bay")
    } else if (lugar === "3") {
        Destino = ("Stone Tress")
    } else if (lugar === "4") {
        Destino = ("Pink Beach")
    }

    let total = translado + resultado

    document.querySelector('#total').textContent = total;
    document.querySelector('#resultado1').textContent = resultado1;
    document.querySelector('#resultado').textContent = resultado;
    document.querySelector('#translado').textContent = translado;
    document.querySelector('#nomes').textContent = nomes
    document.querySelector('#usuarios').textContent = usuarios;
    document.querySelector('#datas').textContent = datas;
    document.querySelector('#datas1').textContent = datas1;
    document.querySelector('#Destino').textContent = Destino;


})