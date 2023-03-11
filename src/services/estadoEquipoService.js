import{axiosInstance} from '../helpers/axios-config';

const getEstadoEquipos = () =>{
    return axiosInstance.get('estado-equipo', {
        headers:{
            'Content-type': 'application/json'
        }
    })
}
const crearEstadoEquipo = (data) =>{
    return axiosInstance.post('estado-equipo', data,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}
const editEstadoEquipo = (estadoId, data) => {
    return axiosInstance.put(`estado-equipo/${estadoId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
} 


export{
    getEstadoEquipos, crearEstadoEquipo, editEstadoEquipo
}