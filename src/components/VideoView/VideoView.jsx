import React from "react";
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { showTitle } from "../../store";
import { AiFillPlayCircle } from 'react-icons/ai'

const Vview = styled.div`
    background-color: #102632;
    height: 80vh;
    /* aspect-ratio: 16/9; */
    width: 70vw;
    position: relative;

    @media (max-width: 500px) {
        height: 50vh;
        width: 100vw;
    }
`
const ImgView = styled.img`
    height: 80vh;
    max-width: 70vw;
    aspect-ratio: 16/9;
    object-fit: contain;

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

const Icon = styled.div`
        
        position: absolute;
       

    svg{
        fill: #6969696e;
        height: 100px;
        font-size: 7rem;
        font-weight: bold;
    }
`



export default function VideoView() {

    const showTitles = useSelector((state) => state.title)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(showTitle())
    }, [dispatch])

    return (
        <Vview>
            <ViewF>
                {showTitles.nome ?
                    <>
                        <Icon>
                            <AiFillPlayCircle />
                        </Icon>
                        <ImgView className="img-view" src={showTitles.img} alt={showTitles.nome} />
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