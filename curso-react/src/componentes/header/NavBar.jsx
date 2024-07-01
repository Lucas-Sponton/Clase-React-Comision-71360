import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div className="container bg-black">
            <div className="row">
                <div className="col">
                    <h1 className="text-success">StarLoft <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 48 48"><path fill="none" stroke="#03c200" strokeLinecap="round" strokeLinejoin="round" d="M43.5 20.29a19.5 19.5 0 0 1-39 0"></path><path fill="none" stroke="#03c200" strokeLinecap="round" strokeLinejoin="round" d="M39.79 20.29a15.79 15.79 0 0 1-31.58 0"></path><path fill="none" stroke="#03c200" strokeLinecap="round" strokeLinejoin="round" d="M36.07 20.29a12.07 12.07 0 0 1-24.14 0m24.14 0a12.07 12.07 0 1 0-24.14 0"></path><path fill="none" stroke="#03c200" strokeLinecap="round" strokeLinejoin="round" d="M17.41 23.26a2.22 2.22 0 0 0 1.85.83h1.12a1.86 1.86 0 0 0 1.86-1.85h0a1.86 1.86 0 0 0-1.86-1.86h-1.21a1.87 1.87 0 0 1-1.86-1.86h0a1.87 1.87 0 0 1 1.86-1.86h1.12a2 2 0 0 1 1.85.84m4.65-.93V24h3.71"></path></svg></h1>

                </div>
                <div className="col align-content-center">
                    <ul className="nav justify-content-center ">
                        <li className="nav-item">
                            <a className="nav-link link-success" href="#">Bebidas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-success" href="#">Comidas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-success" href="#">GiftShop</a>
                        </li>
                    </ul>
                </div>
                <div className="col align-content-center">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar