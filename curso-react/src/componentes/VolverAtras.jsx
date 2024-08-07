import { Link } from "react-router-dom"

const VolverAtras = () => {
    return (
        <Link to={"/"} className="p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-circle-fill text-success" viewBox="0 0 16 16" >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" className="svgHover" />
            </svg>
        </Link>
    )
}

export default VolverAtras