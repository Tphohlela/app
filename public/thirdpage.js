var congratsRef = document.querySelector('.congrats')

function getValue() {
	return localStorage.getItem('userName');  
}

console.log(getValue());

congratsRef.innerHTML = 'Congratulations! ' + getValue()