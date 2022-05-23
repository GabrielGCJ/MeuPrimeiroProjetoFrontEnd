import styled from "styled-components"

const StyledTelaInicial = styled.div`
    padding-top: 20px;

    .botaoMatch{

        margin-bottom: 20px;  
        transform: translateY(0px);
        animation: float 3s ease-in-out;      
    }
    @keyframes float {
    0% {
        transform: translateY(-30px);
    }
    
    100%{
        transform: translateY(0px);
    }
    
    }

    .bot1{
        transform: translateX(0px);
        animation: float2 3s ease-in-out; 
    }

    @keyframes float2 {
    0% {
        transform: translateX(-30px);
    }
    
    100%{
        transform: translateX(0px);
    }
    
    }
    .bot2{
        transform: translateX(0px);
        animation: float3 3s ease-in-out; 
    }

    @keyframes float3 {
    0% {
        transform: translateX(30px);
    }
    
    100%{
        transform: translateX(0px);
    }
    
    }

    .imgPer{
        transform: translateX(0px);
        animation: float7 3s ease-in-out;  
    }
    @keyframes float7 {
    0% {
        transform: translateX(30px);
    }
    
    100%{
        transform: translateX(0px);
    }
    
    }

    .textbio{
        transform: translateX(0px);
        animation: float8 3s ease-in-out; 
    }

    @keyframes float8 {
    0% {
        transform: translateX(-30px);
    }
    
    100%{
        transform: translateX(0px);
    }
    
    }


    @media screen and ( min-device-width : 10px ) and (max-device-width : 249px) {
        img{            
            border-radius: 10px 10px 10px 10px;
            height: 100px;
            width: 100px;
            object-fit: cover;
            object-position: center;
            /* padding: 5px */
            border: 2px solid rgb(252,90,103);
            box-shadow:3px 3px rgb(251,115,92) ;            
        }
    }

    @media screen and ( min-device-width : 250px ) and (max-device-width : 480px) { 
        img{            
            border-radius: 10px 10px 10px 10px;
            height: 200px;
            width: 200px;
            object-fit: cover;
            object-position: center;
            /* padding: 5px */
            border: 2px solid rgb(252,90,103);
            box-shadow:3px 3px rgb(251,115,92) ;  
        }
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 2000px) { 
        img{            
            border-radius: 10px 10px 10px 10px;
            height: 300px;
            width: 300px;
            object-fit: cover;
            object-position: center;
            /* padding: 5px */
            border: 2px solid rgb(252,90,103);
            box-shadow:3px 3px rgb(251,115,92) ;            
        }
    }


    

    button{
        background-color: rgb(251,115,92) ;
        width: 7em;
        border-radius: 5px;   
        /* margin-left:3em;
        margin-right:3em;
        margin-top: 1em;
        margin-bottom:1em ; */

        
        
        :hover{
            background-color: pink;               
        }       
        :active{
            background-color: red ;
            box-shadow:0 0 2em blue;
        } 
    }

    h1{
        padding:20px ;
    }
    
    h2{
        background-color: rgb(252,90,103);
        color: white;
        padding: 10px;
        margin-bottom: 10px;
    }
`


const TelaInicial = (props) => {

    return(
        <StyledTelaInicial>
            <button className="botaoMatch" onClick={props.vaiPaginaMatch}>Tela Match</button>
            
            <div>            
                <img className="imgPer" alt='some value' src={`${props.userPhoto}`}/>
                <h1>{props.userName}, {props.userAge}</h1> 
                <h2 className="textbio">{props.userBio}</h2>
            </div>
            <div>
                
                {/* <button onClick={props.vaiPaginaMusicas}>Tela Musicas</button> */}
            <br/>
                <button className="bot1" onClick={()=> {props.choosePerson(true)}}>❤️</button>
                <button className="bot2"onClick={()=> {props.choosePerson(false)}}>❌</button>
            </div>        
        </StyledTelaInicial>

    )
}

export default TelaInicial