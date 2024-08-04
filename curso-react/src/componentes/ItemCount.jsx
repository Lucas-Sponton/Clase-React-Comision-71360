import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Flip, toast, ToastContainer } from "react-toastify";

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
            mostrarAlerta()
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])

    const mostrarAlerta = () => {

        toast.success("Estupendo, se agregó tu producto al carrito!", { position: "top-center", theme: "colored", transition: Flip });
    }

    return (
        <>
            {visible ?
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-outline-primary rounded-start-pill mt-2 mb-2" onClick={decrementar}>-</button>
                                <button type="button" className="btn btn-outline-primary mt-2 mb-2">{contador}</button>
                                <button type="button" className="btn btn-outline-primary rounded-end-pill mt-2 mb-2" onClick={incrementar}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button type="button" className="btn btn-outline-primary rounded-pill m-2" onClick={addToCart}>Agregar al carrito</button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
                : <Link to={"/cart"} className="btn btn-outline-primary rounded-pill m-2">Terminar Compra.</Link>}
        </>
    )
}

export default ItemCount