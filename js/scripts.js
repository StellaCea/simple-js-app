let pokemonRepository = (function(){
    let pokemonList = [
    {name: "Charmander", height: 6, types: ["rock", "fire"]},
    {name: "Rattata", height: 3, types: ["food", "speed"]},
    {name: "Persian", height: 10, types: ["talk", "haughty"]},
    {name: "Lickitung", height: 12, types: ["saliva", "tingle"]}
    ];

    function add(pokemon){
        //bonus task
        if(typeof pokemon === "object"){
            if(Object.keys(pokemon) === Object.keys(pokemonList[0])){
                alert("New pokemon!");
                pokemonList.push(pokemon);
            } else{
                alert("Pokemon not found");
            }
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
