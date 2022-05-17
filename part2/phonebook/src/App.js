import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import Persons from './components/Persons';
import AddNewPerson from './components/AddNewPerson';
import NotificationMessage from './components/NotificationMessage';
import routes from './server/Routes';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewPhoneNumber] = useState('');
  const [searchName, setSearchName] = useState('')
  const [message, setMessage] = useState({ type: "none", text : "" })

  useEffect( () => {
    const fetchPersons = async () => {
      let newPersons = await routes.getPersons().catch(console.error);
      setPersons(newPersons);
    }
    fetchPersons();
  }, [newName, message]);

  const handleNameChange = (e) => {
    e.preventDefault();
    setNewName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    e.preventDefault();
    setNewPhoneNumber(e.target.value);
  };

  const handleDelete = async (person) => {
    if(window.confirm(`Delete ${person.name}?`)) {
      await routes.deletePerson(person.id).then( () => {
        setMessage({ type: "confirmation", text: `Removed ${person.name} successfully!` })
        setTimeout(() => {
          setMessage({type : "none", text : ""});
        }, 5000);
      }).catch(console.error);
    } 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newId = 1;
    for(let i = 0; i < persons.length; i++) {
        if(newId <= persons[i].id) {
          newId = persons[i].id + 1;
        }
    };

    let newPerson = { name: newName, number : newNumber, id : newId };
    let comparedPerson;
    if(persons.some(person => { 
      comparedPerson = person;
      return person.name.toLowerCase().trim() === newName.toLowerCase().trim(); 
    })) {
      console.log(comparedPerson);
      if(comparedPerson.number !== newPerson.number) {
        if(window.confirm(`${newPerson.name} has already been added to the registery, replace the old number with a new one?`)) {
          newPerson.id = comparedPerson.id;
          await routes.updatePerson(comparedPerson.id, newPerson).then( () => {
            setMessage({ type: "confirmation", text : `Changed phone number on ${newPerson.name}`});
            setTimeout(() => {
              setMessage({type: "none", text: ""});
            }, 5000);
          }).catch(error => {
            if(error.response.status === 404) {
              setMessage({ type : "error", text : `${newPerson.name} has already been removed!`})
            }
            console.log(error.response.status);
          });
        }
      } else {
        alert(`${newName} is already added to phonebook`);
      }
    } else {
      await routes.addPerson(newPerson).then( () => {
        setMessage({type : "confirmation", text : `Added ${newPerson.name} succesfully!`})
        setTimeout(() => {
          setMessage({type : "none", text : ""});
        }, 5000);
      }).catch(error => {
        console.log(error);
      });
    }
  };

  const handleSearchName = (e) => {
    e.preventDefault();
    setSearchName(e.target.value);
  };
  
 
  return (
    <div>
      <h2>Phonebook</h2>
      <NotificationMessage msg={message} />
      <Filter filter={handleSearchName}/>
      <h2>Add a new</h2>
      <AddNewPerson addnewperson={handleSubmit} name={handleNameChange} number={handlePhoneNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} searchName ={searchName} handleDelete={handleDelete} />
    </div>
  )



}

export default App
