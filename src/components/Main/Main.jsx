import { useState } from "react"
import Button from "../Button/Button"
import Header from "../Header/Header"
import ListAlunos from "../ListAlunos/List"
import VideoView from "../VideoView/VideoView"



function Main(){

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(true)
        console.log(show)
    }


    return(
    <>
    <div id="main-container">
        <main className="Main">
            <div className="h-cursos">
                <Header />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <VideoView />
            </div>
        </main>
        
            <ListAlunos />
    </div>
    
    </>

    )
}

export default Main