import './styles.css';

import GoogleMapReact from 'google-map-react'
import Marker from '../marker'

const Map = () => {
    return (
        <div className="container-map">
            <GoogleMapReact
                bootstrapURLKeys={{ 
                    key: 'AIzaSyDMaxShS1wjRDCF-rWqiIsDV_OK8Rh3eJU' 
                }}
                center={{
                    lat: -21.197433,
                    lng: -47.772673,
                }}
                defaultZoom={15}
            >
                <Marker lat={-21.197433} lng={-47.772673}/>
            </GoogleMapReact>
        </div>
    );
}

export default Map;

