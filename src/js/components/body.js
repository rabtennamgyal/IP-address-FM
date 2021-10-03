
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Body() {
    // let ip = "8.8.8.8";
    // let api_key = "at_thlcm3xUn3yX6VJEmvJnNMKnNPc4B";
    // $(function () {
    //     $.ajax({
    //         url: "https://geo.ipify.org/api/v1",
    //         data: {apiKey: api_key, ipAddress: ip},
    //         success: function(data) {
    //             $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
    //         }
    //     });
    // });

    return (
        <MapContainer className='body' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    Location
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Body