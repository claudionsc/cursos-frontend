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
            <div style={{paddingTop: '200px', textAlign: 'center'}}>
                <strong><h1>{showTitles.nome}</h1></strong>
                <h2>{showTitles.linguagem}</h2>
            </div>
        </div>
    )
}