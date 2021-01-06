import './styles.css';
import { useSelector } from 'react-redux'
import MarkerIcon from '../../assets/marker.png'
import MarkerIconSelected from '../../assets/marker-selected.png'

const Marker = ({ petshop }) => {

    const { petshopMapSelected } = useSelector((state) => state.shop )

    return (
        <div>
        <img src={petshopMapSelected === petshop._id ? MarkerIconSelected : MarkerIcon} />
        <img src={petshop.logo} className="img-marker "/>
        </div>
    );
}

export default Marker