var tot6f = 0
var tot9f = 0
var valor = 0
var divisao = 0;
var qtTotalTijolos = 0
var sumVal = 0;



function getData(){
    var date = document.getElementById('mdp-demo').value
    
    console.log(date)

    
}

var containerr = document.getElementById("containerr")
var btn = document.getElementById("action-btn")

btn.addEventListener("click" , function(){
    if(containerr.style.display === "none"){
        containerr.style.display = "block"
    }else{
        containerr.style.display = "none"
    }
})


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
    
    valor = parseFloat(qt * m)
   
    return valor
}


function getTotal(v, qt, t, s){
   

    console.log(v, qt, t, s)
     sumVal += v
     divisao = sumVal / 2;
     qtTotalTijolos += parseFloat(qt)

     if( t == "Tijolo 6 Furos solto"){
 
         tot6f = soma6(qt)   
    }

   if( t == "Tijolo 9 Furos solto"){

        tot9f = soma9(qt)
   }


   var total = document.getElementById("FTotal").value = sumVal;
   var divi = document.getElementById("divisao").value = divisao;
   var qtTotal = document.getElementById("qtTotal").value = qtTotalTijolos;
   var qt6 = document.getElementById("qtTotal6").value = tot6f
   var qt9 = document.getElementById("qtTotal9").value = tot9f

    console.log(`Tipo do produto: ${t}`)
    console.log(`A quantidade total de tijolos é: ${qtTotalTijolos}`)
    console.log(`O total de tijolos 6 furos é: ${tot6f}`)
    console.log(`O total de tijolos 9 furos é: ${tot9f}`)
    console.log(`O valor da carga é : ${v.toFixed(2)}` )
    console.log(`A soma total dos valores é: ${sumVal.toFixed(2)}`)
    console.log(`A divisão da soma é: ${divisao}`)
    console.log('------------------------------------------------------')
     

    
}