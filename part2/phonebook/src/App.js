import { useState, useEffect } from 'react'
import axios from 'axios'
import Contact from './components/Contact'
import Form from './components/Form'
import Filter from './components/Filter'
import Notification from './components/Notification'
import contactService from './services/contacts'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState('No new Notifications')
  const [messageType, setMessageType] = useState('')

  useEffect(() => {
    contactService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
      .catch(error => {
        setMessage(
          `Could not retrive contacts`
        );
        setMessageType('error')
      })
  }, [])


  
  const delContactOf = id => {
    const personToDel = persons.find(person => person.id === id)
    console.log(personToDel.id);
  
    axios.delete(`http://localhost:3001/persons/${personToDel.id}`)
    .then(response => {
      setPersons(persons.filter(person => person.id !== personToDel.id));
    })
    .catch(error => {
      setMessage(
        `${personToDel.name} has already been deleted`,
      )
      setMessageType('error')

    })
  }

  const filteredContacts = persons.filter(person => person.name.toLowerCase()
    .includes(newFilter.toLowerCase()))
    .map(person => 
      <li key={person.id}>{person.name} {person.number}</li>
  )

  const numbersToShow = newFilter
    ? filteredContacts
    : persons.map(person => 
      <Contact 
        key={person.id}
        name={person.name} 
        number={person.number} d
        delContact={() => delContactOf(person.id)}/>
    )

  const handleNameChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
     event.preventDefault()
     setNewFilter(event.target.value)
  }

  const addContact = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number:newNumber
    }

    if(persons.find(person => personObject.name === person.name)) {
        alert(`${personObject.name} is already added to phonebook`)
        return
      }

      contactService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(personObject))
        setNewName('')
        setMessage(`${personObject.name} has been added`)
        setMessageType('notification')
      })
  }


  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} messageType={messageType} />
      <Filter handleFilterChange={handleFilterChange} newFilter={newFilter} />
      <h2>add a new</h2>
      <Form addContact={addContact}
        handleNameChange={handleNameChange} 
        newName={newName} 
        handleNumberChange={handleNumberChange}
        newNumber={newNumber} />
      <h2>Numbers</h2>
      <ul>
        {numbersToShow}
      </ul>
    </div>
    
  )
}

export default App