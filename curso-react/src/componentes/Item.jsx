import { Link } from "react-router-dom"

const Item = ({ item }) => {
    return (
        <div className="col-md-3 d-flex justify-content-evenly p-0 m-0 mt-2">
            <div className="card mb-3 bg-success cardTamaño">
                <Link to={"/item/" + item.id} className="bg-success-subtle rounded-circle">
                    <img src={item.image} className="card-img-top mx-auto d-block imgEstilo" alt={item.tittle} />
                </Link>
                <div className="card-body divCardEstilo pt-2">
                    <div className="h-50 my-3">
                        <p className="fs-5 text-white d-flex text-center justify-content-center">{item.tittle}</p>
                    </div>
                    <div className="d-flex justify-content-center divCardPrecioEstilo">
                        <p className="card-text text-white textoEstilo"><b>${item.price}</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item