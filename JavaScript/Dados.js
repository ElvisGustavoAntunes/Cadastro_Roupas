function cadatrar(){
    var descricao = document.getElementById("desc_Item");
    var tamanho = document.getElementById("tamanho");
    var quantidade = document.getElementById("quantidade");   
    var referencia = document.getElementById("referencia");
    var valor_custo = document.getElementById("valor_custo");
    var valor_venda = document.getElementById("valor_venda");
    var observação = document.getElementById("observação");
    var datainsert = new Date();

    console.log(descricao.value);
    console.log(tamanho.value);
    console.log(quantidade.value);
    console.log(referencia.value);
    console.log(valor_custo.value);
    console.log(valor_venda.value);
    console.log(observação.value);
    console.log(datainsert.toUTCString());
}