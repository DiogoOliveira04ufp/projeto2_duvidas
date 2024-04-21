"use strict";

const objectArray2 =[
    { id: 1, name: "John", username: "john25" },
    { id: 2, name: "Mary", username: "mary123" },
    { id: 3, name: "John", username: "thejohnny" }
];

console.log(objectArray2);

function SaveOrUpdate(array, object, attribute, property) {
    let foundObject = array.find(function(x) {
        return x.property === object.property; 
    });
    
    if (foundObject) 
    {
        Object.assign(foundObject, object);
    } 
    else 
    {
        array.push(object);
    }

    return array;
}

const result = new SaveOrUpdate(objectArray2,  { id: 4, name: "Joseph", username: "john25" }, 1, "id");
console.log(result);