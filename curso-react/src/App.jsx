import './Styles/estilos.css';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './componentes/context/CartContext';
import Cart from './componentes/Cart';
import Checkout from './componentes/Checkout';
import Error404 from './componentes/Error404';
import Footer from './componentes/Footer';



function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/*"} element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
