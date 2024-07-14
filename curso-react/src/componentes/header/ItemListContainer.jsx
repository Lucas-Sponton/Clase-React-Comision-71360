
import arrayProductos from "../../assets/json/productos.json"
import { useEffect, useState } from "react"
import ItemList from "../ItemList"


const ItemListContainer = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos)
            }, 2000);
        })

        promesa.then(response => {
            setItems(response)
        })
    }, [])


    return (
        <div className="container">
            <div className="row">
                <ItemList items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer