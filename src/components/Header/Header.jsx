import React from "react";
    


export default function Header({curso, tecno}) {
    return (
    <>
    <header className="header-curso">
        <div>
            <h3>Nome do curso: {curso}</h3>
            <h5>Nome da Tecnologia: {tecno} </h5>
        </div>
    </header>
    </>
    )
}

