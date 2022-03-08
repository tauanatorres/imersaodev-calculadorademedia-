function calcularMedia() {
  var b1 = parseFloat(document.getElementById("nota1").value);
  var b2 = parseFloat(document.getElementById("nota2").value);
  var b3 = parseFloat(document.getElementById("nota3").value);
  var b4 = parseFloat(document.getElementById("nota4").value);

  var media = (b1 + b2 + b3 + b4) / 4;
  var notaFixada = media.toFixed(1);

  if (
    document.getElementById("nota1") !== "" &&
    document.getElementById("nota2") !== "" &&
    document.getElementById("nota3") !== "" &&
    document.getElementById("nota4") !== "" &&
    notaFixada < 7
  ) {
    var elementoMedia = (document.getElementById("resultado").style.color =
      "red");
    document.getElementById("resultado").innerHTML =
      "Sua nota é " + notaFixada + ". Você foi REPROVADO!";

    elementoMedia.innerHTML = resultadoMedia;
  } else if (notaFixada > 7) {
    var elementoMedia = (document.getElementById("resultado").style.color =
      "green");
    document.getElementById("resultado").innerHTML =
      "Sua nota é " + notaFixada + ". Parabéns, você foi APROVADO!";
    elementoMedia.innerHTML = resultadoMedia;
  } else {
    var elementoErro = document.getElementById("resultado");
    var erro = "Preencha todos os campos";
    elementoErro.innerHTML = erro;
  }
}
