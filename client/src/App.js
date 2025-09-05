import logo from './logo.svg';
import './App.css';
import TextBox from './components/textBox';
import Bubble from './components/bubble';

function App() {
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
