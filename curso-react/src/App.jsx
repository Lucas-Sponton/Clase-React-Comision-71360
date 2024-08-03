import './Styles/App.css';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import 'react-toastify/dist/ReactToastify.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './componentes/context/CartContext';
import Cart from './componentes/Cart';



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

          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
