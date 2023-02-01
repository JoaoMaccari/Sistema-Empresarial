let vendas = document.querySelectorAll(".sales")
const salesRows = []




function addData()
{   

    var form = document.querySelector('#form')
    var sale = obtemVendaFormulario(form)
    
    salesRows.push(sale)
    console.log(salesRows)

   

    //pega valor dos inputs e passa pra linhas da tabela
    var cliente=document.sample.cliente.value; 
    var quantidade=document.sample.quantidade.value; 
    var milheiro=document.sample.milheiro.value
    var tipo = getTipo()
    var socio = getSocio()


    //cria a linha
    var tr = document.createElement('tr');
   
    //cria as celulas
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));
    var td8 = tr.appendChild(document.createElement('td'));

   

    //adiciona a linha a tabela
    document.getElementById("tbl").appendChild(tr);

     //    SOMA DOS VALORES   //

    var $quantidade = parseFloat(quantidade)
    var $milheiro = parseFloat(milheiro)
    var $valor=calculaValor($quantidade, $milheiro)
    
    getTotal($valor, $quantidade, tipo, socio)

 

    //passa o valor da compra para o formulário
    var valorForm = document.getElementById('val').value = $valor.toFixed(2)
    
    //passa os valores pras celulas e cria btn de excluir e add
    td1.innerHTML=cliente;
    td2.innerHTML=quantidade;
    td3.innerHTML=tipo
    td4.innerHTML=milheiro
    td5.innerHTML=valorForm
    td6.innerHTML=socio
    td7.innerHTML='<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">'
    td8.innerHTML='<input type="button" name="up" value="Update" onclick="UpStud(this);" class="btn btn-primary">' 
    
    
}


//passa toda a row no argumento
function UpStud(stud){
    
    var cliente=document.sample.cliente.value; 
    var quantidade=document.sample.quantidade.value; 
    var tipo=getTipo();
    var socio=getSocio();
    var milheiro=document.sample.milheiro.value;
    var valor=document.sample.valor.value;

    var s = stud.parentNode.parentNode;
    var tr = document.createElement('tr');
    
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));
    var td8 = tr.appendChild(document.createElement('td'));
    
    
    td1.innerHTML='<input type="text" name="cliente1" class="border border-dark form-control">';
    td2.innerHTML='<input type="number" name="quantidade1" class="border border-dark form-control">';
    td3.innerHTML ='<select name="produto1" id="prod1" onchange="getTipo()"  class="border border-dark form-control"> <option value="escolha" selected>Produto</option> <option value="t6s">Tijolo 6 Furos solto</option> <option value="t6p">Tijolo 6 Furos paletizado</option> <option value="t9s">Tijolo 9 Furos solto</option> <option value="t9p">Tijolo 9 Furos paletizado</option> </select> ' 
    td4.innerHTML ='<input type="number" name="milheiro1" class="border border-dark form-control">';
    td5.innerHTML=valor;
    td6.innerHTML='<select name="socio" id="soc1" onchange="getSocio()"  class="border border-dark form-control"> <option value="M" selected>Marilza</option> <option value="J">Jac</option> </select>';
    td7.innerHTML='<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">';
    td8.innerHTML='<input type="button" name="up" value="Update" onclick="addUpStud(this);" class="btn btn-primary">';

    document.getElementById("tbl").replaceChild(tr, s);


}


//passa os dados atualizados para a row
function addUpStud(stud){

    var cliente=document.sample.cliente1.value;
    var quantidade=document.sample.quantidade1.value; 
    var milheiro=document.sample.milheiro1.value;
    var valor=document.sample.valor.value
    var tipo=getTipo1()
    var socio=getSocio1()

    var $quantidade = parseFloat(quantidade)
    
    var $milheiro = parseFloat(milheiro)
    var $valor=calculaValor($quantidade, $milheiro)

    var s = stud.parentNode.parentNode;
    var tr = document.createElement('tr');
    

    getTotal()

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));
    var td8 = tr.appendChild(document.createElement('td'));
    
    
    td1.innerHTML=cliente;
    td2.innerHTML=quantidade;
    td3.innerHTML=tipo
    td4.innerHTML=milheiro
    td5.innerHTML=calculaValor(quantidade, milheiro)
    td6.innerHTML=socio
    td7.innerHTML='<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">'
    td8.innerHTML='<input type="button" name="up" value="Update" onclick="UpStud(this);" class="btn btn-primary">'
    
    document.getElementById("tbl").replaceChild(tr, s);
    

}




function delStudent(Stud){
    var s=Stud.parentNode.parentNode;
    s.parentNode.removeChild(s);
}


function obtemVendaFormulario(form){
    let sale = {
        cliente: form.cliente.value,
        quantidade:form.quantidade.value,
        produto:form.produto.value,
        socio: form.socio.value,
        milheiro: form.milheiro.value,
        valorVenda: Number(calculaValor(form.quantidade.value, form.milheiro.value)),
        

        //total6Furos: soma6( Number(form.quantidade.value)),
        //total9Furos: soma9( Number(form.quantidade.value))
    }

    return sale
}

