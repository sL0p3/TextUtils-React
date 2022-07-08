// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React,{useState} from "react";

function App() {
  const[mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode==="light") {
      setMode("dark")
      document.body.style.backgroundColor = "#38303D";
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white";
    }
  }
  
  return (
    <>
      <Navbar title = "TextUtils" mode= {mode} toggleMode = {toggleMode} />
      <div className="container">
        <TextForm heading = "Enter the text to analyze below" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
