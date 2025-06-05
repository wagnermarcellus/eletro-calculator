function calcularTensao (resistencia, corrente) {

    var resultado = resistencia * corrente;

  return resultado;
}
console.log("A tensão é: " + calcularTensao(10, 2) + " volts");

///////////////////////////
///////////////////////////
///////////////////////////
function calcularCorrente (tensao, resistencia) {
  var resultado = tensao / resistencia;
  return resultado;
}
console.log("A corrente é: " + calcularCorrente(20, 10) + " amperes");

///////////////////////////
///////////////////////////
///////////////////////////
function calcularResistencia (tensao, corrente) {
  var resultado = tensao / corrente;
  return resultado;
}
console.log("A resistência é: " + calcularResistencia(20, 2) + " ohms");
///////////////////////////
///////////////////////////
///////////////////////////
window.onload = function() {
    const seletor = document.getElementById('seletor');
    const divs = {
        "1": document.getElementById('divDaTensao'),
        "2": document.getElementById('divDaCorrente'),
        "3": document.getElementById('divDaResistencia')
    };

    function mostrarDivSelecionada() {
        Object.keys(divs).forEach(key => {
            divs[key].style.display = (seletor.value === key) ? 'block' : 'none';
        });
    }

    seletor.addEventListener('change', mostrarDivSelecionada);
    mostrarDivSelecionada(); 
};
///////////////////////////
///////////////////////////
function oncalc() {
    // Descobre qual formulário está visível
    let tensaoDiv = document.getElementById('divDaTensao');
    let correnteDiv = document.getElementById('divDaCorrente');
    let resistenciaDiv = document.getElementById('divDaResistencia');
    let form;

    if (tensaoDiv && tensaoDiv.style.display !== 'none') {
        form = tensaoDiv.querySelector('form');
        let r = parseFloat(form.r.value.replace(',', '.'));
        let i = parseFloat(form.i.value.replace(',', '.'));
        if (!isNaN(r) && !isNaN(i)) {
            let v = r * i;
            form.v.value = v.toFixed(4);
        } else {
            alert('Opa!!! Preencha resistência e corrente!');
        }
    } else if (correnteDiv && correnteDiv.style.display !== 'none') {
        form = correnteDiv.querySelector('form');
        let v = parseFloat(form.v.value.replace(',', '.'));
        let r = parseFloat(form.r.value.replace(',', '.'));
        if (!isNaN(v) && !isNaN(r) && r !== 0) {
            let i = v / r;
            form.i.value = i.toFixed(4);
        } else {
            alert('Opa!!! Preencha tensão e resistência!');
        }
    } else if (resistenciaDiv && resistenciaDiv.style.display !== 'none') {
        form = resistenciaDiv.querySelector('form');
        let v = parseFloat(form.v.value.replace(',', '.'));
        let i = parseFloat(form.i.value.replace(',', '.'));
        if (!isNaN(v) && !isNaN(i) && i !== 0) {
            let r = v / i;
            form.r.value = r.toFixed(4);
        } else {
            alert('Opa!!! Preencha tensão e corrente!');
        }
    }
}

// Exemplo simples para alternar os formulários conforme o seletor
window.onload = function() {
    let seletor = document.getElementById('seletor');
    let divs = [
        document.getElementById('divDaTensao'),
        document.getElementById('divDaCorrente'),
        document.getElementById('divDaResistencia')
    ];
    function showDiv(index) {
        divs.forEach((div, i) => {
            div.style.display = (i === index) ? 'block' : 'none';
        });
    }
    seletor.addEventListener('change', function() {
        showDiv(parseInt(this.value) - 1);
    });
    showDiv(0); // Mostra o primeiro por padrão
};

function onbtnreset() {
    // Limpa todos os campos do formulário visível
    let forms = document.querySelectorAll('form[name="calcform"]');
    forms.forEach(form => form.reset());
}
///////////////////////////////