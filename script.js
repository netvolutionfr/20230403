const url = "https://pokeapi.co/api/v2/pokemon/";
const ul = document.createElement("ul");
const divPokemon = document.getElementById("pokemon");

divPokemon.appendChild(ul);

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.results.map((pokemon) => {
            console.log(pokemon.name);
            const li = document.createElement("li");
            li.innerHTML = pokemon.name;
            ul.appendChild(li);
        });
    });