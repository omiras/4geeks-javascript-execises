// Code goes here
function matrixBuilder(card) {

    let matrix = [];

    for (let i = 0; i < card; i++) {


            matrix.push([]);
        for (let j = 0; j < card; j++) {
            matrix[i].push(Math.floor(Math.random() * 2));
        }
    }

    return matrix;

}


// do not change anything from this line down
console.log(matrixBuilder(5))