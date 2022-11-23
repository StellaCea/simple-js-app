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

    return{
        add:add,
        getAll:getAll
    };

})();
pokemonRepository.add({name:"Hopip", height: 4, types:["grass", "flying"]});
pokemonRepository.getAll().forEach(function(pokemon){
    if(pokemon.height > 10){
        document.write(pokemon.name + " (height: " + pokemon.height + ") - Wow, that's big! <br>");
    }
    else{
        document.write(pokemon.name + " (height: " + pokemon.height + ") <br>");
    }
});
