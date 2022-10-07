import { useState } from "react"
import Button from "../Button/Button"
import Form from "../Form/Form"
import ListAlunos from "../ListAlunos/List"
import { useSelector, useDispatch } from "react-redux";
import { showAlunos } from "../../store";





function Main(){

    // const alunos = useSelector((state) => state.alunos)
    const dispatch = useDispatch()


    return(
    <>
    <h1>Main</h1>
    <Button onClick={() => {dispatch(showAlunos())}} >Button Main</Button>
    <Form />
    
    <article>
        <ListAlunos />
    </article>
    
    </>

    )
}

export default Main