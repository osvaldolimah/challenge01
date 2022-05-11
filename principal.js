/* função para criptografar */

var listaCripto = {a:"ai",e:"enter",i:"imes",o:"ober",u:"ufat"};

function recebeTexto() {
    texto = document.getElementById("entrada");
    texto = texto.value;
}

function criptografar() {
    recebeTexto();

    alteracaoLista = texto.replace(/a|e|i|o|u/g, function(item){
    var cripto = listaCripto[item];
    var itemLista = cripto.replace(/(?:^|\s)\s/g, function(elemento) { 
    return elemento; });
    return itemLista;
    
    
});
document.getElementById("saida").innerHTML = alteracaoLista;
saida.style.backgroundImage = "none"
}

/* apaga o texto digitado ao clicar dentro do campo */

function apagar() {
   document.getElementById("entrada").value = "";
}

/* função para descriptografar */

var listaDescripto = {ai:"a",enter:"e",imes:"i",ober:"o",ufat:"u"};

function recebeTextos() {
    textoD = document.getElementById("entrada");
    textoD = textoD.value;
}

function descriptografar() {
    recebeTextos();

    alteracaoListad = textoD.replace(/ai|enter|imes|ober|ufat/g, function(item){
    var descripto = listaDescripto[item];
    var itemListad = descripto.replace(/(?:^|\s)\s/g, function(elemento) { 
    return elemento; });
    return itemListad;
});
document.getElementById("saida").innerHTML = alteracaoListad;
}

/* função para copiar o texto */

var botao = document.getElementById("copiar");

botao.addEventListener("click",copiar);
function copiar() {
  document.querySelector("#saida").select();
  document.execCommand("copy");
}



