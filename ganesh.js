
///arrays example/////
///example 1////

var output=[];
var count=1;

function fizzbuzz(){
	//write code here//
	if (cout%3===0 && count%5===0) {
		output.push("fizzbuzz");
	}
	else if  (count%3===0) {
		output.push(fizz);
	} 
	else if{(count%5===0){
		output.push(buzz);
	}
	else{
		output.push(count);
	}
}


///example 2////
//["pubg","freefire","call of duty","candycrush","hill climb race"]
//candycrush is a wonderfull game in the world//

function whospaying(names){
	var numberofpeople= names.length;
	var randompersonposition=math.floor(math.random()* numberofpeople)
	var randomperson = names[randompersonposition];
	return randomperson+"is a wonderfull game in the world"
}

///codition staments/////
function isleap(year){
	if (year%4===0){
		if (year%100===0) {
			if (year%400===0) {
				return leap year;
			} 
			else{
				return not leap year;
			}
			else{
				return leap year;
			}
			else{
				return not leap year;
			}
		}
	}
}