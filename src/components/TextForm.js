import React,{useState} from 'react'

export default function TextForm(props) {

  const upperCaseClick = ()=>{
    setText(text.toUpperCase())
  }
  const lowerCaseClick = ()=>{
    setText(text.toLowerCase())
  }
  const clearClick = ()=>{
    setText("")
  }
  const speakClick = ()=>{
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  }
  const extraSpaceClick = ()=>{
    setText((text.split(/[ ]+/)).join(" "))
  }
  const replaceClick = ()=>{
    let toReplace = prompt("Enter text to be replaced : ")
    toReplace = new RegExp(toReplace,'g')
    let toReplaceWith = prompt("Enter the text you want to replace with : ")
    setText(text.replace(toReplace,toReplaceWith))
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const [text,setText] = useState("");
  return (
    <>
        <div className="container" style= {{color : props.mode ==='dark' ? 'white' : '#38303D'}}>
            <h1 className= "my-3" >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style= {{backgroundColor : props.mode ==='dark' ? '#38303D' : 'white', color :props.mode ==='dark' ? 'white' : '#38303D' }} value = {text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className = "btn btn-warning mx-2" onClick={speakClick}>Speak</button>
            <button className = "btn btn-danger mx-2" onClick={clearClick}>Clear</button>
            <button className = "btn btn-primary mx-2" onClick={upperCaseClick}>Convert to UpperCase</button>
            <button className = "btn btn-primary mx-2" onClick={lowerCaseClick}>Convert to LowerCase</button>
            <button className = "btn btn-primary mx-2" onClick={replaceClick}>Change all occourances</button>
            <button className = "btn btn-primary mx-2" onClick={extraSpaceClick}>Remove Extra Spaces</button>
        </div>
        <div className="container my-5" style= {{color : props.mode ==='dark' ? 'white' : '#38303D'}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length } words and {text.length} characters.</p>
            <p>Average time to read this text -- {0.008 * text.split(" ").length } minutes</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
    </>
  )
}
