import { useState } from "react";


function App() {
  const [message, setMessage] = useState(
    "JavaScript is a good langauge"
    );


  function handleClick() {
    setMessage("Some new message")
  }


  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Update the message</button>
    </div>
  );

}

export default App;
