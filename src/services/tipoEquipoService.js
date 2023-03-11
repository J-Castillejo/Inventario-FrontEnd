import{axiosInstance} from '../helpers/axios-config';

const getTiposEquipos = () =>{
    return axiosInstance.get('tipo-equipo', {
        headers:{
            'Content-type': 'application/json'
        }
    })
}
const crearTipoEquipo = (data) =>{
    return axiosInstance.post('tipo-equipo', data,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}
const editTipoEquipo = (tipoId, data) => {
    return axiosInstance.put(`tipo-equipo/${tipoId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
} 

export{
    getTiposEquipos, crearTipoEquipo, editTipoEquipo
}
