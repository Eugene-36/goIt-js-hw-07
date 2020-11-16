
const inputRef = document.querySelector('#font-size-control')
console.dir(inputRef)

const rangeRef = document.querySelector('#text')
console.dir(rangeRef)


inputRef.addEventListener('input', changeSize)


function changeSize(event){
rangeRef.style.fontSize = event.currentTarget.value + "px";
}