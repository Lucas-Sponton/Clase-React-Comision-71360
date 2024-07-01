import './App.css'
import ItemListContainer from './componentes/header/ItemListContainer'
import NavBar from './componentes/header/NavBar'


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer texto={"Todavia en producción!"} texto2={"Regresa más tarde."}/>
    </>
  )
}

export default App
