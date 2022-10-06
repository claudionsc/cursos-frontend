import React from "react";
import { useDispatch } from 'react-redux'
import {showAlunos} from '../../store'

function ShowAlunos() {
    const dispatch = useDispatch()
    const refNome = React.createRef()


    function onSubmit(e) {
        e.preventDefault()

        const nome = refNome.current.value
        dispatch(showAlunos(nome))
        refNome.current.value = ''
    }

    return (
        <section>

            <div>

            </div>
            
        </section>
    )
}