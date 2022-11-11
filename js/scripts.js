let pokemonList = [
    {name: "Charmander", height: 6, types: ["rock", "fire"]},
    {name: "Rattata", height: 3, types: ["food", "speed"]},
    {name: "Persian", height: 10, types: ["talk", "haughty"]},
    {name: "Lickitung", height: 12, types: ["saliva", "tingle"]}
];
 //Create a for loop
for (let i=0; i<pokemonList.length; i++){
    //print names
//    document.write(pokemonList[i].name + " "); 
    //print names and height
//    document.write(pokemonList[i].name + "(height: " + pokemonList[i].height + ")"); 

    //highlight special pokemon in the list:
    if(pokemonList[i].height > 10){
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow, that's big! <br>");
    }
    else{
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") <br>");
    }

}