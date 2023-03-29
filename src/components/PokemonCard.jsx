




function PokemonCard(props) {

    let pokemon = props.pokemon;


    let condition = pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>;
    return (

        <figure >
            {condition}
            <figCaption>{pokemon.name}</figCaption>
        </figure>




    )
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    })
}










export default PokemonCard;

