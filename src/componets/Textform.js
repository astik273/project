import React ,{useState} from 'react'
export default function Textform(props){
    const handleUpClick=()=>{
        console.log("uppercase was clicked"+text);
        let newText=text.toUpperCase()
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("onchange");
        setText(event.target.value);
    }
    const [text,setText]=useState("enter text here");
    return(<>
        <h1> {props.heading} </h1>
<div class="mb-3">
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
</div>
    </>

    );
} 