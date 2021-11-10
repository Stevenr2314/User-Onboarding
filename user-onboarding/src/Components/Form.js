import React from 'react';


function Form (props) {

    const handleChange = event => {
        const {name, value, type, checked} = event.target
        const valueToUse = type === 'checkbox' ? checked : value

        props.change(name, valueToUse);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

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
            <button type='submit'>Submit</button>

        </form>
    );
}

export default Form;