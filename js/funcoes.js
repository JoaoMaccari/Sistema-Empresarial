var tot6f = 0
var tot9f = 0
var valor = 0





function getData(){
    var date = document.getElementById('mdp-demo').value
    
    console.log(date)

    
}

//pega produto
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


//pega sócio
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


function soma6(qt){
        
    let total =0
    tot6f += qt
    total = tot6f
    

    return total

    
}

function soma9(qt){
    
    let total =0
    tot9f += qt
    total = tot9f


    return total

    
}

function calculaValor(qt, m){
    
    valor = Number(qt * m)
   
    return valor
}