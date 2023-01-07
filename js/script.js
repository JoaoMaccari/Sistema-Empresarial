function getData(){
    var date = document.getElementById('mdp-demo').value
    
    console.log(date)

    
}

function getTipo(){
    let inputSelect = document.getElementById('prod')
    let op = inputSelect.options[inputSelect.selectedIndex].text;
    //console.log(op)
    return op;
    
}

function getTipo1(){
    let inputSelect = document.getElementById('prod1')
    let op = inputSelect.options[inputSelect.selectedIndex].text;
    //console.log(op)
    return op;
    
}

function getSocio(){
    let inputSelect = document.getElementById('soc')
    let op = inputSelect.options[inputSelect.selectedIndex].text;
    //console.log(op)
    return op;
    
}

function getSocio1(){
    let inputSelect = document.getElementById('soc1')
    let op = inputSelect.options[inputSelect.selectedIndex].text;
    //console.log(op)
    return op;
    
}


 
function addData()
{ 
    //pega valor dos inputs
    var cliente=document.sample.cliente.value; 
    var quantidade=document.sample.quantidade.value; 
    var valor=document.sample.valor.value;
    var tipo = getTipo()
    var socio = getSocio()
    var milheiro=document.sample.milheiro.value


    console.log(socio)
    console.log(tipo)

    

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
    
    //passa os valores pras celulas e cria btn de excluir e add
    td1.innerHTML=cliente;
    td2.innerHTML=quantidade;
    td3.innerHTML=tipo
    td4.innerHTML=milheiro
    td5.innerHTML=valor
    td6.innerHTML=socio
    td7.innerHTML='<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">'
    td8.innerHTML='<input type="button" name="up" value="Update" onclick="UpStud(this);" class="btn btn-primary">'

    
    //adiciona a linha a tabela
    document.getElementById("tbl").appendChild(tr);



    //    SOMA DOS VALORES   //
    var table = document.getElementById('tbl');
    var sumVal = 0;

    for(var i =1; i < table.rows.length; i++){
        sumVal = sumVal + parseFloat(table.rows[i].cells[4].innerHTML);
    }

    console.log(sumVal)

    

}

//passa toda a row no argumento
function UpStud(stud){
    var cliente=document.sample.cliente.value; 
    var quantidade=document.sample.quantidade.value; 
    var valor=document.sample.valor.value;
    var tipo=getTipo();
    var socio=getSocio()
    console.log(tipo);
    console.log(socio)
    var milheiro=document.sample.milheiro.value;
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
    td5.innerHTML='<input type="number" name="valor1">'
    td6.innerHTML='<select name="socio" id="soc1" onchange="getSocio()"> <option value="M" selected>Marilza</option> <option value="J">Jac</option> </select>'
    td7.innerHTML='<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">'
    td8.innerHTML='<input type="button" name="up" value="Update" onclick="addUpStud(this);" class="btn btn-primary">'

    document.getElementById("tbl").replaceChild(tr, s);
}

function addUpStud(stud){
    var cliente=document.sample.cliente1.value; 
    var quantidade=document.sample.quantidade1.value; 
    var valor=document.sample.valor1.value
    var milheiro=document.sample.milheiro1.value;
    var tipo=getTipo1()
    var socio=getSocio1()
    console.log(tipo)
    console.log(socio)

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


