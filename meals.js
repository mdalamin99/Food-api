const loadmeals=(search)=>{
const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      fetch(url)
      .then(res=>res.json())
      .then(data=>displayMeals(data.meals))
}
const displayMeals=meals=>{
      const mealsContinaier=document.getElementById("meal-container");
      mealsContinaier.innerHTML='';
      meals.forEach(meals => {
            // console.log(meals);
      const mealDive=document.createElement("div");
      mealDive.innerHTML=`
      <div onclick="loadMealDetail(${meals.idMeal})" class="card">
            <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meals.strMeal}</h5>
            <p class="card-text">${meals.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
      mealsContinaier.appendChild(mealDive);
      // console.log(meals);
      });
}
const searchFood=()=>{
      const searchField=document.getElementById("search-field");
      const searchText=searchField.value;
      loadmeals(searchText);
      searchField.value='';
}
const loadMealDetail=(idMeal)=>{
      // console.log(idMealss)
 const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
      fetch(url)
      .then(res=>res.json())
      .then(data=>displayMealDetails(data.meals[0]));
}
const  displayMealDetails=meal=>{
      const ditailContainer=document.getElementById("detail-container");
      ditailContainer.innerHTML='';
      const mealDivee=document.createElement("div");
      mealDivee.innerHTML=`
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
      `;
      ditailContainer.appendChild(mealDivee);
}

loadmeals('')