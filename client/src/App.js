import logo from './logo.svg';
import './App.css';
import TextBox from './components/textBox';
import Bubble from './components/bubble';
import { useEffect, useState } from 'react';

function App() {

  const [messages, setMessage] = useState([]);

  //call api to get all the messages from memory 
  useEffect(() => {
    //call api 
  });


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Messaging App
        </p>
        <div className="Message-container">
          
          <Bubble></Bubble>
          <TextBox></TextBox>
        </div>
      </header>
    </div>
  );
}

export default App;
