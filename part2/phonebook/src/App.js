import { useState } from 'react'
import Filter from './components/Filter';
import Persons from './components/Persons';
import AddNewPerson from './components/AddNewPerson';

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      phoneNumber : '040-1231244'
    },
    { 
      name: 'Ada Lovelace',
      phoneNumber : '39-44-5323523'
    },
    { 
      name: 'Dan Abramov',
      phoneNumber : '12-43-234345'
    },
    { 
      name: 'Mary Poppendieck',
      phoneNumber : '39-23-6423122'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewPhoneNumber] = useState('');
  const [searchName, setSearchName] = useState('')
  
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

  const handleSearchName = (e) => {
    e.preventDefault();
    setSearchName(e.target.value);
  }
  
 
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={handleSearchName}/>
      <h2>Add a new</h2>
      <AddNewPerson addnewperson={handleSubmit} name={handleNameChange} number={handlePhoneNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} searchName ={searchName}/>
    </div>
  )



}

export default App
