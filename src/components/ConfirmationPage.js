import '../App.css';
import './forms/Booking.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function ConfirmationPage() {
  const getData = JSON.parse(sessionStorage.getItem('bookingData'));
  //console.log('getData',getData)
    
  return (
    <article className="confirmation-container">
       <Link to="/"><FontAwesomeIcon icon={faXmark} className="closeOut" /></Link>
      <h1>We look forward to seeing you!
      </h1>
          <section className="information-container">
              <h3>Contact information:</h3>
              <div className='grid'>
                <p>Name:  <u>{getData.firstName} {getData.lastName}</u></p>
                  <p>Email:  <u>{getData.email}</u></p>
                <p>Phone: <u>{getData.phone ? getData.phone : 'not provided'}</u></p>
              </div>
              <hr />
              <h3>Booking details:</h3>
              <div className='grid2'>
                <p>Date: <u>{getData.date}</u><br />
              Time: <u>{getData.time}</u></p>
              <p>Guest: <u>{getData.guestNum}</u><br />
              Occasion:  <u>{getData.type}</u></p>
              </div>
              <p>Special instructions: <u>{getData.comment}</u></p>
              <p>Would you like an email reminder?  <u>{getData.reminder}</u></p>
              <hr />
              <h4 style={{ color:'red'}}>* If you can not make it to your reservation, please contact us 30 minutes ahead to cancel.</h4>
              <div className='grid2'>
                  <p> Little Lemon <br />
                      25 North Clark St <br />Chicago, IL 606602</p>
                <p>littlelemon@meta.com<br />
                312-445-9658</p>
              </div>
  </section>
      <section className="map-container">
      </section>
    </article>
  )
}

export default ConfirmationPage
