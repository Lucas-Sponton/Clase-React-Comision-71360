import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd}) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [visible, setVisible] = useState(true);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const addToCart = () => {
        if (contador <= itemStock) {
            setItemStock(itemStock - contador);
            onAdd(contador);
            setContador(1)
            setVisible(false)
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])

    return (
        <>
            {visible ?
                <div className="container">
                    <div className="row" style={{position: 'absolute', bottom: 75, width: 100 + '%'}}>
                        <div className="col px-0">
                            <div className="btn-group offset-md-4" style={{height: 'auto'}} role="group">
                                <button type="button" className="btn btn-outline-success rounded-start-pill mt-2 mb-2" onClick={decrementar}>-</button>
                                <button type="button" className="btn btn-outline-success mt-2 mb-2">{contador}</button>
                                <button type="button" className="btn btn-outline-success rounded-end-pill mt-2 mb-2" onClick={incrementar}>+</button>
                            </div>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-outline-success rounded-pill  mt-2 mb-2" onClick={addToCart}>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
                : <Link to={"/cart"} className="btn btn-outline-success rounded-pill mt-3 mb-2 d-flex justify-content-center" style={{position: 'absolute', bottom: 75, width: 90 + '%'}}>Terminar Compra.</Link>}
        </>
    )
}

export default ItemCount