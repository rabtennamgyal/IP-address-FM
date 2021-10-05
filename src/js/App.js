import Head from '../js/components/head';
import Body from '../js/components/body';
import React, { useState } from 'react';

function App() {
  const [lat = 0, setlat] = useState([])
  const [lng = 0, setlng] = useState([])
  const positon = [lat, lng]

  return (
    <div className="App">
      <Head setlat={setlat} setlng={setlng} />
      <Body positon={positon} />
    </div>
  );
}

export default App;
