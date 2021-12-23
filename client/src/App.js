import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [output, setOutput] = useState();
  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((data) => setOutput(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <header>
        <h1>😺</h1>
        <p>{output}</p>
      </header>
    </div>
  );
}

export default App;
