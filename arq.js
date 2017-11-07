function soma () {
var n1, n2, soma;
n1 = parseint(document.getElementById ("primeiroNumero").value);
n2 = parseint(document.getElementById ("segundoNumero").value);

soma = n1 + n2;
document.getElementById ("resposta").innerHTML = soma;
}
