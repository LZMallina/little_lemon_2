import './Menu.css';
import useFetchdata from '../hooks/useFetchdata';
import {useEffect} from 'react'

const Foodlist = () => {

    const { isLoading, list, fetchError, fetchItems} = useFetchdata();
    //const API_URL = 'http://localhost:3500/foodList';
    const API_URL = 'https://lzmallina.github.io/little_lemon_API/foodList.json';
    useEffect(() => {
        fetchItems(API_URL)
    },[])
  
    //isolate the catogories for headers using reducer function
    const categoryHeader = list.reduce((categoryBank, item) => {
        if (!categoryBank.includes(item.categories)) {
            categoryBank.push(item.categories)
        }
        return categoryBank;
    }, []);

    //display <sections> with specific categories 

    const categoryContainer = categoryHeader.map((item) => {
        const foodItem = list.filter((food) => {
            return food.categories === item
        }).map((i) => {
            return <section className="i-container" key ={i.name}>
            <div>
                <span>{i.name}</span>
                <span className="price">$ {i.price}</span>
            </div>
            <div>{i.ingredients}</div>
            </section>
             
        })
        return (
            <section className="category-container" key={item}>
                <h2>{item} 🍽️</h2>
                {foodItem}
            </section>
        )
    })
/*********functions above*******/
    return (
        <article>
            {isLoading && <p style ={{color:'blue'}}>Items are loading</p>}
            {fetchError && <p style={{ color: 'red', fontSize: '15px' }}>{`Error: ${fetchError}`}</p>}
            {categoryContainer}
        </article>
    )
}

export default Foodlist;