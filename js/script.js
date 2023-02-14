function getData(){
    var date = document.getElementById('textData1').value
    //var date2 = document.getElementById('textData2').value
    var periodo = document.getElementById('peri');
    
    console.log(date, typeof(date))
    let string = String (date)

    console.log(typeof(string))

    string.substring(3)

    console.log(string)
    
    
    



    monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
    
   
    const d = new Date()
    let month = monName[d.getMonth()]
    console.log(month)

    

    //console.log(date2.value) 
    
    
    let datas = document.getElementById('selectDatas')
    //datas.classList.add('hiddenResult')

    periodo.innerHTML = month + ' A ' + date2

}


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
        this.totMarilza = 0;
        this.totJacson = 0;
        this.divisao = 0;

      
        
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

       
        this.listaTabela(venda);
        this.cancelar()

       //console.log(this.arreyVendas)
       

       document.getElementById("inputCliente").focus()
       
    }

    listarValores(){



        this.tot6Furos += this.soma6();
        this.tot8Furos += this.soma8();
        this.tot9Furos += this.soma9();
        this.tavela += this.somaT();
        this.totMarilza += this.somaM();
        this.totJacson += this.somaJ();
     
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

        let results2 = document.getElementById('resultados-2');
        results2.classList.toggle('showResults')

        // let containerResultados = document.getElementsByClassName('container-resultados')
        // let btn = document.createElement('button');
        // btn.type = 'button'
        // btn.innerText = "Imprimir"
        // btn.setAttribute('onclick', 'window.print()')
        // containerResultados[0].appendChild(btn)


       

        //console.log(this.total.toFixed(2))
        
        document.getElementById("qtTotalVendas").value = this.totalProdutosVendidos.toFixed().toLocaleString('pt-BR');
        document.getElementById("qtTotal6").value = this.tot6Furos.toFixed().toLocaleString('pt-BR');
        document.getElementById("qtTotal8").value = this.tot8Furos.toFixed().toLocaleString('pt-BR');
        document.getElementById("qtTotal9").value = this.tot9Furos.toFixed().toLocaleString('pt-BR');
        document.getElementById("qtTotaolTav").value = this.tavela.toFixed().toLocaleString('pt-BR');

        document.getElementById("Total").value = this.valorTotalVendas.toLocaleString('pt-BR', {style : "currency", currency: 'BRL' } );

        this.divisao = this.valorTotalVendas / 2
        document.getElementById('divisao').value = this.divisao
        document.getElementById("totM").value = this.totMarilza.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        document.getElementById("totJ").value = this.totJacson.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

       
        let mariPagaOutput = document.getElementById('mariPagaOutput')
        let jacPagaOutput = document.getElementById('jacPagaOutput')

        if(this.totMarilza < this.totJacson){
            //divisao - totjac
           let jacPaga =  this.divisao - this.totJacson;
           //mariPagaOutput.classList.add("hiddenResults")
           document.getElementById('jacPaga').value = jacPaga.toLocaleString('pt-BR', {style : "currency", currency: 'BRL'})

        }else{
            //divisao - marilza
           let mariPaga =  this.divisao - this.totMarilza
           //jacPagaOutput.classList.add("hiddenResult")
            document.getElementById('mariPaga'). value = mariPaga.toLocaleString('pt-BR', {style : "currency", currency: 'BRL'})
        }
        //document.getElementById("divisao").


       
        // console.log("total em dinheiro" + this.valorTotalVendas);
        // console.log("total produtos venditos " + this.totalProdutosVendidos);
        // console.log("total 6 furos " + this.tot6Furos);
        // console.log("total 8 furos " + this.tot8Furos);
        // console.log("total 9 furos " + this.tot9Furos);
        // console.log("total tavelas " + this.tavela);
        // console.log("total de vendas marilza " + this.totMarilza);
        // console.log("total de vendas jac " + this.totJacson);


    }

    soma6(){
        //let tdsQuantidade = document.querySelectorAll('.info-quantidade');
        let tdsValores6F = document.querySelectorAll('.t6f');
        
        
        let total = 0;

        for(let i = 0; i< tdsValores6F.length; i++){

        
            let valor = parseFloat(tdsValores6F[i].textContent);
            
            total += valor;

            
        }

        return total;

    }

    soma8(){

        let tdsValores8F = document.querySelectorAll('.t8f');
        
        let total = 0;

        for(let i = 0; i< tdsValores8F.length; i++){

            let valor = parseFloat(tdsValores8F[i].textContent);
            total += valor;
        }

        
        return total;

    }

    soma9(){

        let tdsValores9F = document.querySelectorAll('.t9f');
        
        let total = 0;

        for(let i = 0; i< tdsValores9F.length; i++){

        
            let valor = parseFloat(tdsValores9F[i].textContent);
            total += valor;
        }

        
        return total;

    }

    somaT(){

        let tdsTav = document.querySelectorAll('.tav');
        
        let total = 0;

        for(let i = 0; i< tdsTav.length; i++){

        
            let valor = parseFloat(tdsTav[i].textContent);
            total += valor;
        }

        
        return total;

    }


    somaM(){
        let tdsMari = document.querySelectorAll('.mari');
        
        let total = 0;

        for(let i = 0; i< tdsMari.length; i++){

        
            let valor = parseFloat(tdsMari[i].textContent);
            total += valor;
        }

        return total;
    }


    somaJ(){
        let tdsJac = document.querySelectorAll('.jac');
        
        let total = 0;

        for(let i = 0; i< tdsJac.length; i++){

        
            let valor = parseFloat(tdsJac[i].textContent);
            total += valor;
        }

        return total;
    }

   

    

    //lista os inputs na tabela
    listaTabela(){
        let tbody = document.getElementById('tbody');
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
                td_quantidade.classList.add('t6f')
            }else if(this.arreyVendas[i].produto  == "Tijolo 8 Furos solto" || this.arreyVendas[i].produto == "Tijolo 8 Furos paletizado"){
                td_quantidade.classList.add("t8f")
            }else if(this.arreyVendas[i].produto == "Tijolo 9 Furos solto" || this.arreyVendas[i].produto == "Tijolo 9 Furos paletizado"){
                td_quantidade.classList.add("t9f")
            }else {
                td_quantidade.classList.add("tav")
            }
        

            td_milheiro.classList.add("center");
            td_socio.classList.add("center");

            
            if(this.arreyVendas[i].socio == "Marilza"){
                td_valor.classList.add("mari")
            }else{
                td_valor.classList.add("jac")
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
                this.arreyVendas[i].valor = venda.valor;
               
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
        
        venda.quantidade = document.getElementById('inputQuantidade').value
        let qt = parseFloat(venda.quantidade)
    
        venda.produto = this.getTipo();

        venda.milheiro = document.getElementById("inputMilheiro").value;
       let m = parseFloat(venda.milheiro)

        venda.socio = this.getSocio();

        venda.valor = this.valorVenda(qt, m);

       
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
        
        if (q >= 10000){
            let valor =  (q * m) / 1000
            console.log("valor maior que 10k: " + valor, typeof(valor))
           


            return valor

        } else if (q >= 1000 || q<= 1000){
            let valor = (q * m ) / 1000
            console.log("valor menos de 10k: " + valor, typeof(valor))
            
            return valor

            
        }
            

        

        
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














