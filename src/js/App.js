import Head from '../js/components/head';
import Body from '../js/components/body';
import { useState, useEffect } from 'react';

function App() {
  const [lat, setlat] = useState([])
  const [lng, setlng] = useState([])

  return (
    <div className="App">
      <Head setlat={setlat} setlng={setlng} />
      <Body lat={lat} lng={lng} />
    </div>
  );
}

export default App;
