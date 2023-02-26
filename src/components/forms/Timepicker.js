import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

 const CustomTimeInput = ({value, onChange,onClick }) => (
    <input
      onClick ={onClick}
      value={value}
      onChange={onChange}
      className = "custom-time-input"
    />
  );

function Timepicker(props) {

    const { label, name, ...rest } = props;
    return (
        <div className="time-picker">
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({field, form}) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return <DateView
                            id={name} {...field} {...rest} selected={value}
                            onChange={(val) => setFieldValue(name, val)}
                            showTimeSelect 
                            showTimeSelectOnly
                            timeIntervals={30}
                            timeCaption=""
                            minTime={new Date(0, 0, 0, 11, 0)} // 11:00am
                            maxTime={new Date(0, 0, 0, 23, 0)} // 11:00pm
                            dateFormat="h:mm aa"
                            showPopperArrow={true}
                            customInput={<CustomTimeInput />}
                        />
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Timepicker;