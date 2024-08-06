import { useContext } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "./context/CartContext"

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="card col-md-4 offset-md-1 my-auto" style={{ width: 20 + "rem", height: 20 + "rem" }}>
                    <img src={item.image} className="img-fluid" alt={item.tittle} />
                </div>
                <div className="card col-md-4 offset-md-1 my-auto" style={{ width: 35 + "rem", height: 20 + "rem" }}>
                    <div className="card-body">
                        <h1 className="card-title mb-2 fs-2 text-success text-center" style={{height: 'auto' + "rem"}}>{item.tittle}</h1>
                        <h4 className="card-subtitle mb-2 text-body-secondary text-center"><b className="text-success-emphasis">${item.price}</b></h4>
                        <p className="card-text mb-2 text-center align-content-center text-success" style={{height: 5.5 + 'rem'}}>{item.description}</p>
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                        <div className="alert alert-success text-success text-center" style={{position: 'absolute', bottom: 0, width: 90 + '%'}} role="alert">
                            Aceptamos Visa, Mastercard y/o MercadoPago!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail