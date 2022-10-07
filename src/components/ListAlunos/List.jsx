import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideAlunos } from "../../store";
import Button from "../Button/Button";
import { getApi } from '../../store/fetchActions'

function ListAlunos(){
    const alunos = useSelector((state) => state.alunos)
    const dispatch = useDispatch()


    
    useEffect(() => {
       dispatch(getApi())
    }, [dispatch])

    return (
        <section>
            <ul className="list-group">
                {alunos.map((aluno, id) => (
                    <li key={id} className="list-group-item">
                        {alunos.length}
                    </li>
                ))}
            </ul>
            {alunos.length > 0 &&
                        <Button
                        href="nome"
                        className="item-list"
                        onClick={() => {
                            dispatch(hideAlunos())
                            console.log(alunos.name)
                        }}
                        >
                            Ocultar  
                        </Button>
            }
        </section>
    )
}

export default ListAlunos