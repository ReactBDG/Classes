import logo from './logo.svg';
import { Container } from './Container'
import './App.css';
import { useState } from 'react';

function App() {
const [triger, setTriger] = useState(true)
  return (
    <div className="App">
      {triger && <Container />}
    </div>
  );
}






export default App;
