let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let pokemonListElement = $('.pokemon-list'); 

    
    function add(pokemon){
        if(
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "detailsUrl" in pokemon
        ){
            pokemonList.push(pokemon);
        }else{
            console.log("Pokemon is not correct");
        }
    }

    function getAll(){
        return pokemonList;
    }

//Create Pokemon Buttons
    function addListItem(pokemon) {
        let listItem = $('<li class="list-group-item"></li>');
        let button = $('<button class="pokemon-button btn btn-warning" data-target="#pokemon-modal" data-toggle="modal">' + pokemon.name +  '</button>');
        listItem.append(button);
        pokemonListElement.append(listItem);  
        button.on('click', function() {
            showDetails(pokemon);
        });
    }

//Get the complete list of pokemons from the url
    function loadList() {
        return fetch (apiUrl).then(function(response){
            return response.json();
        }).then (function(json){
            json.results.forEach (function(item){
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon); 
                console.log(pokemon);
            })
        }).catch (function(e){
            console.error(e);
        })
    }

//Add Search box filter functionality
    document.querySelector("#search-input");
    addEventListener("input", filterList);

    function filterList(){
        let searchInput = document.querySelector("#search-input");
        let filter = searchInput.value.toLowerCase();
        pokemonListElement[0].childNodes.forEach((item) =>{
            let search = item.textContent;
            if (search.toLowerCase().includes(filter.toLowerCase())){
                item.style.display = "";
            }else{
                item.style.display = "none";
            }
        });
    }


//Attach details to pokemon buttons
    function loadDetails(item){
        let url = item.detailsUrl;
        return fetch(url).then(function(response){
            return response.json();
        }).then (function(details){
            //add details to the item
            item.frontImageUrl = details.sprites.front_default;
            item.backImageUrl = details.sprites.back_default;
            item.height = details.height;
            item.types = details.types.map((type)=>type.type.name).join(",");
        }).catch(function(e){
            console.error(e);
        });
    }

    function showDetails(pokemon){
        loadDetails(pokemon).then(function(){
            showModal(pokemon);
        });
    }

    function showModal(pokemon){
        let modalContainer = $(".modal-body");
        let modalTitle = $(".modal-title");

        modalContainer.empty();  //clear the existing modal content
        modalTitle.text(pokemon.name);

        let pokemonHeight = $('<p>' + "Height: " + pokemon.height + '</p>');
        let pokemonFrontImg = $('<img class="pokemon-img" src="'+ pokemon.frontImageUrl + '"/>');
        let pokemonBackImg = $('<img class="pokemon-img" src="'+ pokemon.backImageUrl + '"/>');
        let pokemonTypes = $('<p>' + "Types: " + pokemon.types + '</p>');

        modalContainer.append(pokemonFrontImg);
        modalContainer.append(pokemonHeight);
        modalContainer.append(pokemonTypes);
        modalContainer.append(pokemonBackImg);


//Add loading spinner

        $(document).ready(function(){
            $(".loading").hide();
            $(".spinner-border").hide();
        })

        //Close when clicking outside the modal
        modalContainer.on('click', (e)=>{
            let target = e.target;
            if(target===modalContainer){
                hideModal();
            }
        });
    }

    function hideModal(){
        let modalContainer = document.querySelector(".modal-container");
        modalContainer.classList.remove("is-visible");
    }

    window.addEventListener("keydown", (e) =>{
        let modalContainer = document.querySelector(".modal-container");
        if(e.key === "Escape" && modalContainer.classList.contains("is-visible")){
            hideModal();
        }
    })


    return{
        add:add,
        getAll:getAll,
        addListItem:addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();

pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});




