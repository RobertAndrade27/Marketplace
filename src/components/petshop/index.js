import './styles.css'


const Petshop = () => {
    return (
    <li className="petshop d-inline-block">
        <div className="d-inline-block"><img src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png" 
         className="img-fluid " 
         />
         </div>
         <div className="d-inline-block pl-3 align-buttom">
                    <b>Cobasi</b>
                    <div className="petshop-infos">
                        <text>
                        <span class="mdi mdi-star"></span>
                        <b> 4,8</b></text>  
                        <span class="mdi mdi-cash-usd-outline"></span>
                        <text> $$$</text> 
                        <span class="mdi mdi-crosshairs-gps"></span>
                        <text> 2km</text>               
                    </div>
                    <label className="badge badge-primary"> Frete Grátis</label>
            </div>
                    
    </li>
    )
}

export default Petshop