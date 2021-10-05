import { MapContainer, TileLayer } from 'react-leaflet'

function Body({position}) {
    return (
        <MapContainer center={position} className='body' zoom={14} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

export default Body
