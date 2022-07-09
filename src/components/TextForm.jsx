import React,{useState} from 'react'

export default function TextForm(props) {

  const upperCaseClick = ()=>{
    setText(text.toUpperCase())
    props.showAlert("Converted to uppercase","success")
  }
  const lowerCaseClick = ()=>{
    setText(text.toLowerCase())
    props.showAlert("Converted to lowercase","success")
  }
  const clearClick = ()=>{
    setText("")
    props.showAlert("Text Cleared","success")
  }
  const speakClick = ()=>{
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  }
  const extraSpaceClick = ()=>{
    setText((text.split(/[ ]+/)).join(" "))
    props.showAlert("Removed all extra spaces","success")
  }
  const replaceClick = ()=>{
    let toReplace = prompt("Enter text to be replaced : ")
    let toreplace = new RegExp(toReplace,'g')
    let toReplaceWith = prompt("Enter the text you want to replace with : ")
    setText(text.replace(toreplace,toReplaceWith))
    props.showAlert(`Replaced all occourances of ${toReplace} with ${toReplaceWith}`,"success")
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
            <button disabled= {text.length=== 0} className = "btn btn-warning mx-2 my-1" onClick={speakClick}>Speak</button>
            <button disabled= {text.length=== 0} className = "btn btn-danger mx-2 my-1" onClick={clearClick}>Clear</button>
            <button disabled= {text.length=== 0} className = "btn btn-primary mx-2 my-1" onClick={upperCaseClick}>Convert to UpperCase</button>
            <button disabled= {text.length=== 0} className = "btn btn-primary mx-2 my-1" onClick={lowerCaseClick}>Convert to LowerCase</button>
            <button disabled= {text.length=== 0} className = "btn btn-primary mx-2 my-1" onClick={replaceClick}>Change all occourances</button>
            <button disabled= {text.length=== 0} className = "btn btn-primary mx-2 my-1" onClick={extraSpaceClick}>Remove Extra Spaces</button>
        </div>
        <div className="container my-5" style= {{color : props.mode ==='dark' ? 'white' : '#38303D'}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").filter((ele)=>{return ele.length !== 0}).length} words and {text.length} characters.</p>
            <p>Average time to read this text -- {0.008 * text.split(" ").filter((ele)=>{return ele.length !== 0}).length} minutes</p>
            <h4>Preview</h4>
            <p>{text.length >0 ? text :"Nothing to Preview"}</p>
        </div>
    </>
  )
}
