import './styles.css'

import googleMapReact from 'google-map-react'



const Map = () => {
    return(
        <div className="container-map">
            <googleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDgjaXS9hhhAKeBFucICG7qv3tyNYgSiOM' }}
                center = {{
                    lat:-21.197433,
                    lng:-47.772673,
                }}
                defaultZoom={15}
            ></googleMapReact>
        </div>
    )
}



export default Map;