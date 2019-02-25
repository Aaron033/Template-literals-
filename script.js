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

document.getElementById("app").innerHTML = `<h1 class="app-title">Pets(${petsData.length} results)</h1>
${petsData.map(function(pet){
    return `
<div class="animal">
<img class="pet-photo" src="${pet.photo}">
<h2> ${pet.name}</h2>
</div>
`
}).join('')}
<p class="footer"> These ${petsData.length} pets were added recently. Check back soon for updates. </p> 

`
