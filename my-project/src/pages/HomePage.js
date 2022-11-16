import { useEffect, useState } from "react"
import CardHomePage from "../components/CardHomePage"
export default function HomePage() {
    let baseUrl = 'https://pokeapi.co/api/v2/pokemon'
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        fetch(baseUrl)
            .then(result => result.json())
            .then(data => setPokemons(data))
    }, [])
    const next = () => {
        
    }
    return (
        <section className='md:p-10'>
            <div className='container bg-cyan-400 sm:w-[70%] mx-auto p-3 rounded-md'>
                <h1 className='text-slate-50 font-bold text-3xl'>Pokemon List</h1>
                <form className="mb-3 grid grid-cols-3">
                    <input className="col-span-2 rounded-md text-sm px-3 py-1" placeholder="Search Name" />
                    <button className="bg-blue-500 hover:bg-blue-600 ml-1 rounded-md text-white font-semibold ">Search</button>
                </form>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-1'>
                    {
                        pokemons.length === 0 ? <h1>Loading ....</h1> : pokemons.results.map((el, idx) => <CardHomePage el={el} key={idx} />)
                    }
                </div>
                <div className="flex justify-center gap-2 mt-4">
                    <div onClick={next} className="text-white hover:text-slate-200 cursor-pointer">Next</div>
                    <div onClick={next} className="text-white hover:text-slate-200 cursor-pointer">Previous</div>
                </div>
            </div>
        </section>
    )
}