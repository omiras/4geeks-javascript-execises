let chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = [...firstArray]
    //your code here
    for (item of secondArray) {
        newArray = [...newArray, item];
    }

    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));