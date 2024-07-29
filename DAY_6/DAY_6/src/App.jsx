import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Note from './components/Note';
import API_DATA from './data';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes App</h1>
      </header>
      <div className="notes-container">
        {API_DATA.map((data) => (
          <Note key={data.id} myData={data} />
        ))}
      </div>
    </div>
  );
}

export default App
