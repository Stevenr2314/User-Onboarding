import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form';

function App() {

  const [users, setUsers] = useState([])
  const [form, setForm] = useState({name:'', email:'', pwd:'', tos: false})

  const onSubmit = () => {
    setUsers([form, ...users])
    setForm({name:'', email:'', pwd:'', tos: false})
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
    </div>
  );
}

export default App;
