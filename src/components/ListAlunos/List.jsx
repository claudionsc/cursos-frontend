import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideAlunos } from "../../store";
import Button from "../Button/Button";
import { getApi } from '../../store/fetchActions'

function ListAlunos(){
    const showAlunos = useSelector((state) => state.alunos)
    const dispatch = useDispatch()

    // const showAluno = [...showAlunos]

    
    useEffect(() => {
       dispatch(getApi())
    }, [dispatch])

    return (
        <section>
            <ul className="list-group">
                {showAlunos.map(alunos => {
                
                return(
                    <li key={alunos.id} className="list-group-item">
                        {/* {alunos[0].nome.id}: ${alunos[0].nome.nome} */}
                        {/* {showAluno[0].alunos} */}
                        {showAlunos[0].alunos}
                    </li>
                    )
                })}
            </ul>
            {/* {showAluno.length > 0 &&*/
                        <Button
                        href="nome"
                        className="item-list"
                        onClick={() => {
                            dispatch(hideAlunos())
                            
                            console.log(showAlunos)
                        }}
                        >
                            Ocultar  
                        </Button>
           /* } */}
        </section>
    )
}

export default ListAlunos