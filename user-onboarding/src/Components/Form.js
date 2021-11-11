import React, {useState, useEffect} from 'react';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    name: Yup.string()
        .required('Must include a name'),
    email: Yup.string()
        .email('Must be a valid email address.')
        .required('Must include an email address.'),
    pwd: Yup.string()
        .required('Password is required.')
        .min(8, 'Password must be at least 8 characters long.'),
    tos: Yup.boolean(true)
        .required('You must accept Terms of Service')
})

function Form (props) {

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        pwd: '',
        tos: ''
    })
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const handleChange = event => {
        const {name, value, type, checked} = event.target
        const valueToUse = type === 'checkbox' ? checked : value

        props.change(name, valueToUse);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    useEffect( () => {
        formSchema.isValid(props.form)
        .then(valid => {
            setButtonDisabled(!valid)
        })
    }, [props.form])

    return(
        <form onSubmit={handleSubmit}>
            <label>Name: 
                <input 
                type='text'
                name='name'
                value={props.form.name}
                onChange={event => handleChange(event)}
                />

            </label>
            <br/>
            <label>Email: 
                <input 
                type='text'
                name='email'
                value={props.form.email}
                onChange={event => handleChange(event)}
                />
            </label>
            <br/>
            <label>Password: 
                <input 
                type='password'
                name='pwd'
                value={props.form.pwd}
                onChange={event => handleChange(event)}
                />
            </label>
            <br/>
            <label>Terms of Service 
            <input 
                type='checkbox'
                name='tos'
                checked={props.form.tos}
                onChange={event => handleChange(event)}
                />
            </label>
            <br/>
            <button type='submit' disabled={buttonDisabled}>Submit</button>

        </form>
    );
}

export default Form;