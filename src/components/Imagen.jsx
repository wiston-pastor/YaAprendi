function Imagen(){
    const description= "Gregorio y Zara";
    const avatar="https://i.imgur.com/yXOvdOSs.jpg";
    const name="Gregorio y Zara";
return(
    <>
    <h3>Lista de tareas pendiente de {name}</h3>
    <img 
        src={avatar}
        alt={description} 
        className="photo" 
    />
    <ul style={{
        backgroundColor:"red",
        color:"pink"
    }}>
        <li>Inventar nuevo semaforo</li>
        <li>Ensayar la escena de la pelicula</li>
        <li>Mejorar la tecnologia</li>
    </ul>
    
    </>
)
}

export default Imagen;