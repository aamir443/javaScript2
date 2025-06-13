const person ={
    name: "Aamir",
    age: 30,
    city: "Varanasi"
}
console.log(person)

person.email="aamir1232@gmail.com"
delete person.city;
console.log(person)


if("age" in person){
    console.log("Age is present in person object")
}
else{
    console.log("Age is not present in person object")
}   




function printKeys(obj){
    for(let key in obj){
        console.log(key);
    }
}
printKeys(person);



function countProperties(obj){
    return Object.keys(obj).length;
}

console.log(countProperties(person));