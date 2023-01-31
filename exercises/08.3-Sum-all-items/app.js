function sumTheElements(theArray){
	let total = 0;
	//your code here
	for (item of theArray) {
		total += item;
	}
	return total;
}

console.log(sumTheElements([2,13,34,5]))
