const Item = ({ item }) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={item.image} className="card-img-top" alt={item.tittle} />
                <div className="card-body">
                    <p className="card-text">{item.tittle}</p>
                    <p className="card-text">{item.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Item