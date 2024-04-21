"use strict";

const objectArray = [
    { id: 1, name: "John", username: "john25" },
    { id: 2, name: "Mary", username: "mary123" },
    { id: 3, name: "John", username: "thejohnny" },

    /*
    array original que fiz
    {id: 1, nome: "Jose", idade: 25, sexo: "masculino"},
    {id: 2, nome: "Armindo", idade: 40, sexo: "masculino"},
    {id: 3, nome: "Maria", idade: 30, sexo: "feminino"},
    */
];

console.log(objectArray);

function ObjectRemover(array, property, attribute)
{
    if (property === 'index') 
    {
        array.splice(attribute, 1);
        return array;
    } 
    else 
    {
        let newArray = array.filter(function(obj) {
            return obj[property] !== attribute;
          });
        return newArray;
    }
}

let updatedArray = new ObjectRemover(objectArray, 'name', 'John');
console.log(updatedArray);

