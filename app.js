const promises = [];
for (let i = 1; i <= 600; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(res => res.json()));
};



const displayPokemon = pokemon => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
    .map(
        pokeman =>
        ` <li class="card"> <img class="card-image" src="${pokeman.image}"/> 
        <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2> <p class="card-subtitle"><span class="tituloTipo">TIPO</span><p><span class="type1"> ${pokeman.type} </span></p></p> </li> `
    )
    .join("");
    pokedex.innerHTML = pokemonHTMLString;
};



Promise.all(promises).then(results => {
    const pokemon = results.map(data => ({
        name: data.name,
        id: data.id,
        image: data.sprites["front_default"],
        type: data.types.map(type => type.type.name).join(" " + "\n"),
    }));
    displayPokemon(pokemon);
});
const pokedex = document.getElementById("pokedex");
pokedex.innerHTML = pokemonHTMLString;