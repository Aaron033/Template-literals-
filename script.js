var petsData = [
     {
    name: "Purrsloud",
    species: "Cat",
    favFoods: ["wet food", "sea food", "<strong>any</strong> food"],
    birthYear: 2017,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
  },
  {
    name: "Barksalot",
    species: "Dog",
    birthYear: 2008,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
  },
    
    {
        name: "Meowsalot", 
        species: "Cat", 
        favFoods: ["tuna", "catnip", "celery"], 
        birthYear: 2012, 
        photo: "http://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
];
//The name in the argument does not matter, I just put the birthYear parameters because it will make more sense.
function age(birthYear){
    //birthYear  is relationated with the pet.birthYear
    //
  let calculatedAge = new Date().getFullYear()- birthYear;
    if(calculatedAge < 1){
        return calculatedAge = "baby"; 
    
    }else if(calculatedAge == 1){
        return calculatedAge + "year old";
    }
    else{
        return calculatedAge + " " + "years old";
    }
    
    //new Date().getFullYear(); native to javascript 
}
//The argument name in foods does not matter 
function foods(foods){
    return `
<h4> Favorite Foods </h4> 
<ul class= "foods-list"> 
${foods.map(food =>`<li> ${food}</li>`
).join('')}
</ul> 

`
}
//ES6 functionality added 
//maps() generates a new array it also takes a function 
function petTemplate(pet){
    return `
<div class="animal">
<img class="pet-photo" src="${pet.photo}">
<h2 class ="pet-name"> ${pet.name}<span class="species">(${pet.species})</span></h2>
<p><strong>Age: </strong>${age(pet.birthYear)} </p>
${pet.favFoods ? foods(pet.favFoods)  : ''}

</div>

`
}


document.getElementById("app").innerHTML = `
 <h1 class="app-title">Pets (${petsData.length} results)</h1>
 ${petsData.map(petTemplate).join('')}
 <p class="footer">These ${petsData.length} pets were added recently. Check back soon for updates. </p> 
`
