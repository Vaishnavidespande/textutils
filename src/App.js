import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


// import Home from './components/Home';

function App() {

  const [mode, setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  const toggleMode= () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743'
      showAlert("Dark mode has been enabled","success")
      // document.title="TextUtils - Dark Mode"
    }else{
      setMode('light');
      document.body.style.backgroundColor ='white'
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils - Light Mode"
      
    }
  }

  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
     <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
        <Route exact path="/about" element={<About mode={mode}/>}/>
      </Routes>
      </Router>

    </>
  );
}

export default App;
