import { useState } from 'react'
import UserInput from '../UserInput/UserInput';
import Header from '../Header/Header';
import Table from '../Table/Table';
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
    <div className='app'>
      <Header />
      <UserInput getUserInput={getUserInput} />
      <Table setMadeChoice={setMadeChoice} setRandomPick={setRandomPick} table={table} randomPick={randomPick} madeChoice={madeChoice} />
      <Footer />
    </div>
  )
}

export default App