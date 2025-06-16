
import './App.css'
import Formulario from './components/Formulario'
import MyButton from './components/MyButton'
import AboutPage from './components/About'
import Article from './components/Article'
import Imagen from './components/Imagen'
import Fecha from './components/Fecha'
import Props from './components/Props'

function App() {
  return (
    <>
      <h1>Bienvenido a mi Applicacion</h1>
      <Fecha/>
      <AboutPage/>
      <MyButton/>
      <MyButton/>
      <Article/>
      <Imagen/>

      <Props 
      size={100}
      person={{
        name:'Gregorio y Zara',
        imageId:'YfeOqp2'
      }}
      />

      <Props
      size={50}
      person={{
        name: 'lin laniing',
        imageId: '1bX5QH6'
      }}
      />

      <Formulario/>
      <h1 style={{color:"red" , backgroundColor:"blue"}}>hola</h1>
      
    </>
  )
}

export default App
