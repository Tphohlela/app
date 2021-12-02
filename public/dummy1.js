var nameRef = document.querySelector('.name')
var startRef = document.querySelector('.nameBtn')

startRef.addEventListener('click', function () {
  
  console.log('sdfghjk'+nameRef.value)
  
    
    localStorage.setItem('userName', nameRef.value);
    // localStorage.clear();
});



