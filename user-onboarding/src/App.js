import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form';
import axios from 'axios';

function App() {

  const freshForm = {name:'', email:'', pwd:'', tos: false}
  const [users, setUsers] = useState([])
  const [form, setForm] = useState(freshForm)

  const onSubmit = () => {
    const newUser = {name: form.name.trim(), email: form.email.trim(), pwd: form.pwd, tos: form.tos}
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
        setForm(freshForm) })
      .catch(err => console.log(err))
    
  }

  const onChange = (name, value) => {
    setForm({...form, [name]: value})
  }
  return (
    <div className="App">
      <Form
        form={form}
        submit={onSubmit}
        change={onChange}      
      />
      <br/>
      <h2>User List</h2>
      {users.map(user => {return(
        <div>
          <pre>{user.name}</pre>
        </div>
      )})}
    </div>
  );
}

export default App;
