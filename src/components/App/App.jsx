import { useState } from 'react'
import UserInput from '../UserInput/UserInput';
import Header from '../Header/Header';
import Table from '../Table/Table';
import InteractButton from '../InteractButton/InteractButton';
import Results from '../Results/Results';
import Footer from '../Footer/Footer';
import './App.css'

function App() {
  const [table, setTable] = useState([])
  const [madeChoice, setMadeChoice] = useState(false)
  const [randomPick, setRandomPick] = useState('')

  const getUserInput = (input) => {
    setTable((table) => [input, ...table])
  }

  return (
    <>
      <Header />
      <UserInput getUserInput={getUserInput} />
      <Table table={table} />
      <InteractButton setMadeChoice={setMadeChoice} setRandomPick={setRandomPick} table={table} />
      {madeChoice && <Results randomPick={randomPick} madeChoice={madeChoice} />}
      <Footer />
    </>
  )
}

export default App