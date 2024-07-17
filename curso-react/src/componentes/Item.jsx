import { Link } from "react-router-dom"

const Item = ({ item }) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <Link to={"/item/" + item.id}>
                    <img src={item.image} className="card-img-top" alt={item.tittle} />
                </Link>
                <div className="card-body">
                    <p className="card-text">{item.tittle}</p>
                    <p className="card-text">{item.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Item