


const NavBar = ({ setPokemonIndex, pokemonIndex }) => {

    const NextPokemon = (test) => {
        setPokemonIndex((test) => test + 1)
    }


    const previousPokemon = (test) => {
        setPokemonIndex((test) => test - 1)
    }
    return (

        <div>

            <button className='button' onClick={() => previousPokemon(pokemonIndex)} >Previous</button>
            <button className='button' onClick={() => NextPokemon(pokemonIndex)}>next</button>
        </div>
    )
}



export default NavBar