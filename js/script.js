

class Venda{

    constructor(){
        this.id = 1;
        this.arreyVendas = [];
        this.editId = null;
        this.total = 0;
        
    }

 



    salvar(){
       let venda =  this.lerDados()

    //    if(this.validaCampos(venda)){
    //         if(this.editId == null){
    //             this.adicionar(venda)
    //         }else{
    //             this.atualizar(this.editId, venda)
    //         }
    //    }

        
        this.adicionar(venda)
    
        this.listaTabela();
        //this.cancelar()

       console.log(this.arreyVendas)
       

       //document.getElementById("inputCliente").focus()
       
    }

    somar(){

        let tdsValores = document.querySelectorAll('.info-valor');
        let total = 0;

        for(let i = 0; i< tdsValores.length; i++){

            let valor = parseFloat(tdsValores[i].textContent)
            total = total + valor
            
        }

        //console.log(total)
        this.total = total

        //console.log(this.total.toFixed(2))
        document.getElementById("valorTotal").innerText = this.total;
    }

    //lista os inputs na tabela
    listaTabela(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = '';

        for(let i = 0; i< this.arreyVendas.length; i++){
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_cliente = tr.insertCell()
            let td_quantidade = tr.insertCell()
            let td_produto = tr.insertCell()
            let td_milheiro = tr.insertCell()
            let td_socio = tr.insertCell()
            let td_acoes = tr.insertCell()
            //let td_data = tr.insertCell()

            td_id.innerText = this.arreyVendas[i].id
            td_cliente.innerText = this.arreyVendas[i].nomeCliente
            td_quantidade.innerText = this.arreyVendas[i].quantidade
            td_produto.innerText = this.arreyVendas[i].produto
            td_milheiro.innerText = this.arreyVendas[i].milheiro
            td_socio.innerText = this.arreyVendas[i].socio
           

            td_id.classList.add("center")
            td_cliente.classList.add("center")
            td_quantidade.classList.add("center")
            td_produto.classList.add("center")
            td_milheiro.classList.add("center")
            td_socio.classList.add("center")
            td_acoes.classList.add("center")
            //td_valor.classList.add("center", "info-valor")
            

            let imgEdit = document.createElement('img')
            imgEdit.src = 'img/editar.png';
            imgEdit.setAttribute('onclick' , 'produto.preparaEditar(' + JSON.stringify(this.arreyVendas[i]) + ')')

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/deletar.png'
            imgDelete.setAttribute('onclick', 'produto.deletar('+ this.arreyVendass[i].id +')')

            td_acoes.appendChild(imgEdit)
            td_acoes.appendChild(imgDelete)

            

           //console.log(this.arreyProdutos)
            
        }
    }

    adicionar(venda){
        //produto.preco = parseFloat(produto.preco);


        this.arreyVendas.push(venda)
        this.id++
        
    }



    atualizar(id, prduto){
        for(let i = 0 ; i< this.arreyarreyVendas.length; i++){
            if(this.arreyarreyVendas[i].id == id){
                this.arreyarreyVendas[i].nomeProduto = prduto.nomeProduto
                this.arreyarreyVendas[i].preco = prduto.preco
            }


        }
    }

    preparaEditar(dados){

        this.editId = dados.id

        document.getElementById('produto').value = dados.nomeProduto
        document.getElementById('preco').value = dados.preco
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

        console.log(venda.socio)
        //produto.preco = document.getElementById("preco").value
        
        

        return venda

        
    }

    // validaCampos(produto){
    //     let msg = '';

    //     if(produto.nomeProduto == '' ){
    //         msg += 'Informe o nome do produto \n'
    //     }

    //     if(produto.preco == '' ){
    //         msg += 'Informe o preço do produto \n'
    //     }

    //     if(msg != ''){
    //         alert(msg)
    //         return false
    //     }

    //     return true;
    // }

    cancelar(){
        document.getElementById("produto").value = '';
        document.getElementById("preco").value = '';

        document.getElementById("btn1").innerText = "Salvar"
        this.editId = null
    }

    deletar(id){

        if(confirm("Deseja deletar o ID " + id)){
            let tbody = document.getElementById('tbody')

            for(let i = 0; i < this.arreyProdutos.length; i++){
                if(this.arreyProdutos[i].id == id ){
                    this.arreyProdutos.splice(i, 1);
                    tbody.deleteRow(i)
                }
            }
        }

        
    }
    
    getTipo(){
        let inputSelect = document.getElementById('inputProduto')
        let op = inputSelect.options[inputSelect.selectedIndex].text;
        
        return op;
        
    }

    getSocio(){
        let inputSelect = document.getElementById('inputSocio')
        let op = inputSelect.options[inputSelect.selectedIndex].text;
        
        return op;
        
    }


    
    
}

var venda = new Venda();



