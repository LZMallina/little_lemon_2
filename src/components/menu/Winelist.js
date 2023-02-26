import './Menu.css';
import useFetchdata from '../hooks/useFetchdata';
import { useEffect } from 'react'

const Winelist = () => {
    const { isLoading, list, fetchError, fetchItems} = useFetchdata();
    //const API_URL = '  http://localhost:3500/wineList';
    const API_URL = 'https://lzmallina.github.io/little_lemon_API/wineList.json';

    useEffect(() => {
        fetchItems(API_URL)
    },[])
    //isolate the catogories for headers using reducer function
    const wineHeader = list.reduce((categoryBank, item) => {
        if (!categoryBank.includes(item.categories)) {
            categoryBank.push(item.categories)
        }
        return categoryBank;
    }, []);

    
    //display <sections> with specific categories 

    const wineheaderContainer = wineHeader.map((item) => {
        const wineItem = list.filter((wine) => {
            return wine.categories === item
        }).map((i) => {
            return <section className ="i-container" key ={i.name}>
                <div>
                    <span>{i.name}</span>
                    <span className="price"> $ {i.priceC} | $ {i.priceB }</span>   
                </div>
            </section> 
        })
        return <section className="category-container" key={item}>
                <h2>{item} 🥂</h2>
                {wineItem}
            </section>
    })
    
    return (
        <article>
            {isLoading && <p style ={{color:'blue'}}>Items are loading</p>}
            {fetchError && <p style={{ color: 'red', fontSize: '15px' }}>{`Error: ${fetchError}`}</p>}
            {wineheaderContainer}
        </article>
    )
}

export default Winelist;