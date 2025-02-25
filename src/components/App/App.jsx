import { useState } from 'react'
import UserInput from '../UserInput/UserInput';
import Header from '../Header/Header';
import Table from '../Table/Table';
import InteractButton from '../InteractButton/InteractButton';
import Results from '../Results/Results';
import './App.css'

function App() {
  const [table, setTable] = useState([])
  const [madeChoice, setMadeChoice] = useState(false)

  const getUserInput = (input) => {
    setTable((table) => [input, ...table])
  }

  return (
    <>
      <Header />
      <UserInput getUserInput={getUserInput} />
      <Table table={table} />
      <InteractButton setMadeChoice={setMadeChoice} />
      {madeChoice && <Results table={table} />}
    </>
  )
}

export default App