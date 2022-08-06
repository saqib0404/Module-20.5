var saqib ={
    age: 17,
    school : 20,
    color: 10,
    siblings : 5
}

var sum = 0;
for(var propertyName in saqib){
    var values = saqib[propertyName];
    sum += values;
}
console.log(sum);



// saqib.age = 20;
// saqib["age"] = 20;
// var saqibAge = "age";
// saqib[saqibAge] = 25;

// console.log(saqib[saqibAge])

// Get keys
// var propertyName = Object.keys(saqib);
// console.log(propertyName);

// Get values
// var results = Object.values(saqib);
// console.log(results)


