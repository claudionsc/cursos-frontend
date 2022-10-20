import { showCursos } from '..'
import api from '../../services/api'

export const getApi = () => {
    return (dispatch) => {
    api
    .get('/cursos')
    .then((res, req) => {
        dispatch(showCursos(res.data))
        
    })
    .catch(console.log)
    }
}