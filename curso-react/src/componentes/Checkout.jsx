import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const { cart, totalProducts, sumProducts, clear } = useContext(CartContext);
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

        const fecha = new Date();
        const order = {
            buyer: { name: nombre, email: email, phone: telefono },
            items: cart.map(item => ({ id: item.id, title: item.tittle, price: item.price })),
            date: `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total: sumProducts()
        }

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(response => {
            setOrderId(response.id);
            clear();
        })
    }

    if (totalProducts() == 0 && orderId) {
        return (
            <div className="container my-5">
                <div className="row my-5">
                    <div className="col text-center">
                        {orderId ? <div className="alert alert-success" role="alert">
                            <h2 className="text-success my-3">Gracias por tu compra!</h2>
                            <p className="text-success my-5 fs-4">Tu número de compra es: <b className="text-success">{orderId}</b></p>
                            <Link to={"/"} className="btn btn-outline-success text-success border-2 rounded-pill m-2 btn-volver">Volver a la Página Principal</Link>
                        </div> : ""}
                    </div>
                </div>
            </div>
        )
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
    } else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5 border border-3 rounded border-success-subtle mt-5 mx-3 p-3 glass-effect1" style={{ height: 21 + 'rem' }}>
                        <form className="checkoutFormFondo1">
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label text-light"><b>Nombre</b></label>
                                <input type="text" className="form-control text-success border-success checkoutFormInputFondo" onInput={(e) => { setNombre(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-light"><b>Email</b></label>
                                <input type="text" className="form-control text-success border-success checkoutFormInputFondo" onInput={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label text-light"><b>Teléfono</b></label>
                                <input type="text" className="form-control text-success border-success checkoutFormInputFondo" onInput={(e) => { setTelefono(e.target.value) }} />
                            </div>
                            <div className="d-flex justify-content-around">
                                <Link to={"/"} className="btn btn-success">Volver atrás</Link>
                                <button type="button" className="btn btn-success" onClick={generarOrden}>Generar Orden</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 border border-3 rounded border-success-subtle mt-5 mx-3 p-2 glass-effect2" style={{ height: 21 + 'rem', overflow: 'auto' }}>
                            <table className="table">
                                <tbody className="">
                                    {cart.map(item => (
                                        <tr key={item.id} className="border-0">
                                            <td className="align-middle d-flex justify-content-center border-0 checkoutFormFondo1"><img className="border rounded-circle bg-success-subtle" src={item.image} alt={item.tittle} width={68} /></td>
                                            <td className="align-middle text-light text-center border-0 checkoutFormFondo1">{item.tittle}</td>
                                            <td className="align-middle text-light text-center border-0 checkoutFormFondo1">${item.price} x {item.quantity}</td>
                                            <td className="align-middle text-light text-center border-0 checkoutFormFondo1"><b>${item.price * item.quantity}</b></td>
                                        </tr>
                                    ))}
                                    <tr style={{ position: 'sticky', bottom: 0}} className="border-0">
                                        <td className="align-middle d-flex justify-content-center text-light border-0 checkoutFormFondo2"><b>Total a Pagar</b></td>
                                        <td className="align-middle border-0 checkoutFormFondo2">&nbsp;</td>
                                        <td className="align-middle border-0 checkoutFormFondo2">&nbsp;</td>
                                        <td className="align-middle border-0 text-center text-light checkoutFormFondo2"><b>${sumProducts()}</b></td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        )
    }
}


export default Checkout
