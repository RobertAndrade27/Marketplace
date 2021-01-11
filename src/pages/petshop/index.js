import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { requestPetshop } from '../../store/modules/shop/actions'

import Header from '../../components/header';
import Product from '../../components/product/card';

import './styles.css';

const Petshop = ({ match }) => {

     

    const dispatch = useDispatch ();   
    const {petshop} = useSelector(state => state.shop)

    useEffect (() => {
        dispatch(requestPetshop(match.params.id));
    }, [])
    return (
        <div className="h-100">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-2">
                    <img src={petshop.logo} className="img-fluid petshop-image" />
                    <b>{petshop.nome}</b>
                    <div className="petshop-infos">
                        <text>
                        <span class="mdi mdi-star"></span>
                            <b> 4,8</b></text>  
                            <span class="mdi mdi-cash-usd-outline"></span>
                            <text> $$$</text> 
                            <span class="mdi mdi-crosshairs-gps"></span>
                            <text> 2km</text>               
                    </div>
                    <label className="badge badge-primary"> {petshop.Frete}</label>
                    </div>
            <div className="col-10">
                <h5>Produtos</h5>
                <br/>
                <div className="row">
                    {petshop.products?.map((p) => (
                        <Product product={p} />
                    ))}
                        
                      
        </div>                    
        </div>
        </div>
        </div>
        </div>
    )
}


export default Petshop;