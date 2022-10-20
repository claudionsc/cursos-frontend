import React from "react";
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { showTitle } from "../../store";

const Vview = styled.div`
    background-color: #102632;
    width: 90%;
    height: 80vh;

    @media (max-width: 500px) {
        height: 50vh;
        width: 100vw;
    }
`

const ViewF = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

`



export default function VideoView(){

    const showTitles = useSelector((state) => state.title)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(showTitle())
     }, [dispatch])
    
    return (
        <Vview>
            {console.log(showTitles.length)}
            <ViewF>
            {showTitles.nome ? 
            <>
                <h2>{showTitles.nome}</h2>
                <h3>{showTitles.linguagem} </h3>
            </> :
            <>
               <h2>Feito por <a href="https://www.linkedin.com/in/claudionsc/" rel="noopener" target="_blank">Claudio Nascimento</a></h2>
               <h2>Visite o meu <a href="https://github.com/claudionsc" rel="noopener" target="_blank">Github</a></h2>
           </>
            }
            </ViewF>
        </Vview>
    )
}