import '../App.css';
import './order/Order.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrash, faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons"
import useFetchdata from '../components/hooks/useFetchdata';
import {useEffect, useState, useReducer} from 'react'

//useReducer for adding or removing items
const reducer = (state, action) => {
    if (action.type === 'plus') return { order: state.order + 1 };
    if (action.type === 'minus') return {order: state.order -1}
}
const Orderonline = () => {

     //useReducer to add and subtract
    const initialState = { order: 0 }
    const [state, dispatch] = useReducer(reducer, initialState)
/*
    const handlePlus = () => {
            console.log('I am handleAdd')
        }
        const handleMinus = () => {
            console.log('I am handleMinus')
    }
    */
    //loading the menu for ordering
    const { isLoading, list, fetchError, fetchItems} = useFetchdata();

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
            return <section className ="selection-container"key ={i.name}>
                <div className ='food-container'>
                    <div className='align'>
                    <span>{i.name}</span>
                    <span className="price align">$ {i.price}</span>
                    </div>
                <div style ={{paddingLeft:'28px'}}>{i.ingredients}</div>
            </div>
            <div className ='add-container'>
                    <button type='submit'>Order </button><br />
                    <span  onClick ={()=>dispatch({type:"plus"})}><FontAwesomeIcon icon={faCirclePlus} /></span>
                    <span style={{ color: 'black' }}>{state.order}</span>
                    <span  onClick ={()=>dispatch({type:"minus"})}><FontAwesomeIcon icon={faCircleMinus} /></span>
            </div>    
        </section>    
        })
        
        return (
            <section key={item}>
                <h2>{item}</h2>
                {foodItem}
            </section>
        )
    })

    return (
        <article className="orderOnline">
            {isLoading && <p style ={{color:'blue'}}>Items are loading</p>}
            {fetchError && <p style={{ color: 'red', fontSize: '15px' }}>{`Error: ${fetchError}`}</p>}
        <section className="deliveryChoice">
                <button>PICK UP</button>
                <button>DELIVERY</button>
        </section>
        <section className="orderChoice-container">
                {categoryContainer}
        </section>
            <section className="shoppingList-container">
                <div className="sL-header">
                    <span><FontAwesomeIcon icon={faShoppingCart} /></span>
                    <span>Items in cart: {'0'}</span>
                <span><FontAwesomeIcon icon={faTrash} /></span>
                </div>
                <hr />
                <div className ='summary'>
                    {/*summary of list*/ }
                </div>
                 <hr />
                <div className ='subtotal'>
                    <div>Subtotal</div>
                    <div>$0.00</div>
                    <div>Tax</div>
                    <div>$0.00</div>
                    <div>Total</div>
                    <div>$0.00</div>
                </div><br />
                <button type="submit" className = "checkoutBTN">Checkout</button>
        </section>
    </article>
    )
}

export default Orderonline;