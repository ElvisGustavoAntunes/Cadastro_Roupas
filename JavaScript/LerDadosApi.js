function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET",url,false);
    request.send();
    return request.responseText;
}

function criaLinha(usuario) {
    console.log(usuario)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tddescricao = document.createElement("td");
    tdtamanho = document.createElement("td");
    tdquantidade = document.createElement("td");
    tdreferencia = document.createElement("td");
    tdvalor_custo = document.createElement("td");
    tdvalor_venda = document.createElement("td");
    tdobservacao = document.createElement("td");
    tddatainsert = document.createElement("td");
    
    tdId.innerHTML = usuario._id
    tddescricao.innerHTML = usuario.descricao
    tdtamanho.innerHTML = usuario.tamanho
    tdquantidade.innerHTML = usuario.quantidade
    tdreferencia.innerHTML = usuario.referencia
    tdvalor_custo.innerHTML = usuario.valorCusto
    tdvalor_venda.innerHTML = usuario.valorVenda
    tdobservacao.innerHTML = usuario.observacao
    tddatainsert.innerHTML = usuario.datainsert

    linha.appendChild(tdId);
    linha.appendChild(tddescricao);
    linha.appendChild(tdtamanho);
    linha.appendChild(tdquantidade);
    linha.appendChild(tdreferencia);
    linha.appendChild(tdvalor_custo);
    linha.appendChild(tdvalor_venda);
    linha.appendChild(tdobservacao);
    linha.appendChild(tddatainsert);

    return linha;
}

function main() {
    let data = fazGet("http://localhost:3000/produtos");
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}
main();