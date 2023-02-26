import './Booking.css';
import convertMilitaryTime from '../hooks/convertMilitaryTime'
function BookingSlot({ hour, handleClick, availableTime }) {
    
/*
To compare to today and use getTime()
const now = new Date();
const nowDateTime = now.toISOString();
const nowDate = nowDateTime.split('T')[0];
const formatTime = new Date(nowDate + 'T'+ time).getTime();
*/

    //functions inside of BookingSlot uplifted to BookingPage
    return (
        <section>
            <div>
                {availableTime.map((time) => {
                    const formatTime = new Date("1970-01-01T" + time).getHours();
                    if (formatTime > hour) {
                        let t = convertMilitaryTime(time)
                        return <button onClick={e => handleClick(e)} value={t} key ={t} className ="availableTime-btn">{t}</button>
                    }
                })}
            </div>
        </section>
    )
}

export default BookingSlot;
