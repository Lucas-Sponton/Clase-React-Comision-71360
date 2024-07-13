import './App.css'
import ItemListContainer from './componentes/header/ItemListContainer'
import NavBar from './componentes/header/NavBar'
import ItemCount from './componentes/ItemCount'

import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer texto={"Todavia en producción!"} texto2={"Regresa más tarde."}/>
      <ItemCount stock={10}/>
    </>
  )
}

export default App
