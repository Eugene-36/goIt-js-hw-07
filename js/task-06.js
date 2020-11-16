
const inputRef = document.querySelector('.js-inputValue')
console.dir(inputRef)

inputRef.addEventListener('blur', handleInputBlur)

function handleInputBlur () {

let requiredLength  = +inputRef.attributes["data-length"].value;
let currentLength = inputRef.value.length;

  if(currentLength === requiredLength){
    inputRef.classList.add('valid') 
    inputRef.classList.remove('invalid')
  }else{
    inputRef.classList.add('invalid') 
    inputRef.classList.remove('valid')
  }

}


