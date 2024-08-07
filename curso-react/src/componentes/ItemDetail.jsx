import { useContext } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "./context/CartContext"
import VolverAtras from "./VolverAtras";

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col ms-4 mt-3">
                    <VolverAtras />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-4 offset-md-1 my-auto" style={{ width: 20 + "rem", height: 20 + "rem" }}>
                    <img src={item.image} className="img-fluid bg-success rounded-circle" alt={item.tittle} />
                </div>
                <div className="card col-md-4 offset-md-1 my-auto glass-effect3" style={{ width: 35 + "rem", height: 20 + "rem" }}>
                    <div className="card-body checkoutFormFondo1">
                        <h1 className="card-title mb-2 fs-2 text-white-50 text-center" style={{ height: 'auto' + "rem" }}>{item.tittle}</h1>
                        <h4 className="card-subtitle mb-2 text-body-secondary text-center"><b className="text-white-50">${item.price}</b></h4>
                        <p className="card-text mb-2 text-center align-content-center text-white-50" style={{ height: 5.5 + 'rem' }}>{item.description}</p>
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                        <div className="alert alert-success border-success text-white-50 text-center checkoutFormFondo1" style={{ position: 'absolute', bottom: 0, width: 90 + '%' }} role="alert">
                            Aceptamos Visa, Mastercard y/o MercadoPago!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail