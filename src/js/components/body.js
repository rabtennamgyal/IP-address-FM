
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Body({lat, lng}) {
    let position = [lat == true ? lat : 40.76538, lng == true ? lng : -73.81736]

    return (
        <MapContainer className='body' center={position} zoom={14} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Location
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Body