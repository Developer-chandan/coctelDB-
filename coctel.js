// const apiData = () =>{
//     const inputDrink = document.getElementById("inputDrink");
//     const inputDrinkVal = inputDrink.nodeValue;
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputDrinkVal}`)
//     .then(responce => responce.json())
//     .then(data => coctelDetais(data))
// }

const getDrink = () =>{
    const inputDrink = document.getElementById("inputDrink");
    const inputDrinkVal = inputDrink.value;
    inputDrink.value = "";
    const showCaseItem = document.getElementById('showCase');
    // showCaseItem.textContent="";

    // console.log(inputDrinkVal)
if(inputDrink.value === inputDrinkVal){
    alert("Please Search an item...")
}else{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputDrinkVal}`)
    .then(responce => responce.json())
    .then(data => coctelDetais(data))
}

}
const coctelDetais = (details) =>{
   const drinks  = details.drinks;
   const displayCoctel = document.getElementById('coctelDB');
   displayCoctel.textContent="";
   
   drinks.forEach(drink => {
    //    console.log(drink);
       const div = document.createElement("div");
       div.classList.add("coctelBox");
       div.innerHTML=`
        <div onclick=singleDrink("${drink.idDrink}")>
            <img class="img-fluid" src="${drink.strDrinkThumb}">
            <h3 class="text-center text-danger">${drink.strDrink}</h3>
            <p class="text-center text-secondary">${drink.strInstructions.slice(0, 150)}</p>
      </div>
       `
       displayCoctel.appendChild(div)
   });


}


const singleDrink = (drinkId) =>{
    console.log(drinkId);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
    .then(responce => responce.json())
    .then(data => heighlightSingleDrink(data.drinks)) 

}

const heighlightSingleDrink = (sDrink) =>{
    const displaySingleDrink = document.getElementById("singleDrink");
    displaySingleDrink.textContent="";
    sDrink.forEach(drink => {
    const div = document.createElement("div");
    div.classList.add("sigleDrinkBox");
       
       div.innerHTML=`
        <div class="w-25 mx-auto singleItem">
            <img class="img-fluid" src="${drink.strDrinkThumb}">
            <h3 class="text-center text-danger">${drink.strDrink}</h3>
            <p class="text-center text-secondary">${drink.strInstructions.slice(0,100)}</p>
      </div>`
      displaySingleDrink.appendChild(div);
    });

    }