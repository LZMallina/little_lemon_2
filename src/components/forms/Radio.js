import React from 'react';
import './Booking.css'
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError'
function Radio(props) {
    const { label, name, options, ...rest } = props;
    return (
        <div className="form-control">
            <label>{label}</label>
        <div className ="radio-container">

            <Field name={name} {...rest}>
                {
                    ({field}) => {
                        return options.map((option) => {
                            return (
                                    <div key={option.key}>
                                        <input
                                        type="radio"
                                        id={option.value}
                                        {...field}
                                        value={option.value}
                                        checked={field.value === option.value}
                                    />
                                    <label htmlFor={option.value}>{option.key}</label>
                                </div>   
                           )
                       }) 
                    }
                }
                </Field>
                </div>
            <ErrorMessage name ={name} component ={TextError} />
        </div>
    )
}

export default Radio;