import '../App.css'
import './forms/Booking.css';
import BookingForm from './forms/BookingForm';
import { Formik, Form } from "formik";
//import * as Yup from 'yup'
import FormikControl from '../components/forms/FormikControl';
import BookingSlot from './forms/BookingSlot'
import { useState, useEffect } from 'react';

function BookingPage() {

/********bookingSlot************/
    const [submittedDate, setSubmittedDate] = useState('');
    const [submittedTime, setSubmittedTime] = useState('');
    const [submittedGuestN, setSubmittedGuestN] = useState('not provided');
    const [availableTime, setAvailableTime] = useState([]);
    const [hour, setHour] = useState();
    const [pickedTime, setPickedTime] = useState('');
    const [goUp, setGoUp] = useState(false);//<-state control the display of BookingForm

//lift up state from BookingSlot.js
    
    const today = new Date();
    const hourNow = new Date().getHours();
    
    //const currentDate = d.toLocaleDateString();
    //const currentTime = d.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
  
//meta provided an external library in the script tag, which I am unable to access for some reason.  Below are the functions in the external library to generate time slot based on submitted date

    const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 11; i <= 22; i++) {
        if(random() < 0.5) {
            result.push(i + ':00:00');
        }
        if(random() < 0.5) {
            result.push(i + ':30:00');
        }
    }
    setAvailableTime(result)
    };

    const submitAPI = function (formData) {
        if (formData) {
            return true
        } else {
            throw new Error('Data is needed');
        }
    };
    //Display today's availableTime when component mount with initiateTime
       
    const initiateTime = () => {

        if (!submittedDate) {
            fetchAPI(today)
            submitAPI(today)
            setHour(hourNow)
        }
    }

    useEffect(() => {
        initiateTime()
    }, []);
    
    //Update availableTime after customer selected a date with updateTime function.
    
    const updateTime = (submittedDate, submittedTime) => {
        let formatSubmittedDate = new Date(submittedDate);
        fetchAPI(formatSubmittedDate)
        submitAPI(formatSubmittedDate)
        let formatSubmittedTime = new Date(submittedTime).getHours();
        setHour(formatSubmittedTime);
    }
   
    //handlClick is to capture customer picked time
    function handleClick(e) {
        e.preventDefault();
        setPickedTime(e.target.value);
        setGoUp(true);
    }
  
/**********for bookingForm*******/
    const guestOptions = [
        {key: "Guest", value: 'Guest'},
        {key: "2 people", value: '2 people'},
        {key: "3 people",value: '3 people'},
        {key: "4 people", value: '4 people'},
        {key: "5 people", value: '5 people'},
        {key: "6 people", value: '6 people'},
        {key: "7 people", value: '7 people'},
        { key: "8 people", value: '8 people' },
        { key: "9 people", value: '9 people' },
        { key: "10 people", value: '10 people' },
        {key: "Large party", value: 'Large Party'},
    ]

    const initialValues = {
        selectedDate: null,
        selectedTime: null,
        customer: '',
    };
    /*
    const validationSchema = Yup.object({
        selectedDate: Yup.date().required("Selection is required").nullable(),
        selectedTime: Yup.date().required("Selection is required").nullable(),
        customer: Yup.string().required("Selection is required"),
        
    });*///<- validation is not needed here
    const onSubmit = async (values, onSubmitProps) => {
        
        //need to turn date values into strings in order to pass into useStates.  In its original form, it crash the system.
        const submitDate = (values.selectedDate).toISOString();
        setSubmittedDate(submitDate)
        const submitTime = (values.selectedTime).toISOString();
        updateTime(submitDate, submitTime)
        setSubmittedTime(submitTime)
        setSubmittedGuestN(values.customer )

        //alert(JSON.stringify(values, null, 2));
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        console.log("form submitted")
    }
    /***functions above********/
    
    return (
        <article className="booking-container">
            <section className="booking-header-container">
                <h1>Find your table for any occasion</h1>
            
            <Formik
                initialValues={initialValues}
                //validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur ={false}
            >
                {formik => {
                    return <Form className="search-form">
                    
                        <FormikControl control="date" label="" name="selectedDate" />
                    
                        <FormikControl control="time" label="" name="selectedTime" />
                        
                        <FormikControl control="select" label="" name="customer" options={guestOptions} className="customer-number-input" />
                    
                        <button type="submit" disabled={Formik.isSubmitting}>Search</button>
                    </Form>
                }}
            </Formik>
        </section>
        <section className="availability-container">
                <h2>Available Time</h2>
                <h3>{!submittedDate?`Date: ${new Date(today).toLocaleDateString()}`:`Date: ${new Date(submittedDate).toLocaleDateString()}` }</h3>
            <BookingSlot hour={hour} availableTime={availableTime} handleClick ={handleClick} />
            </section>
            <section className="booking-form-container">
                <BookingForm submittedDate={submittedDate} pickedTime={pickedTime} submittedGuestN={submittedGuestN} goUp={goUp} /> 
            </section>
    </article>        
)
}

export default BookingPage;