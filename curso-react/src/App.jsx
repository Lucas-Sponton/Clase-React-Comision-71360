import './App.css';
import ItemListContainer from './componentes/header/ItemListContainer';
import NavBar from './componentes/header/NavBar';
import 'react-toastify/dist/ReactToastify.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
