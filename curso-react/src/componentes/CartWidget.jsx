import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";



const CartWidget = () => {
    const { totalProducts } = useContext(CartContext);

    if (totalProducts() > 0) {
        return (
            <Link to={"/cart"}>
                <button type="button" className="btn btn-success position-relative">
                    Carrito<svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M0 1h4.764l3 11h10.515l3.089-9.265l1.897.633L19.72 14H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0zm14 1v3h3v2h-3v3h-2V7H9V5h3V2zM4 21a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></path></svg>
                    <span className="position-absolute top-1 start-100 translate-middle p-2 bg-light text-success border border-success rounded-5">
                        <span>{totalProducts()}</span>
                    </span>
                </button>
            </Link>
        )
    } else {
        return (
            <Link to={"/cart"}>
                <button type="button" className="btn btn-success position-relative">
                    Carrito<svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M0 1h4.764l3 11h10.515l3.089-9.265l1.897.633L19.72 14H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0zm14 1v3h3v2h-3v3h-2V7H9V5h3V2zM4 21a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></path></svg>
                </button>
            </Link>
        )
    }
}

export default CartWidget