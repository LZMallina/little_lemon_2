import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

   //custom the input-field for date-picker
const CustomInput = ({value, onChange,onClick }) => (
    <input
      onClick ={onClick}
      value={value}
      onChange={onChange}
      className = "custom-date-input"
    />
);

function Datepicker(props) {
    
    const { label, name, ...rest } = props;

    return (
        <div className="date-picker">
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({field, form}) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return <DateView
                            id={name} {...field} {...rest} selected={value}
                            onChange={(val) => setFieldValue(name, val)}
                            dateFormat="MMM d, yyyy"
                            minDate={new Date()}
                            showMonthDropdown
                            useShortMonthInDropdown
                            showPopperArrow={true}
                            customInput={<CustomInput />}
                            filterDate={date => date.getDay() !== 0}
                        />
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Datepicker;