const originalObjectArray = [
	{ id: 1, name: "John", username: "john25" },
	{ id: 2, name: "Mary", username: "mary123" },
	{ id: 3, name: "John", username: "thejohnny" },
];

//chamada ao ObjectRemover passando o atributo ‘id’ com valor 1
const result1 = new ObjectRemover(originalObjectArray, 'id', 1);
console.log(result1);
/*
output sem o objeto cujo id é 1
[
{ id: 2, name: 'Mary', username: 'mary123' },
{ id: 3, name: 'John', username: 'thejohnny' }
]
*/

console.log(originalObjectArray);
/*
output do vetor original sem modificações
[
{ id: 1, name: 'John', username: 'john25' },
{ id: 2, name: 'Mary', username: 'mary123' },
{ id: 3, name: 'John', username: 'thejohnny' }
]
*/