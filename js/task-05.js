
const inputRef = document.querySelector('.js-input')
console.log(inputRef)

const nameLabelRef = document.querySelector('#name-output')

inputRef.addEventListener('input', Event =>{

    nameLabelRef.textContent = Event.target.value ? nameLabelRef.textContent = Event.target.value : 'незнакомец'
})

