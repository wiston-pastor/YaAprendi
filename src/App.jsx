
import './App.css'
import Formulario from './components/Formulario'
import MyButton from './components/MyButton'
import AboutPage from './components/About'
import Article from './components/Article'

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
