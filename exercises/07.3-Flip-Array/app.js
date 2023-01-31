let arr = [45,67,87,23,5,32,60];

let newArray = [];
let arrayLength = arr.length;

//Your code here.
for (let i=0; i<arrayLength;i++) {
    newArray.push(arr.pop());
}

console.log(newArray);