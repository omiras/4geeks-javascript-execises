let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach((item,index) => {
            // magic goes inside these brackets
            let newItem = item == 1 ? item: 'Yahoo';
            return_array.push(newItem);
    });
    return return_array;
};

console.log(ZerosToYahoos(myArray));