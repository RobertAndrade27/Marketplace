import './styles.css'

const Product = () => {
    return (
        <div className="product-list col-12">
            <div className="row">
                <div className="col-3">
                    <img src="https://th.bing.com/th/id/OIP.-w_5uU37tAgwoaWsDGeVDAEsEs?pid=Api&rs=1" className="img-fluid" />
                </div>
                <div className="col-6">
                    <h6>
                        <label className="badge badge-primary">$30,00</label>
                    </h6>
                    <small>
                        <b>Ração Royal Canin 15kg Maxi Junior Cães Filhotes de Raças Grandes</b>
                    </small>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary rounded-circle">-</button>
                </div>
            </div>
        </div>
    )
}


export default Product