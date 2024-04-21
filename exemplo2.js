const objectArrayToBeUpdated = [
    { id: 1, name: "John", username: "john25" },
    { id: 2, name: "Mary", username: "mary123" },
    { id: 3, name: "John", username: "thejohnny" },
];

    const updatedArrayResult1 = new SaveOrUpdate(objectArrayToBeUpdated, { id: 4, name: "Joseph", username: "jose" });
    console.log(updatedArrayResult1);
    /*output novo vetor com objeto inserido
    [
    { id: 1, name: 'John', username: 'john25' },
    { id: 2, name: 'Mary', username: 'mary123' },
    { id: 3, name: 'John', username: 'thejohnny' },
    { id: 4, name: 'Joseph', username: 'jose' }
    ]
    */
    
    console.log(objectArrayToBeUpdated);
    /*output vetor original sem modificações
    [
    { id: 1, name: 'John', username: 'john25' },
    { id: 2, name: 'Mary', username: 'mary123' },
    { id: 3, name: 'John', username: 'thejohnny' }
    ]
    */