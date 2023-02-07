

class Venda{

    constructor(){
        this.id = 1;
        this.arreyVendas = [];
        this.editId = null;
        this.totalProdutosVendidos = 0;
        this.valorTotalVendas = 0;
        this.tot6Furos = 0; 
        this.tot8Furos = 0;
        this.tot9Furos = 0;
        this.tavela = 0;
        
    }

    salvar(){
       let venda =  this.lerDados()

       if(this.validaCampos(venda) == true){
            if(this.editId == null){
                this.adicionar(venda)
            }else{
                this.atualizar(this.editId, venda)
            }
       }

       
       
        this.tot6Furos += this.soma6()

        console.log(this.tot6Furos)
        this.tot8Furos += this.soma8(venda)
        this.tot9Furos += this.soma9(venda)
        this.tavela += this.somaT(venda)

       
        this.listaTabela(venda);
        this.cancelar()

       //console.log(this.arreyVendas)
       

       //document.getElementById("inputCliente").focus()
       
    }

    listarValores(){
        
        this.valorTotalVendas += this.valorVendas();
        this.totalProdutosVendidos += this.quantidadeProdutosVendidos();

        let cabecalho = document.getElementById("header")
        cabecalho.classList.add("hiddenResult")

        let titulo = document.getElementById('tittle');
        titulo.classList.add('hiddenResult');

        let form = document.getElementById('form');
        form.classList.add('hiddenResult');

        let results = document.getElementById('resultados');
        results.classList.toggle("showResults");

       

        //console.log(this.total.toFixed(2))
        document.getElementById("Total").value =  this.valorTotalVendas;
        document.getElementById("qtTotalVendas").value = this.totalProdutosVendidos;
        document.getElementById("qtTotal6").value = this.tot6Furos;
        document.getElementById("qtTotal8").value = this.tot8Furos;
        document.getElementById("qtTotal9").value = this.tot9Furos;
        document.getElementById("qtTotaolTav").value = this.tavela;

       
        console.log("total em dinheiro" + this.valorTotalVendas)
        console.log("total produtos venditos " + this.totalProdutosVendidos)
        console.log("total 6 furos " + this.tot6Furos)
        console.log("total 8 furos " + this.tot8Furos)
        console.log("total 9 furos " + this.tot9Furos)
        console.log("total tavelas " + this.tavela)


    }

    soma6(){
        let tdsQuantidade = document.querySelectorAll('.info-quantidade');
        let tdsValores6F = document.querySelectorAll('.t6f');
        
        let total = 0;

        for(let i = 0; i< tdsQuantidade.length; i++){

            if(){
                
            }
            let valor = parseFloat(tdsValoresF[i].textContent);
            total += valor;
        }

        console.log(total)
        return total;

    }

    soma8(venda){

        let total = 0;
        if(venda.produto == "Tijolo 8 Furos solto" || venda.produto == "Tijolo 8 Furos paletizado" ){
            

            let total8f = venda.quantidade
            total += parseFloat(total8f);
        }

        return total;

    }

    soma9(venda){

        let total = 0;
        if(venda.produto == "Tijolo 9 Furos solto" || venda.produto == "Tijolo 9 Furos paletizado" ){
            

            let total9f = venda.quantidade
            total += parseFloat(total9f);
        }

        return total;

    }

    somaT(venda){

        let total = 0;
        if(venda.produto == "Tavela" ){
            

            let totalTav = venda.quantidade
            total += parseFloat(totalTav);
        }

        return total;

    }

    

    //lista os inputs na tabela
    listaTabela(venda){
        let tbody = document.getElementById('tbody');
        const vendas = document.querySelectorAll('.venda');
        tbody.innerText = '';

        for(let i = 0; i< this.arreyVendas.length; i++){
            let tr = tbody.insertRow();
            tr.classList.add('venda')
            

            let td_id = tr.insertCell();
            let td_cliente = tr.insertCell();
            let td_quantidade = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_milheiro = tr.insertCell();
            let td_socio = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();
            //let td_data = tr.insertCell()

            td_id.innerText = this.arreyVendas[i].id;
            td_cliente.innerText = this.arreyVendas[i].nomeCliente;
            td_quantidade.innerText = this.arreyVendas[i].quantidade;
            td_produto.innerText = this.arreyVendas[i].produto;
            td_milheiro.innerText = this.arreyVendas[i].milheiro;
            td_socio.innerText = this.arreyVendas[i].socio;
            td_valor.innerText = this.arreyVendas[i].valor;
           

            td_id.classList.add("center");
            td_cliente.classList.add("center");
            td_quantidade.classList.add("center", 'info-quantidade');
            td_produto.classList.add("center", 'info-produto');
            

            if(this.arreyVendas[i].produto == "Tijolo 6 Furos solto" || this.arreyVendas[i].produto == "Tijolo 6 Furos paletizado"){
                td_produto.classList.add('t6f')
            }else if(this.arreyVendas[i].produto  == "Tijolo 8 Furos solto" || this.arreyVendas[i].produto == "Tijolo 8 Furos paletizado"){
                td_produto.classList.add("t8f")
            }else if(this.arreyVendas[i].produto == "Tijolo 9 Furos solto" || this.arreyVendas[i].produto == "Tijolo 9 Furos paletizado"){
                td_produto.classList.add("t9f")
            }else {
                td_produto.classList.add("tav")
            }
        

            td_milheiro.classList.add("center");
            td_socio.classList.add("center");

            
            if(this.arreyVendas[i].socio == "Marilza"){
                td_socio.classList.add("mari")
            }else{
                td_socio.classList.add("Jac")
            }

            td_acoes.classList.add("center");
            td_valor.classList.add("center", 'info-valor');
            
            

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/editar.png';
            imgEdit.setAttribute('onclick' , 'venda.preparaEditar(' + JSON.stringify(this.arreyVendas[i]) + ')')

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/deletar.png';
            imgDelete.setAttribute('onclick', 'venda.deletar('+ this.arreyVendas[i].id +')');

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);

           

           //console.log(this.arreyProdutos)
            
        }

    }

    adicionar(venda){
       
        this.arreyVendas.push(venda)
        this.id++
    }

    atualizar(id, venda){
        for(let i = 0 ; i< this.arreyVendas.length; i++){
            if(this.arreyVendas[i].id == id){
                this.arreyVendas[i].nomeCliente = venda.nomeCliente;
                this.arreyVendas[i].quantidade = venda.quantidade;
                this.arreyVendas[i].produto = venda.produto;
                this.arreyVendas[i].milheiro = venda.milheiro;
                this.arreyVendas[i].socio = venda.socio;
                this.arreyVendas[i].valor = venda.valor

                
            }


        }
    }

    preparaEditar(dados){

        this.editId = dados.id

        console.log(dados)

        document.getElementById('inputCliente').value = dados.nomeCliente;
        document.getElementById('inputQuantidade').value = dados.quantidade;
        document.getElementById("inputProduto").value = dados.produto;
        document.getElementById("inputMilheiro").value = dados.milheiro;
        document.getElementById("inputSocio").value = dados.socio


        document.getElementById('btn1').innerText = "Atualizar"
    }

    //pega os dados do form
    lerDados(){
        let venda ={}
        
        venda.id = this.id
        venda.nomeCliente = document.getElementById("inputCliente").value;
        venda.quantidade = document.getElementById("inputQuantidade").value;
        venda.produto = this.getTipo();
        venda.milheiro = document.getElementById("inputMilheiro").value;
        venda.socio = this.getSocio();
        venda.valor = this.valorVenda(venda.quantidade, venda.milheiro)

        //produto.preco = document.getElementById("preco").value
        
        return venda

    }

    validaCampos(venda){

    //     console.log(venda.produto, typeof(venda.produto))
    //     let msg = '';

    //     if(venda.nomeCliente == '' ){
    //         msg += 'Informe o nome do cliente \n'
    //     }

    //     if(venda.quantidade == '' ){
    //         msg += 'Informe a quantidade \n'
    //     }

    //     if(venda.produto == '' ){
    //         msg += 'informe o produto \n'
    //     }

    //    if(venda.milheiro == ''){
    //         msg += 'informe o milheiro \n'
    //    }

    //    if(venda.socio == ''){
    //         msg += 'informe quem recebeu a venda \n'
    //    }

    //     if(msg != ''){
    //         alert(msg)
    //         return false
    //     }

        return true;
    }

    cancelar(){

        document.getElementById('inputCliente').value = '';
        document.getElementById('inputQuantidade').value =  '';
        document.getElementById('inputProduto').value = ''; 
        document.getElementById("inputMilheiro").value = '';
        document.getElementById('inputSocio').value = '';
        

       
        document.getElementById("btn1").innerText = "Salvar"
        
        this.editId = null
    }

    deletar(id){

        if(confirm("Deseja deletar o ID " + id)){
            let tbody = document.getElementById('tbody')

            for(let i = 0; i < this.arreyVendas.length; i++){
                if(this.arreyVendas[i].id == id ){
                    this.arreyVendas.splice(i, 1);
                    tbody.deleteRow(i)
                }
            }
        }

        
    }
    
    getTipo(){
        let inputSelect = document.getElementById('inputProduto')
        let op = inputSelect.value;
        
        return op;   
    }

    getSocio(){
        let inputSelect = document.getElementById('inputSocio')
        let op = inputSelect.value;
        
        return op;
    }


    quantidadeProdutosVendidos(){

        let tdsQuantidade = document.querySelectorAll('.info-quantidade');
        let total = 0;

        for(let i = 0; i< tdsQuantidade.length; i++){

            let valor = parseFloat(tdsQuantidade[i].textContent)
            total = total + valor
            
        }

        
        return  total

    }

    valorVenda(q, m){
        let valor = parseFloat( q * m)

        return valor
    }

    valorVendas(){
        let tdsValores = document.querySelectorAll('.info-valor');
        let total = 0;

        for(let i = 0; i< tdsValores.length; i++){
            let valor = parseFloat(tdsValores[i].textContent);
            total += valor;
        }

        return total;

    }

    
}

var venda = new Venda();



