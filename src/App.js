import { useEffect, useState } from "react";
import "./App.css";
import axios, { Axios } from "axios";

function App() {
  const [text, setText] = useState("");

  const fetchExcuse = (excuse) => {
      axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
      setText(res.data[0].excuse)
    })
    
  }

  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>
      <p>{text}</p>
    </div>
  );
}

export default App;
