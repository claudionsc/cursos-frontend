import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { showTitle } from "../../store";

    


export default function Header() {
    const showTitles = useSelector((state) => state.title)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(showTitle())
     }, [dispatch])
    
    return (
    
    <header className="header-curso">
        <div style={{paddingLeft: '25px', paddingTop: '15px'}}>
            <h3>{showTitles.nome}</h3>
            <h5>{showTitles.linguagem} </h5>
            {console.log(showTitles)}
        </div>
    </header>

    )
}

