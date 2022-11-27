let pokemonRepository = (function(){
    let pokemonList = [
    {name: "Charmander", height: 6, types: ["rock", "fire"]},
    {name: "Rattata", height: 3, types: ["food", "speed"]},
    {name: "Persian", height: 10, types: ["talk", "haughty"]},
    {name: "Lickitung", height: 12, types: ["saliva", "tingle"]}
    ];

    //bonus task
    function addv(pokemon){
        var aKeys = JSON.stringify(Object.keys(pokemon));
        var bKeys = JSON.stringify(Object.keys(pokemonList[0]));
        if (typeof pokemon === "object" && aKeys==bKeys){
            return true;
        }else{
            alert("Pokemon must be an object");
        }
    }

    function add(pokemon){
        if (addv(pokemon)){
            pokemonList.push(pokemon);
        }else{
            alert("Pokemon must be an object!");
        }
    }

    function getAll(){
        return pokemonList;
    }

    function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener("click", function (event){
            showDetails(pokemon);

        });
    }

    function showDetails(pokemon){
        console.log(pokemon);
    }


    return{
        add:add,
        getAll:getAll,
        addListItem:addListItem
    };

})();
pokemonRepository.add({name:"Hopip", height: 4, types:["grass", "flying"]});

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon); 
    


});


