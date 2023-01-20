var qtTotalTijolos = 0

function addData()
{ 
    //pega valor dos inputs
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
     var table = document.getElementById('tbl');

     var sumVal = 0;
     var divisao = 0;
 
     var $quantidade = parseFloat(quantidade)
     var $milheiro = parseFloat(milheiro)
     var $valor=calculaValor($quantidade, $milheiro)
 
     var form = String($valor)
     console.log(form, typeof(form))
 
     for(var i =1; i < table.rows.length; i++){
 
         sumVal = sumVal + $valor
         divisao = sumVal / 2
     }
 
     qtTotalTijolos += parseFloat($quantidade);
 
     if( tipo == "Tijolo 6 Furos solto"){
 
         tot6f = soma6($quantidade)   
     }
 
    if( tipo == "Tijolo 9 Furos solto"){
 
         tot9f = soma9($quantidade)
    }

    var valorForm = document.getElementById('val').value = $valor
    
    //passa os valores pras celulas e cria btn de excluir e add
    td1.innerHTML=cliente;
    td2.innerHTML=quantidade;
    td3.innerHTML=tipo
    td4.innerHTML=milheiro
    td5.innerHTML=valorForm
    td6.innerHTML=socio
    td7.innerHTML='<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">'
    td8.innerHTML='<input type="button" name="up" value="Update" onclick="UpStud(this);" class="btn btn-primary">'

    //console.log(`Tipo do produto: ${tipo}`)
    console.log(`A quantidade total de tijolos é: ${qtTotalTijolos.toFixed(2)}`)
    console.log(`O total de tijolos 6 furos é: ${tot6f}`)
    console.log(`O total de tijolos 9 furos é: ${tot9f}`)
    console.log(`O valor da carga é : ${$valor.toFixed(2)}` )
    console.log(`A soma total dos valores é: ${sumVal.toFixed(2)}`)
    console.log(`A divisão da soma é: ${divisao}`)

   // console.log(quantidade)
    console.log("----------------------------------------------")
    
}


//passa toda a row no argumento
function UpStud(stud){
    
        

   


    var cliente=document.sample.cliente.value; 
    var quantidade=document.sample.quantidade.value; 
    var tipo=getTipo();
    var socio=getSocio()
    var milheiro=document.sample.milheiro.value;
    var valor=document.sample.valor.value

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
    
    
    td1.innerHTML='<input type="text" name="cliente1">';
    td2.innerHTML='<input type="number" name="quantidade1">';
    td3.innerHTML ='<select name="produto1" id="prod1" onchange="getTipo()"> <option value="escolha" selected>Produto</option> <option value="t6s">Tijolo 6 Furos solto</option> <option value="t6p">Tijolo 6 Furos paletizado</option> <option value="t9s">Tijolo 9 Furos solto</option> <option value="t9p">Tijolo 9 Furos paletizado</option> </select> ' 
    td4.innerHTML ='<input type="number" name="milheiro1">'
    td5.innerHTML=
    td6.innerHTML='<select name="socio" id="soc1" onchange="getSocio()"> <option value="M" selected>Marilza</option> <option value="J">Jac</option> </select>'
    td7.innerHTML='<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">'
    td8.innerHTML='<input type="button" name="up" value="Update" onclick="addUpStud(this);" class="btn btn-primary">'

    document.getElementById("tbl").replaceChild(tr, s);
}



//passa os dados atualizados para a row
function addUpStud(stud){
    var cliente=document.sample.cliente1.value; 
    var quantidade=document.sample.quantidade1.value; 
    var milheiro=document.sample.milheiro1.value;
    var valor=document.sample.valor1.value
    var tipo=getTipo1()
    var socio=getSocio1()
    

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
    
    
    td1.innerHTML=cliente;
    td2.innerHTML=quantidade;
    td3.innerHTML=tipo
    td4.innerHTML=milheiro
    td5.innerHTML=valor;
    td6.innerHTML=socio
    td7.innerHTML='<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">'
    td8.innerHTML='<input type="button" name="up" value="Update" onclick="UpStud(this);" class="btn btn-primary">'

    document.getElementById("tbl").replaceChild(tr, s);
}




function delStudent(Stud){
    var s=Stud.parentNode.parentNode;
    s.parentNode.removeChild(s);
}


