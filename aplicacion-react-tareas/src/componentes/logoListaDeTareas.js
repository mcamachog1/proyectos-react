import listaDeTareasLogo from '../imagenes/lista-de-tareas.jpg'
import '../hojas-de-estilo/logoListaDeTareas.css'

function LogoListaDeTareas (){
    return(
        <div className='lista-de-tareas-logo-contenedor'>
        <img 
        src={listaDeTareasLogo} 
        className='lista-de-tareas-logo' />
        </div>
    )
}

export default LogoListaDeTareas;
