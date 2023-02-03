

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

        console.log(venda)
        this.adicionar(venda)
    
       //this.listaTabela();
       //this.cancelar()
       

       document.getElementById("inputCliente").focus()
       
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

        console.log(this.total.toFixed(2))
        document.getElementById("valorTotal").innerText = this.total;
    }

    //lista os inputs na tabela
    listaTabela(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = '';

        for(let i = 0; i< this.arreyProdutos.length; i++){
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_produto = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerText = this.arreyProdutos[i].id
            td_produto.innerText = this.arreyProdutos[i].nomeProduto
            td_valor.innerText = this.arreyProdutos[i].preco
           

            td_id.classList.add("center")
            td_produto.classList.add("center")
            td_valor.classList.add("center", "info-valor")
            td_acoes.classList.add("center")

            let imgEdit = document.createElement('img')
            imgEdit.src = 'img/editar.png';
            imgEdit.setAttribute('onclick' , 'produto.preparaEditar(' + JSON.stringify(this.arreyProdutos[i]) + ')')

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/deletar.png'
            imgDelete.setAttribute('onclick', 'produto.deletar('+ this.arreyProdutos[i].id +')')

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
        for(let i = 0 ; i< this.arreyProdutos.length; i++){
            if(this.arreyProdutos[i].id == id){
                this.arreyProdutos[i].nomeProduto = prduto.nomeProduto
                this.arreyProdutos[i].preco = prduto.preco
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
        //venda.produto = getTipo();
        venda.milheiro = document.getElementById("inputMilheiro");
        //venda.socio = getSocio();

        //console.log(venda.socio)
        //produto.preco = document.getElementById("preco").value
        
        

        return venda

        
    }

    validaCampos(produto){
        let msg = '';

        if(produto.nomeProduto == '' ){
            msg += 'Informe o nome do produto \n'
        }

        if(produto.preco == '' ){
            msg += 'Informe o preço do produto \n'
        }

        if(msg != ''){
            alert(msg)
            return false
        }

        return true;
    }

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
    
  


    
    
}

var venda = new Venda();


function getSocio(){
    let inputSelect = document.getElementById('inputSocio')
    let op = inputSelect.options[inputSelect.selectedIndex].text;
    
    return op;
    
}

