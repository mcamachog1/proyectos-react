import React from 'react'
import '../hojas-de-estilo/tarea.css'
import { AiOutlineDelete } from "react-icons/ai";

// props: id, texto, completada, completarTarea(), eliminarTarea()
function Tarea(props){
	return(
		<div className = {props.completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
			<div 
				className = 'tarea-texto'
				onClick={() => props.completarTarea(props.id)} 
			>
				{props.texto}					
			</div>
			<div 
				className='tarea-contenedor-iconos'
				onClick={() => props.eliminarTarea(props.id)}
			>
				<AiOutlineDelete className='tarea-icono' />
			</div>
		</div>

	)
}

export default Tarea;