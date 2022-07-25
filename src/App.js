import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Erase from './components/Erase';
import List from './components/List';

function App() {
  let [text, setText] = useState('')
  let [compositores, setCompositores] = useState([
    {
      nombre: 'Wolfgang Amadeus Mozart',
      fecha: 1756,
      canciones: ['Symphonie Nr 40', 'Don Giovanni']
    },
    {
      nombre: 'Ludwig van Beethoven',
      fecha: 1770,
      canciones: ['Symphonie No.5', 'Piano Sonata No.32']
    },
    {
      nombre: 'Johann Sebastian Bach',
      fecha: 1685,
      canciones: ['Vivace', 'Largo ma non tanto']
    }
  ])

  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/eliminar'>Eliminar</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={
          <>
            <List compositores={compositores} />
            <input type='text' placeholder='Nombre a guardar' value={text} onChange={(event) => setText(event.target.value)} />
            <button type='button' onClick={() => {
              setCompositores([...compositores, { nombre: text }])
              setText('')
            }}>Enviar</button>
          </>
        }
        />
        <Route path='/eliminar' element={<Erase compositores={compositores} setCompositores={setCompositores} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
