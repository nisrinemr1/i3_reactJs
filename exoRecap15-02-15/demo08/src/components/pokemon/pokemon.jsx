

const Pokemon = ({ name, legendary, habitat, captureRate, flavorText }) => {

    return (
        <div>
            <h2> {name} </h2>
            {legendary && (
                <p>Pokémon Légendaire :O</p>  /* si pokémon est légendaire */
            )}
            <p> {habitat} </p>
            <p> {captureRate} </p>

            <p> {flavorText} </p>
        </div>
    )
}

export default Pokemon