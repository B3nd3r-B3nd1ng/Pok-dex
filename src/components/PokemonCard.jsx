




function PokemonCard(props) {
    console.log(props)

    let condition = props.pokemonList[props.pokemonIndex].imgSrc ? <img src={props.pokemonList[props.pokemonIndex].imgSrc} /> : <p>???</p>;

    return (

        <figure className="bulbasaur" >
            {condition}
            <figcaption className="bulbasaurId">{props.pokemonList[props.pokemonIndex].name}</figcaption>

        </figure>
    )
}








export default PokemonCard

