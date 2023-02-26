import '../App.css';
import '../components/forms/Booking.css'
import { Formik, Form } from "formik";
import * as Yup from 'yup'
import FormikControl from '../components/forms/FormikControl';


function RegistrationForm() {

    const radioOptions = [
        {key: "yes", value: 'yes'},
        {key: "no", value: 'no'},
    ]
    const dropdownOptions = [
        {key: "Select", value: ''},
        {key: "Email", value: 'Email'},
        {key: "Telephone", value: 'Telephone'},
        {key: "Text",value: 'Text'},
    ]

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        contactMode: '',
        phone: '',
        subscription: '',
    };
    const validationSchema = Yup.object({
        firstName: Yup.string().min(2, 'too Short').max(50, 'too long').required("required"),
        lastName: Yup.string().min(2, 'too Short').max(50,'too long').required("required"),
        email: Yup.string().email('invalid email').required("required"),
        password: Yup.string().min(8, 'must be at least 8 characters long').required('required'),
        passwordConfirm: Yup.string().oneOf([Yup.ref('password'), ''], 'password must match').required('required'),
        contactMode: Yup.string().required("required"),
        phone: Yup.string().when('contactMode',{is:'Telephone', then: Yup.string().required('required') }),
        subscription: Yup.string().required("required"),
    });
    const onSubmit = (values, onSubmitProps) => {
        console.log("Form values", values)

        //alert(JSON.stringify(values, null, 2));
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        console.log("form submitted")
    }

/***functions above********/
    return (
        <div className="registration">
    
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnChange={true}
                validateOnBlur ={true}
            >
                {formik => {
                    return <Form className="bookForm">
                        <div className="form-container">
                        <p style ={{textAlign:'left', color:'var(--orange)'}}>Registration</p>
                        <FormikControl control="input" type="text" label="First Name" name="firstName" className ="input"/>
                        
                        <FormikControl control="input" type="text" label="Last Name" name="lastName" className ="input"/>
                        
                        <FormikControl control="input" type="email" label="Email" name="email" className ="input"/>

                        <FormikControl control="input" type="password" label="Password" name="password" className ="input" />

                        <FormikControl control="input" type="password" label="Confirm password" name="passwordConfirm" className ="input"/>
                    <div className="flex">
                        <FormikControl control="select" type="type" label="Preferred contact" name="contactMode" options={dropdownOptions} />
                           
                                <FormikControl control="input" type="tel" label="Phone number" name="phone" style={{fontSize:'1.25rem', width:'240px', height:'30px', textAlign:'center'}} />                 
                </div>
                       
                            <div className='flex'>
                                <FormikControl control="radio" label="Would you like to receive our weekly recipe?" name="subscription" options={radioOptions} className ="label2" />
                      </div>
                        
                         <button type="submit" disabled={Formik.isSubmitting}>Submit</button>
                    </div>
                </Form>
                }}
            </Formik>
        </div>
    )
}

export default RegistrationForm;