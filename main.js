n1 = document.querySelector(".n1");
n2 = document.querySelector(".n2");
txtn1 = document.querySelector(".text_n1");
txtn2 = document.querySelector(".text_n2");
txtresult = document.querySelector(".text_result");
function WriteNum(){
    txtn1.innerText = n1.value;
    txtn2.innerText = n2.value;
}


function Sumar(){
    WriteNum();
    txtresult.innerText = parseInt(n1.value) + parseInt(n2.value)
}

function Restar(){
    WriteNum();
    txtresult.innerText = parseInt(n1.value) - parseInt(n2.value)
}
function Multiplicar(){
    WriteNum();
    txtresult.innerText = parseInt(n1.value) * parseInt(n2.value)
}
function Dividir(){
    WriteNum();
    txtresult.innerText = parseInt(n1.value) / parseInt(n2.value)
}

function Reset(){
    n1.value = "";
    n2.value = "";
    txtn1.innerText = "";
    txtn2.innerText = "";
    txtresult.innerText = "";
}