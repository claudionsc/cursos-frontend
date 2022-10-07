// import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideAlunos } from "../../store";
import Button from "../Button/Button";
// import axios from 'axios'

function ListAlunos(){
    const alunos = useSelector((state) => state.alunos)
    const dispatch = useDispatch()

    // const [alunos, setAlunos] = useState([])

    // useEffect(() => {
    //     axios.get('https://crud-alunos-202210.herokuapp.com/alunos')

    //     .then(response => {
    //         setAlunos(response.data)
    //         console.log(alunos)
    //     })
    // }, [])

    return (
        <section>
            <ul className="list-group">
                {alunos.map((u, index) => (
                    <li key={index} className="list-group-item">
                        {u.nome}{" "}
                    </li>
                ))}
            </ul>
            {alunos.length > 0 &&
                        <Button
                        href="nome"
                        className="item-list"
                        onClick={() => {
                            dispatch(hideAlunos())
                        }}
                        >
                            Ocultar  
                        </Button>
            }
        </section>
    )
}

export default ListAlunos