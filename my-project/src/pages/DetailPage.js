import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
export default function DetailPage() {
    const { name } = useParams()
    const [pokemon, setPokemon] = useState()
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + name)
            .then(result => result.json())
            .then(data => setPokemon(data))
    }, [])
    const getAbilities = () => {
        let arr = pokemon.abilities.map(el => el.ability.name)
        return arr.join(', ')
    }
    console.log(pokemon)
    return (
        <section className='md:p-10 h-screen'>
            <div className='container bg-cyan-400 sm:w-[70%] mx-auto p-3 rounded-md shadow-md'>
                <div className="flex items-center">
                    {!pokemon ? <h1>Loading ...</h1> :
                        <>
                            <img src={pokemon.sprites.front_default} className="w-64 rounded-lg mr-2" alt='image not found' />
                            <div>
                                <h1 className='text-slate-50 font-bold text-3xl'>{name}</h1>
                                <p className='text-slate-50 font-bold text-xl'>Abilities : {getAbilities()}</p>
                                <p className='text-slate-50 font-bold text-xl'>Height : {pokemon.height}</p>
                                <p className='text-slate-50 font-bold text-xl'>Species : {pokemon.species.name}</p>
                            </div>
                            <table class="graph">
                                <thead>
                                    <tr>
                                        <th scope="col">Item</th>
                                        <th scope="col">Percent</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        pokemon.stats.map((el, idx) => {
                                            return <>
                                                <tr style={{ "height": `${el.base_stat}%` }}>
                                                    <th scope="row">{el.stat.name}</th>
                                                    <td><span>{el.base_stat}</span></td>
                                                </tr>
                                            </>
                                        })
                                    }
                                </tbody>
                            </table>
                        </>
                    }
                </div>
                <Link to="/"><button className='bg-blue-500 text-xs py-1 px-2 rounded-md text-white font-bold hover:bg-blue-600'>Home</button></Link>
            </div>
        </section>
    )
}