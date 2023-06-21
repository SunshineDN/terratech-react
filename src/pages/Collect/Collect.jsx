import {  MapContainer, TileLayer } from 'react-leaflet';
import { Layout } from '../../layout';
import { Container } from './styles';
import LocationMarker from './LocationMarker';

const Collect = () => {


  return (
    <Layout>
        <MapContainer id='map'
          center={{ lat: 51.505, lng: -0.09 }}
          zoom={13}
          scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
    </Layout>
  )
}

export default Collect;