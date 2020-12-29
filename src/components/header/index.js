import Logo from '../../assets/logo.png'
import LogoWhite from '../../assets/logo-white.png'

import './styles.css';

const Header = ({ whiteVersion }) => {

    //evento para abrir itens
    const openDrawer = () => {
        const event = new CustomEvent('openCart');
        window.dispatchEvent(event);
    }


    return ( 
    <div className="col-12">
    <header className="py-4 px-4 text-center">
        <img src={whiteVersion ? LogoWhite : Logo} className="img-fluid"/>
    </header>
    <button onClick={() => openDrawer()}
     class="btn btn-secondary cart-button">
        <span className="mdi mdi-cart"></span>
        2 ítens</button>
</div>
);
}




export default Header;

