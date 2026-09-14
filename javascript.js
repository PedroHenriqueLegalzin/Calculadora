const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
const gasolina = document.getElementById("gasolina");
const etanol = document.getElementById("etanol");
calcular.addEventListener("click", function() {
    const precoGasolina = parseFloat(gasolina.value);
    const precoEtanol = parseFloat(etanol.value);

    let mensagemFinal = "";
    let resultadoFinal = (precoEtanol / precoGasolina);
    if(resultadoFinal <= 0.7){
        mensagemFinal = "É mais vantajoso abastecer com Etanol!";
    }
    else{
        mensagemFinal = "É mais vantajoso bastecer com gasaolina!";
    }
    resultado.textContent = mensagemFinal + " A Razão é: " +resultadoFinal.toFixed(2);
});
