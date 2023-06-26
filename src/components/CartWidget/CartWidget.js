import carroCompras from "./assets/carroCompras.png"

function CartWidget () {
    return (
        <div className="carrito">
            <img src={carroCompras} alt="cart-widget" className="iconos"/>
            <p>0</p>
        </div>
    )
}

export default CartWidget