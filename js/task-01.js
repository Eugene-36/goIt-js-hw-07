const productsContainerEl = document.querySelectorAll(".item");

console.log(`В списке ${productsContainerEl.length} категории`)

productsContainerEl.forEach((elem)=>{
    console.log(`Категория: ${elem.firstElementChild.textContent} `)
    
    console.log(`Количество: ${elem.lastElementChild.children.length}`)
    
})

