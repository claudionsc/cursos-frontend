import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideCursos } from "../../store";
import Button from "../Button/Button";
import { getApi } from '../../store/fetchActions'

function ListAlunos(){
    const dispatch = useDispatch()
    const showCursos = useSelector((state) => state.cursos)


    
    useEffect(() => {
       dispatch(getApi())
    }, [dispatch])

    return (
        <section>
            <ul>
                {showCursos.map(cursos => {
                    return(
                        <div className="List-Curso" >
                            <li style={{padding: '15px'}} key={cursos.id} className="list-group-item">
                                {cursos.nome}
                            </li>
                    </div>
                    )
                })}
            </ul>

            {showCursos.length > 0 &&
                        <Button
                            href="nome"
                            className="item-list"
                            onClick={() => {
                                dispatch(hideCursos())
                                
                                console.log(showCursos)
                            }}
                            >
                                Ocultar  
                        </Button>
           /* } */}
        </section>
    )
}

export default ListAlunos