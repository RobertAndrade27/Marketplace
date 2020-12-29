import './styles.css';


const Product = () => {
    return (
        <div className="product col-3">
            <img src="https://www.katirapet.com.br/uploads/katirapet/produtos_imagens/golden-ad-frango77.png" 
            className="img-fluid align-center" 
            />
            <button className="btn btn-primary rounded-circle">+</button>
            <h4>
                <label className="badge badge-primary">R$ 90,00</label>
            </h4>
            <small>
                <b>Ração Premium Special Golden Adulto Frango 15kg - Katira Pet</b>
            </small>
        </div>
    );
};

export default Product;