import React, {useState} from 'react'


export default function TextForm(props) {
const[text, setText]=useState('');

const handleUpClick = ()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success");

}

const handleLoClick = ()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case","success");
}

const handleClearClick = ()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text is cleared","success");


}

const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied","success");

}

const handleOnChange = (event)=>{
    setText(event.target.value);
}

const handleExtraSpace = ()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra space","success");


}

  return (
    <>
        <div className='container my-3' style={{color:props.mode==='light'?'#042743':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#13466e', color:props.mode==='light'?'#042743':'white'}} rows="8" value={text}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'#042743':'white'}}>
            <h3>Your text summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        
    </>
  )
}
