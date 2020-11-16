
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


const listingredients = document.querySelector('#ingredients');                         


const creatListIngredients = (ingredient) => {
    const creatLi = document.createElement('li')
    creatLi.textContent = ingredient;
    listingredients.appendChild(creatLi)
    return creatLi;
}

console.log(creatListIngredients(...ingredients));

ingredients.map(ingredient => creatListIngredients(ingredient))
