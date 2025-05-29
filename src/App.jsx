
import './App.css'
import Formulario from './Formulario'
import MyButton from './MyButton'
import AboutPage from './About'
import Article from './Article'

function App() {
  return (
    <>
      <h1>Bienvenido a mi Applicacion</h1>
      <AboutPage/>
      <MyButton/>
      <MyButton/>
      <Article/>
      <Formulario/>
      <h1 style={{color:"red" , backgroundColor:"blue"}}>hola</h1>
      
    </>
  )
}

export default App
