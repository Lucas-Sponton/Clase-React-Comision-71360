import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clear, totalProducts, sumProducts } = useContext(CartContext);

    if (totalProducts() == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <p><img src="/images/bag-heart.svg" alt="Carrito" width={80} /></p>
                        <h1>El carrito está vacío!</h1>
                        <h3>Te ayudamos a encontrar lo que buscas.</h3>
                        <Link to={"/"} className="btn btn-outline-primary rounded-pill m-2">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={5} className="text-end">
                                    <button className="btn btn-outline-success btn-sm rounded-pill m-2" title="Vaciar Carrito">Vaciar Carrito
                                        <img src="/images/trash.svg" alt="Eliminar Producto" width={24} onClick={() => { removeItem(item.id) }} />
                                    </button>
                                </td>
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle"><img src={item.image} alt={item.tittle} width={68} /></td>
                                    <td className="align-middle">{item.tittle}</td>
                                    <td className="align-middle text-center">${item.price} x {item.quantity}</td>
                                    <td className="align-middle text-center">${item.price * item.quantity}</td>
                                    <td className="align-middle text-end">
                                        <button className="btn btn-outline-success btn-sm rounded-pill m-2" title="Eliminar Producto">
                                            <img src="/images/trash.svg" alt="Eliminar Producto" width={24} onClick={() => { removeItem(item.id) }} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td className="align-middle">Total a Pagar</td>
                                <td className="align-middle">&nbsp;</td>
                                <td className="align-middle">&nbsp;</td>
                                <td className="align-middle text-center">${sumProducts()}</td>
                                <td className="align-middle text-end">
                                    <Link to={"/checkout"} className="btn btn-outline-success btn-sm rounded-pill m-2" title="Ir al CheckOut">Terminar Compra</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart