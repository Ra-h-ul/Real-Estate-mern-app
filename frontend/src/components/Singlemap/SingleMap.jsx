import { MapContainer, TileLayer , Marker ,Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import './Singlemap.css'
import { Link } from 'react-router-dom';


function Singlemap({pos}){
    const position=[ pos.latitude , pos.longitude ]
    console.log(position);
  return (
    <MapContainer className='singlemap' center={position} zoom={8} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
      <div className="popupContainer">
        <img src={pos.images} alt="" />
        <div className="textContainer">
          <Link to={`/${pos.id}`}>{pos.title}</Link>
         
        </div>
      </div>
      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default Singlemap