/* ************* CALLBACK 1**************** */
//Funcion Suma
function sum(num1, num2) {
    return num1 + num2;
}
//Funcion dinamica que recibe como parametro 
//otra funcion que esta puede cambiar siempre y
//cuando reciba 2 numeros
function cal(num1, num2, callback) {
    return callback(num1, num2);
}

//Llamamos la funcion Cal y Sum
console.log(cal(2, 2, sum));



/* *******************CALLBACK 2************************ */
//Funcion date  
function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date)
    })
}

//La segunda funcion
function printDate(dateNow) {
    console.log(dateNow);
}

//Imprimir segunda funcion sobre la primera funcion
date(printDate);