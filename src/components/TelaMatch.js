import React from 'react'
import styled from "styled-components"

const StyledTelaMatch = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items:center ;

img{
    border-radius: 50%;
    height: 5em;
    width: 5em;
    object-fit: cover;
    object-position: center;
    padding: 2px;
    border: 2px solid rgb(252,90,103);
    box-shadow:3px 3px rgb(251,115,92) ; 
    margin: 15px;
    }

    h4{
    background-color: rgba(252,90,103, 0.2);
    padding:2px ;
    border-radius: 10px;
    border: 2px solid rgba(252,90,103, 0.8);    
    }    
`
const ContainerMatch = styled.div`
    button{
        background-color: rgb(251,115,92) ;
        width: 7em;
        border-radius: 5px;   
        margin-left:3em;
        margin-right:3em;
        margin-top: 1em;
        margin-bottom:1em ;

        :hover{
            background-color: pink;               
        }       
        :active{
            background-color: red ;
            box-shadow:0 0 2em blue;
        } 
    }
    .bot4{
        transform: translateX(0px);
        animation: float4 3s ease-in-out;
    }
    @keyframes float4 {
    0% {
        transform: translateX(-30px);
    }
    
    100%{
        transform: translateX(0px);
    }
    
    }
    .bot5{
        transform: translateX(0px);
        animation: float5 3s ease-in-out;
    }
    @keyframes float5 {
    0% {
        transform: translateX(30px);
    }
    
    100%{
        transform: translateX(0px);
    }
    
    }
`

const TelaMatch = (props) => {
const renderMatches = props.matchesList.map((pessoa) => {
return (
            <div key={props.id}>
                <img src={`${pessoa.photo}`}/>
                <h4>{pessoa.name}</h4>
            </div>
        )
})

    return( 
        <ContainerMatch>
            <StyledTelaMatch>
            {renderMatches}
            </StyledTelaMatch>
            <button className='bot4' onClick={props.vaiPaginaInicial}>Tela Inicial</button>
            <button className='bot5' onClick={props.limpar}>Limpar Tela</button>
        </ContainerMatch>
        )
}

export default TelaMatch
