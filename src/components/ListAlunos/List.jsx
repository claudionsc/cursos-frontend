import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  showTitle } from "../../store";
import { getApi } from '../../store/fetchActions'



function ListAlunos(){

    const dispatch = useDispatch()
    const showCursos = useSelector((state) => state.cursos)

    const [title, setTitle] = useState()

    useEffect(() => {
       dispatch(getApi())
    }, [dispatch])

    return (
        <section>
            <ul>
                <div className="uldiv" style={{width: '30vw', height: '70px'}}></div>
                {showCursos.map(cursos => {
                    return(
                        <div className="List-Curso" key={cursos.id} onClick={() =>dispatch(showTitle(cursos))} >
                            <li style={{padding: '15px'}}  className="list-group-item">
                                {cursos.nome}
                            </li>
                        </div>
                    )
                })}
            </ul>
        </section>
    )
}

export default ListAlunos