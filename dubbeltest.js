var scherm = document.querySelector('.scherm');
var tmpGetal = "";
var resDecimal = [];
var resOperator = [];


/*for(var i = 0; i < knop.length; i++ ) {
	knop[i].addEventListener('click', dingenDoenMetGetallen);
}*/


document.onclick = function(event) {
	if (event.target.className == 'number') {
		tmpGetal += (event.target.value);
		scherm.innerText = tmpGetal;
	}
	else if ((event.target.className == 'decimal') && (tmpGetal.indexOf(".") == -1)) {
		tmpGetal += (event.target.value);
		scherm.innerText = tmpGetal;

	}
	else if (event.target.className == 'operator' && resOperator.length == 0) {
		resDecimal.push(tmpGetal);
		tmpGetal = "";
		resOperator.push(event.target.value);
		scherm.innerText = event.target.value;
		//function(uitrekenen);
	}
	else if (event.target.className == 'clear') {
		clear()
		scherm.innerText = tmpGetal;	
		}
	else if (event.target.className == 'calculate') {
		resDecimal.push(tmpGetal);
		scherm.innerText = uitrekenen(resDecimal[0], resDecimal[1], resOperator[0]);
		clear();
	};
}
function clear(){
		tmpGetal = "";
		resDecimal = [];
		resOperator = [];
	}
		
function uitrekenen(getal1, getal2, operator) {
	console.log(getal1);
	console.log(operator);
	console.log(getal2);
	if (operator == "+") {
		return(parseFloat(getal1) + parseFloat(getal2))
	}
	else if (operator == "-") {
		return(parseFloat(getal1) - parseFloat(getal2))
	}
	else if (operator == "/") {
		if (parseFloat(getal2) == 0) {
			return("ERROR")
		}
		else {
			return(parseFloat(getal1) / parseFloat(getal2))
		};
	}
	else if (operator == "X") {
		return(parseFloat(getal1) * parseFloat(getal2))
	};
}


//scherm.textcontent misschien nog wat mee doen ooit
