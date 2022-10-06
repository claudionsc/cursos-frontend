import { useState } from "react"
import Button from "../Button/Button"
import Form from "../Form/Form"
import ListAlunos from "../ListAlunos/List"




function Main(){

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(true)
        console.log(show)
    }


    return(
    <>
    <h1>Main</h1>
    <Button onClick={handleShow} >Button Main</Button>
    <Form />
    {show === true && 
    <article>
        <ListAlunos />
    </article>
    }
    </>

    )
}

export default Main