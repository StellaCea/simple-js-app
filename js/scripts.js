let pokemonList = [
    {name: "Charmander", height: 6, types: ["rock", "fire"]},
    {name: "Rattata", height: 3, types: ["food", "speed"]},
    {name: "Persian", height: 10, types: ["talk", "haughty"]},
    {name: "Lickitung", height: 12, types: ["saliva", "tingle"]}
];

pokemonList.forEach(function(pokemon){
    if(pokemon.height > 10){
        document.write(pokemon.name + " (height: " + pokemon.height + ") - Wow, that's big! <br>");
    }
    else{
        document.write(pokemon.name + " (height: " + pokemon.height + ") <br>");
    }
    
});
