import '../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from 'react';
import Foodlist from './menu/Foodlist';
import Winelist from './menu/Winelist';
import Weeklyspecialslist from './menu/Weeklyspecialslist';

const categories = ["FULL MENU", 'WINE', 'WEEKLY SPECIALS'];

function Menu() {

    //handleDisplay to display the component related to the selected button
    const [display, setDisplay] = useState(<Foodlist />)
    function handleDisplay(i) {
        
        if (i === "FULL MENU") {
            setDisplay(<Foodlist />)
        } else if (i === "WINE") {
            setDisplay(<Winelist />)
        } else if (i === "WEEKLY SPECIALS") {
            setDisplay(<Weeklyspecialslist />)
        } else {
            setDisplay('')
        }
    }
    const catButton = categories.map((i) => {
        return (
            <button type="submit" className="catBTN" key={i} onClick ={()=>handleDisplay(i)}>{i}</button>
        )
    })

    //Scroll button appears and disappear
    const [appear, setAppear] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const y = window.scrollY;
            if (y > 250) {
                setAppear(true)
            }
            if (y < 250) {
                setAppear(false);
            }
        }
        window.addEventListener('scroll',handleScroll)
        return()=>window.removeEventListener('scroll',handleScroll)
    },[])
  
    return (
        <article className="menu">
            <h1>Enjoy Your Meal!</h1>
            <section className="buttons-container">
                {catButton}
            </section>
            <section className="menu-display-container">
                {display}
            </section>
            <div className={appear ? 'scrolling-btn appear' : 'scrolling-btn'}
            
                onClick ={()=>{window.scrollTo(0,0)}}
            >
                <FontAwesomeIcon icon={faArrowCircleUp} />
            </div>
        </article>
    )
}

export default Menu;