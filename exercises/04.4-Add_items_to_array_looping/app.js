let arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
//*****************
function getRandomInt() {
    return Math.floor(Math.random()*100);
}

for (let index = 0; index < 10; index++) {
   arr.push(getRandomInt()); 
}

console.log(arr);