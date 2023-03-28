


const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
        imgSrc: "src/assets/151.png"
    },
    {
        name: "charizard"

    },
];

function PokemonCard() {

    let pokemon = pokemonList[2];
    let condition = pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>;
    return (

        <figure >


            {condition}
            <figCaption>{pokemon.name}</figCaption>
        </figure>




    )
}





export default PokemonCard;

