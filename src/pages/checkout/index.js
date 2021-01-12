import dayjs from 'dayjs'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


import Header from '../../components/header'
import Product from '../../components/product/list'


import './styles.css';


const Checkout = () => {

    const { cart } = useSelector (state => state.shop);


    const total = cart.reduce((total, product) => {
        return total + product.preco;
    }, 0)


    const [transection, setTransection] = useState ({

        amount: 0,
        card_number: '',
        card_cvv: '',
        card_expiration_date: '',
        card_holder_name: '',
        
        shipping: {
                name: 'Conexo Advantages',
                fee: 1000,
                delivery_date: dayjs().add(7, 'days').format('YYYY-MM'),
                expedited: true,
                address: {
                    country: 'br',
                    state: '',
                    city: "Cotia",
                    neighborhood: '',
                    street: '',
                    street_number: '',
                    zipcode: '',
                },
            }, 
        items: [],
        split_rules: [],
    });

    const setShippingValue = (key, value) => {
        setTransection({
            ...transection,
            shipping:{
                ...transection.shipping,
                address: {
                    ...transection.shipping.address,
                    [key]: value,
                }
            }
        })
    }

    const makePurchase = () =>{
        console.log(transection)
    }

    useEffect(() => {
        setTransection({
            ...transection,
            amount: total.toFixed(2).toString().replace('.', ''),
            items: cart.map((product) => ({
            id: product._id,
			title: product.nome,
			unit_price: product.preco.toFixed(2).toString().replace('.', ''),
			quantity: 1,
			tangible: true
            }))
        })
    }, [total])

  


    return (<div className="h-100">
        <Header />   
        
        <div className="container mt-4">
            <div className="row">
                <div className="col-6">
                    <span className="section-title">Dados de Entrega</span>
                    
                    <div className="row mb-3">
                    <div className="col-3">
                    <input type="text" placeholder="CEP" className="form-control form-control-lg" 
                    onChange={(e) => setShippingValue('zipcode', e.target.value)}
                    />
                    </div>
                    <div className="col-9 pl-0">
                    <input type="text" placeholder="Cidade" className="form-control form-control-lg"
                    onChange={(e) => setShippingValue('city', e.target.value)}/>
                    </div>
                </div>
                <div className="row mb-3">                                    
                <div className="col-9">
                        <input type="text" placeholder="Logradouro" className="form-control form-control-lg"
                        onChange={(e) => setShippingValue('street', e.target.value)}
                        />
                    </div>
                    <div className="col-3 pl-0">
                        <input type="number" placeholder="Número" className="form-control form-control-lg"
                        onChange={(e) => setShippingValue('street_number', e.target.value)}
                        />
                    </div>
                </div>
                <div className="row mb-3">                                    
                <div className="col-6">
                        <input type="text" placeholder="Bairro" className="form-control form-control-lg"
                        onChange={(e) => setShippingValue('neighborhood', e.target.value)}
                        />
                    </div>
                    <div className="col-2 pl-0">
                        <input type="text" maxlength="2" placeholder="UF" className="form-control form-control-lg"
                       onChange={(e) => setShippingValue('state', e.target.value)}
                        />
                    </div>
                    <div className="col-4 pl-0">
                        <input type="text" placeholder="Complemento" className="form-control form-control-lg"/>

                        </div>
                    </div>
                   

                    <span className="section-title">Dados de Pagamento:</span>
                  
                    <div className="row mb-3">
                        <div className="col-12">
                        <input type="text" placeholder="Número do Cartão" className="form-control form-control-lg"
                        onChange={(e) => setTransection({...transection, card_number: e.target.value})}
                        />
                    </div>     
                </div>
                <div className="row mb-3">
                        <div className="col-6">
                        <input type="date" placeholder="Validade" className="form-control form-control-lg"
                        onChange={(e) => setTransection({...transection, card_expiration_date: e.target.value})}
                        />
                </div>
                <div className="col-6 pl-0">
                        <input type="text" maxlength="3" placeholder="CVV" className="form-control form-control-lg"
                        onChange={(e) => setTransection({...transection, card_cvv: e.target.value})}
                        />
            </div>
            </div>
            <div className="row mb-3">
                        <div className="col-6">
                        <input type="text" placeholder="Nome do titular" className="form-control form-control-lg"
                        onChange={(e) => setTransection({...transection, card_holder_name : e.target.value})}
                        />
                </div>
                <div className="col-6 pl-0">
                        <input type="number" placeholder="CPF / CNPJ do titular" className="form-control form-control-lg"/>
            </div>
            </div>

            <div className="row 4">
                <div className="col-12 d-flex justify-content-between align-items-center">
                    <b>Total</b>
                    <h3>R$ {total.toFixed(2).replace('.', ',')}</h3>
                </div>
                <div className="col-12">
                    <button onClick={() => makePurchase() } className="btn btn-block btn-lg btn-primary">
                        Finalizar Compra
                        </button>
                        <br/>
                </div>
               </div>
            </div>
            <div className="col-6">
                <div className="box col mb-4 box-sidebar">
                    <h5>Minha sacola ({cart.length})</h5>

                    <div className="row products">
                        {cart.map(p =>
                        <Product product={p}/>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default Checkout;