import React, { useState } from 'react'
import axios from 'axios'
import './App.css'
import Button from './components/Button'
import { useSpeechSynthesis } from 'react-speech-kit';

function App() {
  const [speech,setSpeech] = useState('')
  const {speak} = useSpeechSynthesis()

  const tellJoke = async () =>{
    let joke = ''
    setSpeech(true)
    const res = await axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist')
  
    if(res.data.setup){
      joke = `${res.data.setup}...${res.data.delivery}`
    }else{
      joke = res.data.joke
    }

    speak({text:joke})
  }

 
  return (
    
    <div className="container">
      <Button text="Tell a joke" onClick={tellJoke} disabled={speech}/>
    </div>

  );
}

export default App;
