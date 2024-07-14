import './App.css'
import ItemListContainer from './componentes/header/ItemListContainer'
import NavBar from './componentes/header/NavBar'
import ItemCount from './componentes/ItemCount'
import 'react-toastify/dist/ReactToastify.css'
import ItemDetailContainer from './componentes/ItemDetailContainer'


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
      <ItemCount stock={10}/>
    </>
  )
}

export default App
