import MainContenido from "../MainContenido"

const ItemListContainer = ({texto,texto2}) => {
    return (
        <>
        <h1 className="mt-5 mb-2 fw-bold">{texto}</h1>
        <MainContenido />
        <h3 className="mt-4 fw-bold">{texto2}</h3>
        </>
    )
}

export default ItemListContainer