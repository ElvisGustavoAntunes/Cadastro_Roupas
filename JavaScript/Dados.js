function fazPost(url,body){
    console.log("Body=",body);
    let request = new XMLHttpRequest();
    request.open("POST",url,true);
    request.setRequestHeader("Content-type","application/json");
    request.send(JSON.stringify(body));

    request.onload = function(){
        console.log(this.responseText)
    }
    return request.responseText;
}

function cadatrar(){

    event.preventDefault();
    url = "http://localhost:3000/produtos"

    let descricao = document.getElementById("descricao").value;
    let tamanho = document.getElementById("tamanho").value;
    let quantidade = document.getElementById("quantidade").value;   
    let referencia = document.getElementById("referencia").value;
    let valor_custo = document.getElementById("valor_custo").value;
    let valor_venda = document.getElementById("valor_venda").value;
    let observação = document.getElementById("observação").value;
    let datainsert = new Date();

    body = {
        "descricao"  : descricao,
        "tamanho"    : tamanho,
        "quantidade" : quantidade,
        "referencia" : referencia,
        "valorCusto" : valor_custo,
        "valorVenda" : valor_venda,
        "observacao" : observação,
        "datainsert" : datainsert
    }
    fazPost(url, body);
}