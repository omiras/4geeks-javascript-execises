let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let newArray = [];

//your code here
for (item of mix) {
    newArray.push(typeof item);
}

console.log(newArray);