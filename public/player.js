var congratsRef = document.querySelector('.player')

function getValue() {
	return localStorage.getItem('userName');  
}

console.log(getValue());

congratsRef.innerHTML = 'Player: ' + getValue()