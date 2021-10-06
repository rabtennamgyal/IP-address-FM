import Head from '../js/components/head';
import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

function App() {
  const [lat, setlat] = useState(33)
  const [lng, setlng] = useState(40)
  let position = [lat, lng]

  function NewMap() {
    const map = useMap()
    map.flyTo(position, 15)
    return null
  }

  return (
    <div className="App">
      <Head setlat={setlat} setlng={setlng} />
      <MapContainer center={position} className='body' zoom={15} scrollWheelZoom={false}>
            <NewMap />
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            </MapContainer>
    </div>
  );
}

export default App;
