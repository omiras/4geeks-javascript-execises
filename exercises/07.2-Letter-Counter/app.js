let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
par = par.replaceAll(' ', '');

for (let i=0;i<par.length;i++) {

    let nextLetter = par[i].toLowerCase();

    counts[nextLetter] =  counts[nextLetter] ? counts[nextLetter] + 1 : 1
}

console.log(counts);