function getmilk(money){
	console.log("leavehouse");
	console.log("moveright");
	console.log("moveright");
	console.log("moveup");
	console.log("moveup");
	console.log("moveup");
	console.log("moveup");
	console.log("moveright");
	console.log("moveright");

	
	console.log("buy"+calcbottles(money,0.5)+"bottles of milk" );

	console.log("moveleft");
	console.log("moveleft");
	console.log("movedown");
	console.log("movedown");
	console.log("movedown");
	console.log("movedown");
	console.log("moveleft");
	console.log("moveleft");
	console.log("enter house");
	return money % 1.5;
}
function calcbottles(starting,castperbottle){
	var numberofbottles= math.floor(startingmoney/costperbottle);
	return numberofbottles;
}

getmilk(5);