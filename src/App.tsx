import React from 'react';
import './App.css';

import Header from './components/Header';
import StartSession from './components/StartSession'

const App = () => {
  let VEX_URL = 'https://nameless-earth-83923.herokuapp.com/'
  return (
    <div className="App"> <br />  
      <img src="https://raw.githubusercontent.com/lyytioy/lyyti-design-system/main/public/lyyti_logo.png" alt="LYYTI's Logo img" />
      <div className='App-components-div'>
        <Header header='Welcome!' />
        <Header header='Click the button below to start the session' />
        <StartSession vexlink={VEX_URL}/> <br />
      </div> <br />
      <p>Welcome page demo.</p>
      <p>Project realized using Vonage API service and the technical support of Turun Yliopisto</p>
      <img src="https://apps.utu.fi/media/logo/UTU_logo_FI_RGB.png" width='150' height='60' alt="UTU's Logo img"/><br />

    </div>
  )
}



export default App;