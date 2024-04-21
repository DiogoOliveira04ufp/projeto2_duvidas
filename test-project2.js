'use strict';
/*
 * This file tests the  Project #2 JavaScript assignment problems. It prints what
 * it finds to the console log and updates the text being displayed in the window with a
 * summary of the results.
 */

// We assume these symbols will be globally defined by the user. These var statements
// will assign undefined to the symbol if it isn't global already.
// These global symbols are needed to test your file and you don't have to worry about them for Problem 3.
var ObjectRemover;
var SaveOrUpdate;


// Result message for Problems 1-2
var p1Message = 'SUCCESS';
var p2Message = 'SUCCESS';

// Keep track of all the var statements
var varDeclared = ['varDeclared', 'p1Message', 'p1Message'];

const objectsEqual = (o1, o2) =>
    typeof o1 === 'object' && Object.keys(o1).length > 0 ? Object.keys(o1).length === Object.keys(o2).length && Object.keys(o1).every(p => objectsEqual(o1[p], o2[p]))
        : o1 === o2;


const arraysEqual = (a1, a2) => {
    if (Array.isArray(a1) && Array.isArray(a2)) {
        return a1.length === a2.length && a1.every((o, idx) => objectsEqual(o, a2[idx]));
    }
    return false;
};

// ********************* Test filter


if (typeof ObjectRemover !== 'function') {
    console.error('ObjectRemover is not a function', typeof ObjectRemover);
    p1Message = 'FAILURE';
} else {

    const originalObjectArray = [
        { id: 1, name: "John", username: "john25" },
        { id: 2, name: "Mary", username: "mary123" },
        { id: 3, name: "John", username: "thejohnny" },
    ];

    const expectedResult1 = [
        { id: 2, name: "Mary", username: "mary123" },
        { id: 3, name: "John", username: "thejohnny" }
    ];


    const expectedResult2 = [
        { id: 1, name: "John", username: "john25" },
        { id: 3, name: "John", username: "thejohnny" },
    ];

    const result1 = new ObjectRemover(originalObjectArray, 'id', 1);

    if (!arraysEqual(expectedResult1, result1)) {
        console.error("ObjectRemover cannot remove object by id");
        p1Message = 'FAILURE';
    }

    if (originalObjectArray.length !== 3) {
        console.error("ObjectRemover cannot change the original array");
        p1Message = 'FAILURE';
    }

    const result2 = new ObjectRemover(originalObjectArray, 'index', 1);

    if (!arraysEqual(expectedResult2, result2)) {
        console.error("ObjectRemover cannot remove object by index");
        p1Message = 'FAILURE';
    }


    const result3 = new ObjectRemover(originalObjectArray, 'name', "John");

    const expectedResult3 = [
        { id: 2, name: "Mary", username: "mary123" },
    ];

    if (!arraysEqual(expectedResult3, result3)) {
        console.error("ObjectRemover cannot remove multiple objects with same attribute value");
        p1Message = 'FAILURE';
    }
}

if (typeof SaveOrUpdate !== 'function') {
    console.error('SaveOrUpdate is not a function', typeof SaveOrUpdate);
    p2Message = 'FAILURE';
} else {

    const objectArrayToBeUpdated = [
        { id: 1, name: "John", username: "john25" },
        { id: 2, name: "Mary", username: "mary123" },
        { id: 3, name: "John", username: "thejohnny" },
    ];

    const expectedUpdateResult1 = [
        { id: 1, name: "John", username: "john25" },
        { id: 2, name: "Mary", username: "mary123" },
        { id: 3, name: "John", username: "thejohnny" },
        { id: 4, name: "Joseph", username: "jose" }
    ];

    const expectedUpdateResult2 = [
        { id: 4, name: "Joseph", username: "john25" },
        { id: 2, name: "Mary", username: "mary123" },
        { id: 3, name: "John", username: "thejohnny" },
    ];

    const updatedArrayResult1 = new SaveOrUpdate(objectArrayToBeUpdated, { id: 4, name: "Joseph", username: "jose" });

    if (!arraysEqual(expectedUpdateResult1, updatedArrayResult1)) {
        console.error("SaveOrUpdate cannot add a new value");
        p2Message = 'FAILURE';
    }

    if (objectArrayToBeUpdated.length !== 3) {
        console.error("SaveOrUpdate cannot change original array");
        p2Message = 'FAILURE';
    }

    const addedArrayResult1 = new SaveOrUpdate(objectArrayToBeUpdated, { id: 4, name: "Joseph", username: "jose" }, 10, "id");

    if (!arraysEqual(expectedUpdateResult1, addedArrayResult1)) {
        console.error("SaveOrUpdate cannot add a new value when attribute value does not exist");
        p2Message = 'FAILURE';
    }

    const updatedArrayResult2 = new SaveOrUpdate(objectArrayToBeUpdated, { id: 4, name: "Joseph", username: "john25" }, 1, "id");

    if (!arraysEqual(expectedUpdateResult2, updatedArrayResult2)) {
        console.error("SaveOrUpdate cannot update an existing value");
        p2Message = 'FAILURE';
    }

    const arrayToBeUpdated = [1, 2, 3, 4, 5];

    const expectedUpdateResult3 = [10, 2, 3, 4, 5];

    const updatedArrayResult3 = new SaveOrUpdate(arrayToBeUpdated, 10, 1);

    if (!arraysEqual(expectedUpdateResult3, updatedArrayResult3)) {
        console.error("SaveOrUpdate cannot update an existing value");
        p2Message = 'FAILURE';
    }

    const updatedArrayResult4 = new SaveOrUpdate(arrayToBeUpdated, {id:10}, 1);

    

    if (!arraysEqual(arrayToBeUpdated, updatedArrayResult4)) {
        console.error("SaveOrUpdate should check if item is not an object when no attribute is provided");
        p2Message = 'FAILURE';
    }

    const updatedArrayResult5 = new SaveOrUpdate(arrayToBeUpdated, 10, 20);

    const expectedUpdateResult5=[1, 2, 3, 4, 5,10];
    

    if (!arraysEqual(expectedUpdateResult5, updatedArrayResult5)) {
        console.error("SaveOrUpdate should add primitive item if the value passed does not exists in the original array");
        p2Message = 'FAILURE';
    }


}

// Store the result back into the global space under the object name Project2Results
window.Project2Results = {
    p1Message: p1Message,
    p2Message: p2Message,
};

// Once the browser loads our companion HTML in test-project2.html we
// update it with the results of our testing. This code will make more
// sense after the next project.
window.onload = function () {
    document.getElementById("p1").innerHTML = p1Message;
    document.getElementById("p2").innerHTML = p2Message;
};
