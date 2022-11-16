import { Link } from 'react-router-dom'
export default function CardHomePage({ el }) {
    return (
        <>
            < div className='w-full bg-slate-200 hover:bg-white rounded-md overflow-hidden hover:shadow-md transition-all duration-200' >
                < div className='p-3'>
                    <h1 className='font-bold text-xl text-slate-700 text-center'>{el.name}</h1>
                    <Link to={'/detail/' + el.name}><button className='text-xs font-semibold bg-yellow-300 py-2 rounded-md w-full mt-2 text-slate-600 hover:bg-yellow-400 transition-all duration-200'>Detail</button></Link> 
                </div >
            </div>
        </>
    )
}