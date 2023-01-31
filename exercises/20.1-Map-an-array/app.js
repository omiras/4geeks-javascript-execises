let arrayOfCelsiusValues = [-2,34,56,-10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(clesius){
	
	//add your code here and return the new value
	var fahrenheit = clesius * 9 / 5 + 32;
    return fahrenheit;
});

console.log(arrayOfFahrenheitValues);