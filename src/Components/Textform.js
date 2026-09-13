// import { useState } from "react";
import React, {useState} from "react";


export default function Textform(props) {
     const [text, setText] = useState("")

     const convertupcase = ()=> {
        let newText =text.toUpperCase();
        setText(newText); 
     }

     const convertlocase = ()=> {
        let newText =text.toLowerCase();
        setText(newText); 
     }

     const removespace = ()=> {
        let newText =text.replace(/\s+/g, " ").trim();
        setText(newText); 
     }

     const convertclearText = ()=> {
        let newText =" ";
        setText(newText); 
     }

      const handleonchange = (event)=> {
        setText(event.target.value); 
     }
    
    return (
      <>
    <div>
      <div className="mb-3">
        <div className="container" > 
            <h1 className="my-3">{props.heading } </h1>
            <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
            <button className="btn btn-primary mx-2 my-1" onClick={convertupcase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={convertlocase}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={removespace}>Remove Spaces</button>
            <button className="btn btn-primary mx-2 my-1" onClick={convertclearText}>Clear Text</button>
        </div>
      </div>
    </div>
    <div className="container">
      <h2>Your Text Summarry</h2>
      <p>total {text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
}
