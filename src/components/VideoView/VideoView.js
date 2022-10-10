import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { showTitle } from "../../store";

export default function VideoView(){

    const showTitles = useSelector((state) => state.title)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(showTitle())
     }, [dispatch])
    
    return (
        <div style={{backgroundColor: '#102632', width: '90%', height: '80vh' }}>
            {console.log(showTitles.length)}
            <div style={{paddingTop: '200px', textAlign: 'center'}}>
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
            </div>
        </div>
    )
}