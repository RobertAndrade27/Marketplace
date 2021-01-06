import { useDispatch, useSelector } from 'react-redux';

import { setShopMapSelected, setMapCenter, } from '../../store/modules/shop/actions'
import './styles.css'


const Petshop = ( { petshop }) => {
    const dispatch = useDispatch ()
    const { petshopMapSelected } = useSelector((state) => state.shop )

    const setSelectedPetshop = () => {

        dispatch(setShopMapSelected(petshop._id));
        dispatch(setMapCenter(petshop.location));
    };
    return (
    <li className={ `petshop d-inline-block ${petshopMapSelected === petshop._id ? 'active' : '' }`}
         onClick={() => setSelectedPetshop()}
         >
        <div className="d-inline-block">
            <img src={petshop.logo} 
         className="img-fluid " 
         />
         </div>
         <div className="d-inline-block pl-3 align-buttom">
                    <b>{petshop.nome}</b>
                    <div className="petshop-infos">
                        <text>
                        <span class="mdi mdi-star"></span>
                        <b> {petshop.destaque} </b></text>  
                        <span class="mdi mdi-cash-usd-outline"></span>
                        <text> {petshop.categoria}</text> 
                        <span class="mdi mdi-crosshairs-gps"></span>
                        <text> 2km</text>               
                    </div>
                    <label className="badge badge-primary mdi mdi-car"> {petshop.Frete}</label>
            </div>
                    
    </li>
    )
}

export default Petshop