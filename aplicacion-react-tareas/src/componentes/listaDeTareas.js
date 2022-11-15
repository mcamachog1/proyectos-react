import React, { useState} from 'react';
import TareaFormulario from './tareaFormulario';
import Tarea from './tarea';

import '../hojas-de-estilo/listaDeTareas.css'


function ListaDeTareas() {

	const [tareas, setTareas] = useState([]);

	const agregarTarea = tarea => {
		console.log(tarea)
		if (tarea.texto.trim()) {
			tarea.texto = tarea.texto.trim()
			const tareasActualizadas = [tarea, ...tareas]
			setTareas(tareasActualizadas)
		}
	}

	return(
		<>
			<TareaFormulario funcionAgregarTarea={agregarTarea} />
			<div className='tarea-lista-contenedor'>
				{
					tareas.map((tarea) =>
						<Tarea 
							key={tarea.id}
							id={tarea.id}
							texto={tarea.texto}
							completada={tarea.completada}
							agregarTarea={() => agregarTarea(tarea)} />
					)
				}
			</div>		
		</>
	);
}

export default ListaDeTareas;