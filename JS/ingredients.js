// Spinner
$(document).ready(function () {
    $(".loader").fadeOut(500, function () {
      $(".loading").fadeOut(300, function () {
        $("body").css({ overflow: "auto" });
      });
    });
  });
  
  // nav switch
  $(".open-nav").on("click", function () {
    $(".close-nav").css({ display: "block" });
    $(".open-nav").css({ display: "none" });
    $(".page-item").animate({ top: "0" }, 1000);
    let x = $(".side-nav").innerWidth();
    $(".side-nav").animate({ left: `${0}` }, 1000);
  });
  
  $(".close-nav").on("click", function () {
    $(".close-nav").css({ display: "none" });
    $(".open-nav").css({ display: "block" });
    $(".page-item").animate({ top: "300" }, 1000);
    let x = $(".side-nav").innerWidth();
    $(".side-nav").animate({ left: `${-x + 60}` }, 1000);
  });
  // Sites navigation
  $(".img-frame").on("click", function (e) {
    $(".site-header").addClass("d-none");
    $(".meal").removeClass("d-none");
  });
  
  $(".c-frame").on("click", function (e) {
    $(".c-meal").addClass("d-none");
    $(".category").removeClass("d-none");
  });
  
  $(".img-frame").on("click", function (e) {
    $(".category").addClass("d-none");
    $(".meal").removeClass("d-none");
  });
  $(".country").on("click", function (e) {
    $(".area").addClass("d-none");
    $(".area-meal").removeClass("d-none");
  });
  $(".img-frame").on("click", function (e) {
    $(".area-meal").addClass("d-none");
    $(".meal").removeClass("d-none");
  });
  $(".i-frame").on("click", function (e) {
    $(".ingredients").addClass("d-none");
    $(".ingredient").removeClass("d-none");
  });
  $(".img-frame").on("click", function (e) {
    $(".ingredient").addClass("d-none");
    $(".meal").removeClass("d-none");
  });

  getIngredients();

async function getIngredients() {
    rowData.innerHTML = "" ;
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    response = await response.json();
    displayIngredients(response.meals.slice(0, 20));
}
 function displayIngredients(arr) {
   let cartona = "";

 for (let i = 0; i < arr.length; i++) {
     cartona += `
      <div class="col-md-3">
          <div onclick="getIngredientsMeals('${arr[i].strIngredient}')" class="i-frame rounded-2 text-center">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h3>${arr[i].strIngredient}</h3>
            <p class="text-white">
            ${arr[i].strDescription.split(" ").slice(0,20).join(" ")}
            </p>
          </div>
        </div>
  `
  }
   rowData.innerHTML = cartona
}
async function getIngredientsMeals(area) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${area}`)
    response = await response.json()
    displayMeals(response.meals.slice(0, 20))
}

function displayMeals(arr) {
  let cartona = "";
  for (let i = 0; i < arr.length; i++) {
      cartona += `
          <div class="col-md-3">
        <div onclick="displayIngredientsData('${arr[i].idMeal}')" class="img-frame rounded-2 overflow-hidden position-relative">
          <img class="w-100" src="${arr[i].strMealThumb}" alt="" />
          <div
            class="img-layer p-2 position-absolute d-flex align-items-center text-black"
          >
            <h3>${arr[i].strMeal}</h3>
          </div>
        </div>
      </div>`
  }
  document.getElementById("rowData").innerHTML = cartona;
}
async function displayIngredientsData(id) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    response = await response.json();
    if (response.meals) {
        displayMeal(response.meals[0]);
    } else {
        console.error('No meal found for the given ID');
    }
}
function displayMeal(meal) {
  let cartona = `
      <div class="col-md-4">
        <img class="w-100 rounded-2" src="${meal.strMealThumb}" alt="" />
        <h2>${meal.strMeal}</h2>
      </div>
      <div class="col-md-8">
        <h2>Instructions</h2>
        <p class="text-white">${meal.strInstructions}</p>
        <h3 class="text-white">
          <span class="fw-bolder">Area: </span>
          ${meal.strArea}
        </h3>
        <h3 class="text-white">
          <span class="fw-bolder">Category: </span>
          ${meal.strCategory}
        </h3>
        <h3 class="text-white">Recipes:</h3>
        <ul class="list-unstyled d-flex flex-wrap g-3">
        ${meal.strIngredient1 ? `<li class="alert alert-info m-2 p-1">${meal.strIngredient1}</li>` : ''}
        ${meal.strIngredient2 ? `<li class="alert alert-info m-2 p-1">${meal.strIngredient2}</li>` : ''}
        ${meal.strIngredient3 ? `<li class="alert alert-info m-2 p-1">${meal.strIngredient3}</li>` : ''}
        ${meal.strIngredient4 ? `<li class="alert alert-info m-2 p-1">${meal.strIngredient4}</li>` : ''}
        ${meal.strIngredient5 ? `<li class="alert alert-info m-2 p-1">${meal.strIngredient5}</li>` : ''}
        ${meal.strIngredient6 ? `<li class="alert alert-info m-2 p-1">${meal.strIngredient6}</li>` : ''}
        ${meal.strIngredient7 ? `<li class="alert alert-info m-2 p-1">${meal.strIngredient7}</li>` : ''}
        ${meal.strMeasure1 ? `<li class="alert alert-info m-2 p-1">${meal.strMeasure1}</li>` : ''}
        ${meal.strMeasure2 ? `<li class="alert alert-info m-2 p-1">${meal.strMeasure2}</li>` : ''}
        ${meal.strMeasure3 ? `<li class="alert alert-info m-2 p-1">${meal.strMeasure3}</li>` : ''}
        ${meal.strMeasure4 ? `<li class="alert alert-info m-2 p-1">${meal.strMeasure4}</li>` : ''}
        ${meal.strMeasure5 ? `<li class="alert alert-info m-2 p-1">${meal.strMeasure5}</li>` : ''}
        ${meal.strMeasure6 ? `<li class="alert alert-info m-2 p-1">${meal.strMeasure6}</li>` : ''}
        </ul>
        <h3 class="text-white">Tags:</h3>
        <ul class="list-unstyled d-flex flex-wrap g-3">
        ${meal.strTags ? `<li class="alert alert-danger m-2 p-1">${meal.strTags}</li>` : ''}
        </ul>
        <a
          href="${meal.strSource}"
          target="_blank"
          class="btn btn-success"
        >
          Source</a
        >
        <a
          href="${meal.strYoutube}"
          target="_blank"
          class="btn btn-danger"
          >Youtube</a
        >
      </div>`;
      
  document.getElementById('rowData').innerHTML = cartona;
}
