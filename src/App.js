
import { useState } from 'react';
import './App.css';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';

const msgData = [
  // { message: "Connecting..." },
  { author: "Them", message: "Hi..."},
  { author: "Them", message: "Hello..."},
  { author: "Them", message: "Good evening..."},
  { author: "Them", message: "How are you?..."},
  { author: "You", message: "Hi..." , user: true},
]
let state = true;

function App() {
  const [data, setData] = useState(msgData);

  const onMessageHandler = (msg) => {
    let newMsg;
    if(state){
      newMsg = { author: "You", message: msg, user: true};
      state = !state;
    } else {
      newMsg = { author: "Them", message: msg};
      state = !state;
    }
    console.log()
    // let newMsg = { author: "Them", message: msg};
    setData([...data, newMsg])
  }

  return (
    <div className="App">
      <h2>Simple Chat Message Interface App</h2>
      <MessageList messages={data} />
      <MessageForm onMessage={onMessageHandler} />
    </div>
  );
}

export default App;
