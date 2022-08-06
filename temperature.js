// Celsius to fahrenheit ==>
/* 
function tempConverter(celsius){
    const fahrenhet = (celsius*1.8) + 32;
    return fahrenhet;
}
const celsius = 5;
const temp = tempConverter(celcius);
console.log(temp);
*/



// Fahrenheit to Celsius ==>
function tempConverter(fahrenheit){
    const celsius = (fahrenheit - 32) * 0.5556
    return celsius;
}
const fahrenheit = 62;
const temp = tempConverter(fahrenheit);
console.log(temp);