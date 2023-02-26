import '../App.css'
import { Link } from 'react-router-dom';
import { Formik, Form } from "formik";
import * as Yup from 'yup'
import FormikControl from '../components/forms/FormikControl';


function Login() {
    const initialValues = {
        email: '',
        password: '',
    };
    const validationSchema = Yup.object({
        email: Yup.string().email('invalid email').required(" Required"),
        password: Yup.string().required(" Required"),
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
        <div className ="login">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur ={false}
            >
                {formik => {
                
                    return <Form className="login-container">
                        
                        <FormikControl control="input" type="email" label="Email" name="email" />
                        <FormikControl control="input" type="password" label="Password" name="password" />
                         <p>Don't remember your password?</p>
                        <button type="submit" disabled={Formik.isSubmitting}>Submit</button>
                    </Form>
                }}
            </Formik>
            <p>No Account?
                <Link to="/registration">
                     <span>  Sign Up</span>    
                </Link>
            </p>
        </div>
    )
}

export default Login;
