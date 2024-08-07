import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";
import VolverAtras from "./VolverAtras";

const Cart = () => {
    const { cart, removeItem, clear, totalProducts, sumProducts } = useContext(CartContext);

    if (totalProducts() == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <p className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" fill="currentColor" class="bi bi-bag-heart text-success" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                            </svg>
                        </p>
                        <h1 className="text-success my-4">¡El carrito está vacío!</h1>
                        <h3 className="text-success my-4">Te ayudamos a encontrar lo que buscas.</h3>
                        <Link to={"/"} className="btn btn-outline-success rounded-pill m-3">Volver a la Página Principal</Link>
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
                                <td className="align-middle">
                                    <VolverAtras />
                                </td>
                                <td colSpan={5} className="text-end">
                                    <button className="btn btn-outline-success btn-sm rounded-pill m-2" title="Vaciar Carrito" onClick={clear}>Vaciar Carrito
                                        <img src="/images/trash.svg" alt="Eliminar Producto" width={24} onClick={() => { removeItem(item.id) }} />
                                    </button>
                                </td>
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle d-flex justify-content-center"><img src={item.image} alt={item.tittle} width={68} className="bg-success-subtle rounded-circle" /></td>
                                    <td className="align-middle text-center text-success">{item.tittle}</td>
                                    <td className="align-middle text-center text-success">${item.price} x {item.quantity}</td>
                                    <td className="align-middle text-center text-success"><b>${item.price * item.quantity}</b></td>
                                    <td className="align-middle text-end">
                                        <button className="btn btn-outline-success btn-sm rounded-pill m-2" title="Eliminar Producto">
                                            <img src="/images/trash.svg" alt="Eliminar Producto" width={24} onClick={() => { removeItem(item.id) }} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td className="align-middle text-center text-success"><b>Total a Pagar</b></td>
                                <td className="align-middle">&nbsp;</td>
                                <td className="align-middle">&nbsp;</td>
                                <td className="align-middle text-center text-success"><b>${sumProducts()}</b></td>
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