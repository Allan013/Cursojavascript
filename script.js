//Nessa primeira parte ele vai igualar os valores e dizer se acertou ou errou.
function Verificar() {
	var Bloco1 = document.getElementById("Bloco1").innerHTML;
	var Bloco2 = document.getElementById("Bloco2").value;

	if(Bloco1 == Bloco2) {
		alert("VOCÊ ACERTOU O NÚMERO!");
	} else {
		alert("INFELIZMENTE VOCÊ ERROU O NÚMERO!");
	}
    
	resetar()
}
//Aqui ele vai resetar os valores
function resetar() {
	document.getElementById("Bloco2").value = "";

	var r = Math.floor(Math.random() * 50);
	document.getElementById("Bloco1").innerHTML = r;
}