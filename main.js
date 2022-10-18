n1 = document.querySelector(".n1");
n2 = document.querySelector(".n2");
txtn1 = document.querySelector(".text_n1");
txtn2 = document.querySelector(".text_n2");
txtresult = document.querySelector(".text_result");
sum_but = document.querySelector(".sumar_button");
res_but = document.querySelector(".restar_button");
mult_but = document.querySelector(".multiplicar_button");
div_but = document.querySelector(".dividir_button");
reset_but = document.querySelector(".button_reset");


sum_but.addEventListener("click", Sumar);
res_but.addEventListener("click", Restar);
mult_but.addEventListener("click",Multiplicar);
div_but.addEventListener("click", Dividir);
reset_but.addEventListener("click", Reset);

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
    txtn1.innerText = "000";
    txtn2.innerText = "000";
    txtresult.innerText = "000";
}