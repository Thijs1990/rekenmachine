var scherm = document.querySelector('.scherm');
var tmpGetal = "";
var resDecimal = [];
var resOperator = [];


/*for(var i = 0; i < knop.length; i++ ) {
	knop[i].addEventListener('click', dingenDoenMetGetallen);
}*/


document.onclick = function(event) {
	if (event.target.className == 'number') {
		tmpGetal += (event.target.value)
		scherm.innerText = tmpGetal
	}
	else if ((event.target.className == 'decimal') && (tmpGetal.indexOf(".") == -1)) {
		tmpGetal += (event.target.value)
		scherm.innerText = tmpGetal

	}
	else if (event.target.className == 'operator') {
		resDecimal.push(tmpGetal);
		tmpGetal = "";
		resOperator.push(event.target.value);
		scherm.innerText = event.target.value;
	}
	else if (event.target.className == 'clear') {
		tmpGetal = "";
		resDecimal = "";
		resOperator = "";
		scherm.innerText = tmpGetal
	}
	else if (event.target.className == 'calculate') {
		scherm.innerText = ("calculate")
	};
}


//scherm.textcontent misschien nog wat mee doen ooit
