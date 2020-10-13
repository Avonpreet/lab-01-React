import React, { useState } from 'react';
import Greeting from './component/Greeting';

function App() {

  const [name, setName ] = useState([]);

  return (
    <div>
      <input
        onChange={({target: {value}}) => setName(value)}
        placeholder="Enter your name"
      />
      <Greeting name={name}/>
    </div>
  );
}

export default App;
