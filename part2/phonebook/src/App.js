import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      phoneNumber : '040-1231244'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewPhoneNumber] = useState('');
  
  const handleNameChange = (e) => {
    e.preventDefault();
    setNewName(e.target.value);
  }

  const handlePhoneNumberChange = (e) => {
    e.preventDefault();
    setNewPhoneNumber(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newArr = [...persons];
    newArr.push({ name: newName, phoneNumber : newNumber });
    
    if(persons.some(person => person.name.toLowerCase().trim() === newName.toLowerCase().trim())) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(newArr);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange}/>
        </div>
        <div>
          number: <input onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        { persons.map(person => <li key={person.name}>{person.name} {person.phoneNumber}</li>)}
      </ul>
    </div>
  )

}

export default App
