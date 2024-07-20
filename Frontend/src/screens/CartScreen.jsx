import { Link } from "react-router-dom";
import Header from "../components/homeComponents/Header";
import useCartStore from "../store/cartStore";
import Footer from "../components/homeComponents/Footer";

const CartScreen = () => {

    const { cart, updateQuantity, deleteQuantity } = useCartStore();

    const formattedNumber = (price) => {
        return new Intl.NumberFormat('sr-RS', { style: 'currency', currency: 'RSD', minimumFractionDigits: 2 }).format(price);
    }

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleDecrement = (item) => {
        const newQuantity = item.quantity - 1;
        if (newQuantity >= 1) {
            updateQuantity(item.id, newQuantity);
        } else {
            deleteQuantity(item.id);
        }
        
    }

    const handleIncrement = (item) => {
        const newQuantity = item.quantity + 1;
        if (newQuantity <= item.availableQuantity) {
            updateQuantity(item.id, newQuantity);
        } 
    }

    const handleDelete = (id) => {
        deleteQuantity(id);
    }

    return (
        <>
            <Header/>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-7 mb-5">
                        <h3>Vasa korpa</h3>
                        <div className="cart-item row">
                            <div className="col-md-2 d-flex align-items-center justify-content-center">
                                <h5>Slika</h5>
                            </div>
                            <div className="col-md-3 d-flex align-items-center justify-content-center">
                                <h5>Naziv</h5>
                            </div>
                            <div className="col-md-3 d-flex align-items-center justify-content-center">
                                <h5>Količina</h5>
                            </div>
                            <div className="col-md-3 d-flex align-items-center justify-content-center">
                                <h5>Cena</h5>
                            </div>
                        </div>
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item row">
                                <div className="cart-image col-md-2">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="cart-text col-md-3 d-flex align-items-center justify-content-center">
                                    <Link to={`/products/${item.id}`}>
                                        <h4>{item.name}</h4>
                                        <h4>{item.size}</h4>
                                    </Link>
                                </div>
                                <div className="border-container col-md-3 d-flex align-items-center justify-content-center">
                                    <button type="button" onClick={() => handleDecrement(item)} className="btn-custom">-</button>
                                    <input type="text" className="input-custom form-control text-center" value={item.quantity} readOnly/>
                                    <button type="button" onClick={() => handleIncrement(item)} className="btn-custom">+</button>
                                </div>
                                <div className="cart-text col-md-3 d-flex align-items-center justify-content-end">
                                    <h4>{formattedNumber(item.price * item.quantity)}</h4>
                                </div>
                                <div className="col-md-1 d-flex align-items-center justify-content-end">
                                    <button type="button" className="btn-delete" onClick={() => handleDelete(item.id)}>&times;</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-5 mb-5">
                        <h3>Pregled porudzbine</h3>

                        <div className="cart-item row">
                            <div className="col-md-6">
                                <h5>Iznos kupovine:</h5>
                            </div>
                            <div className="total-price col-md-6 text-end">
                                <h5>{formattedNumber(totalPrice)}</h5>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="user-cart row">
                                <div className="col-md-3">
                                    <h6>Korisnik:</h6>
                                </div>
                                <div className="col-md-9 text-end">
                                    <h6>Marko Markovic</h6>
                                </div>
                            </div>
                            <div className="user-cart row">
                                <div className="col-md-3">
                                    <h6>Mail:</h6>
                                </div>
                                <div className="col-md-9 text-end">
                                    <h6>markomark@example.com</h6>
                                </div>
                            </div>
                            <div className="user-cart row">
                                <div className="col-md-3">
                                    <h6>Adresa:</h6>
                                </div>
                                <div className="col-md-9 text-end">
                                    <h6>Bulevar oslobodjenja 59, Novi Sad</h6>
                                </div>
                            </div>  
                        </div>
                        {cart.length > 0 && (
                            <button
                            //   onClick={AddToCartHandle}
                              className="round-black-btn"
                            >
                              Kreiraj porudzbinu
                        </button>      
                        )}
                                 
                    </div>
                </div>
            </div> 
            <Footer/>  
        </>
    )
}

export default CartScreen;