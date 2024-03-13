import React, { useState } from "react";

function TextForm(props) {

    const [text, setText] = useState('')

    const handleUpClick = () =>
    {
    //    ? console.log("Uppercase wase Clicked")
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) =>
    {
        // console.log("HandleOnchange");
        setText(event.target.value)

    }
    const handleLowClick = () =>
    {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCopy = () =>
    {
        let text = document.getElementById("myBox");
        // console.log(text);
        text.select();
        navigator.clipboard.writeText(text.value);
        // setText(newText);
    }
    const handleClear = () =>
    {
        let newText = " ";
        setText(newText);
    }
    const handleExtraSpace = () =>
    {
        let newText = text.split(/ [ ] + /)
        setText(newText.join(" "))
    }

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#152b3f'}}>
            <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea
        className="form-control"
        value = {text} onChange={handleOnChange}
        style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#152b3f'}} id="myBox" rows="10">
    </textarea>
    </div>
    <button className = "btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
    <button className = "btn btn-primary mx-2" onClick={handleLowClick}>Convert To UpperCase</button>
    <button className = "btn btn-primary mx-2" onClick={handleClear}>ClearText</button>
    <button className = "btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className = "btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#152b3f'}}>
            <h2>Your Text Summery</h2>
            <p>{text.split(" ").length} word and {text.length} Characters</p>
            <h2>Your Average Time To Read is {0.008*text.split(" ").length} Minutes </h2>
            <h2>Preview:</h2>
            <p>{text.length>0?text:"Enter something to preview it"}</p>
        </div>
        </>
    );
}

export default TextForm;
