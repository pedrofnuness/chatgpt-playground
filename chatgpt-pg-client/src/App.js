import { useState } from 'react';
import './normalize.css';
import './App.css';
import ChatMessage from './components/ChatMessage';

function App() {
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "How can I help you today?"
    },
    {
      user: "me",
      message: "I want to create a great AI interface"
    },
  ]);
  
  async function handleSubmit (e) {
    e.preventDefault();
    setChatLog([...chatLog, { user: "me", message: input }])
    setInput('');
  }

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              name="user-text-input" 
              className="chat-input-textarea"
              placeholder="Type your message here"
            />
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
