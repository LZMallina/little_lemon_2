import './Menu.css';
import useFetchdata from '../hooks/useFetchdata';
import { useEffect } from 'react'

const Weeklyspecialslist = () => {
    const { isLoading, list, fetchError, fetchItems} = useFetchdata();
    //const API_URL = '  http://localhost:3500/weeklyspecialsList';
    const API_URL = 'https://lzmallina.github.io/little_lemon_API/weeklyspecialsList.json';

    useEffect(() => {
        fetchItems(API_URL)
    },[])

    const weeklySpecials = list.map((i) => {
        return <section className="category-container" key={i.name}>
            <h2>{i.categories} 🍽️</h2>
                <section className ="i-container">
                    <div>
                        <span>{i.name}</span>
                        <span className="price"> $ {i.price}</span>
                    </div>
                    <div>{i.ingredients}</div>
                </section>
            </section>
    })
    return (
        <article className="weeklyspecials">
            <h3>All weekly special items get 10% off!</h3>
            {isLoading && <p style ={{color:'blue'}}>Items are loading</p>}
            {fetchError && <p style={{ color: 'red', fontSize: '15px' }}>{`Error: ${fetchError}`}</p>}
            {weeklySpecials}
        </article>
    )
}

export default Weeklyspecialslist;

