import "./App.css";
import { useState } from "react";

function App() {
  let [getLanguage,setLanguage] = useState("Greeting Message")


  return (
    <div className="App">
      <div className="greeting-container">{getLanguage}</div>
      <div className="buttons">
        <button onClick={() => {setLanguage("สวัสดี!")}}>สวัสดี!</button>
        <button onClick={() => {setLanguage("Hi!")}}>Hi!</button>
        <button onClick={() =>{setLanguage("你好")}}>你好!</button>
      </div>
    </div>
  );
}


export default App;
