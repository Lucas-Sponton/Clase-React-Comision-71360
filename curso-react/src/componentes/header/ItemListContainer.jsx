
import arrayProductos from "../../assets/json/productos.json"
import { useEffect, useState } from "react"
import ItemList from "../ItemList"
import { useParams } from "react-router-dom"
//import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.category == id) : arrayProductos)
            }, 2000);
        })

        promesa.then(response => {
            setItems(response)
        })
    }, [id])

    /*useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "Items", "XTBs092lQcKWfmCPnVNX");
        getDoc(docRef).then(documento => {
            if (documento.exists()) {
                setItems({id:documento.id, ...documento.data})
            } else {
                console.error("Error! No existe el documento!");
            }
        })
    }, [])*/

    /*useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Items");
        getDocs(itemsCollection).then(snapShot => {
            setItems(snapShot.docs.map(documento => ({id: documento.id, ...documento.data()})))
        })
    }, [])*/

    return (
        <div className="container">
            <div className="row">
                <ItemList items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer