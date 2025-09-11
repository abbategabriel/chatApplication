//Gabriel Abbate abbategabriel@gmail.com

import logo from './logo.svg';
import './App.css';
import TextBox from './components/textBox';
import Bubble from './components/bubble';
import { useEffect, useState } from 'react';
import { fetchMessages } from './utils/msgApi';

function App() {
  const [messages, setMessages] = useState([]);
  //call api to get all the messages from memory 
  useEffect(() => {
    const fetchList = async () => {
      const res = await fetchMessages();
      setMessages(res);
    };
    fetchList();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Messaging App
        </p>
        <div className="Message-container">
          {messages.length === 0 ? (
            <p>No messages yet.</p>
          ) : (
            messages?.map((message) => (
              <p key={message.id}>{message.msg}</p>
            ))
          )}
          <Bubble></Bubble>
          <TextBox></TextBox>
        </div>
      </header>
    </div>
  );
}
export default App;
