import { showAlunos } from '..'
import api from '../../services/api'

export const getApi = () => {
    return (dispatch) => {
        api
            .get('/alunos')
            .then((res, req) => {
                dispatch(showAlunos(res.data.alunos))
                console.log(res.data.alunos)
            })
            .catch(console.log)
    }
}