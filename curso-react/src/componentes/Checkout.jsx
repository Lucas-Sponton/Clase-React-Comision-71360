import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const { cart, totalProducts, sumProducts } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        if (nombre == "") {
            return false;
        }
        if (email == "") {
            return false;
        }
        if (telefono == "") {
            return false;
        }

        const order = {
            buyer: { name: nombre, email: email, phone: telefono },
            items: cart.map(item => ({ id: item.id, title: item.tittle, price: item.price })),
            total: sumProducts()
        }

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(response => {
            setOrderId(response.id);
        })
    }

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
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle"><img src={item.image} alt={item.tittle} width={68} /></td>
                                    <td className="align-middle">{item.tittle}</td>
                                    <td className="align-middle text-center">${item.price} x {item.quantity}</td>
                                    <td className="align-middle text-center">${item.price * item.quantity}</td>
                                </tr>
                            ))}
                            <tr>
                                <td className="align-middle">Total a Pagar</td>
                                <td className="align-middle">&nbsp;</td>
                                <td className="align-middle">&nbsp;</td>
                                <td className="align-middle text-center">${sumProducts()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-success" role="alert">
                        <h3>Gracias por tu compra!</h3>
                        <p>Tu número de compra es: <b>{orderId}</b></p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}


export default Checkout
