import TelaInicial from "./components/TelaInicial";
import TelaMatch from "./components/TelaMatch";
import TelaMusica from "./components/TelaMusica";
import { useState } from 'react'
import axios from "axios"
import styled from "styled-components";
import './style.css'
import Header from "./components/header";

const DivGlobal = styled.div`
display: flex;
justify-content:center ;
align-items: center;



  @media screen and ( min-device-width : 10px ) and (max-device-width : 249px) {
    background-color: rgba(251,115,92, 0.3);
    background-repeat: no-repeat;
    color: black;
    margin: auto;
    width: 90%;
    border-radius: 10%;
  } 

  @media screen and ( min-device-width : 250px ) and (max-device-width : 480px) { 
    background-color: rgba(251,115,92, 0.3);
    /* background-color: purple; */
    background-repeat: no-repeat;
    color: black;
    margin: auto;
    width: 70%;
    border-radius: 10%;  
     ;
  }


  @media screen and (min-device-width : 481px) and (max-device-width : 2000px) { 
    /* background-image: url(""); */
    background-color: rgba(251,115,92, 0.3);
    background-repeat: no-repeat;
    color: black;
    margin: auto;
    width: 50%;
    border-radius: 10%;
  }
`

const App = () => {

  const [telaAtual, setTelaAtual] = useState("apreTelaMatch")

  const [userPhoto, setUserPhoto] = useState("")
  const [userName, setUserName] = useState("")
  const [userAge, setUserAge] = useState("")
  const [userBio, setUserBio] = useState("")
  const [userId, setUserId] = useState("")

  const [actualPerfil, setActualPerfil] = useState([])
  const [matchesList, setMatchesList] = useState([])

  const escolherTela = () => {
    switch (telaAtual){
      case "apreTelaInicial":
        return <TelaInicial
        vaiPaginaMatch={vaiPaginaMatch}
        vaiPaginaInicial={vaiPaginaInicial}
        // vaiPaginaMusicas={vaiPaginaMusicas}
        userPhoto={userPhoto}
        userName={userName}
        userAge={userAge}
        userBio={userBio}
        userId={userId}
        choosePerson={choosePerson}
        getPerfilUsuario={getPerfilUsuario}

        />

      case "apreTelaMatch":
        return <TelaMatch
        vaiPaginaMatch={vaiPaginaMatch}
        vaiPaginaInicial={vaiPaginaInicial}
        // vaiPaginaMusicas={vaiPaginaMusicas} 
        limpar={limpar}  
        matchesList={matchesList}
        />
      
      case "apreTelaMusica":
        return <TelaMusica 
        vaiPaginaMatch={vaiPaginaMatch}
        vaiPaginaInicial={vaiPaginaInicial}
        // vaiPaginaMusicas={vaiPaginaMusicas}
        
        />

      default: 
        return <TelaInicial/>
    }
  }

  const vaiPaginaMatch = () => {
    setTelaAtual("apreTelaMatch")
    getMatchs()
  }

  const vaiPaginaInicial = () => {
    setTelaAtual("apreTelaInicial")
    getPerfilUsuario()
  }

  // const vaiPaginaMusicas = () => {
  //   setTelaAtual("apreTelaMusica")
  // }



//---------------------------------------dados iniciais API-------------------------------------------------------

  const autorizationName = "gabriel-jorge-carver"
  const alunoName = "gabriel"

//----------------------API 1- Retorna um perfil que ainda n??o foi visto por voc??.--------------------------------



  const getPerfilUsuario = () => {
  const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${alunoName}/person`
    axios.get( url, {
      headers: { Authorization: `${autorizationName}`}
    }).then((res) => {
      console.log(res.data.profile)

      setUserPhoto(res.data.profile.photo)
      setUserName(res.data.profile.name)
      setUserAge(res.data.profile.age)
      setUserBio(res.data.profile.bio)
      setUserId(res.data.profile.id)

      setActualPerfil(res.data)

    }).catch((err) => {
      console.log(err.response)
      // alert("Mano, deu Rum !!!(getPerfilUsuario)")
    })
}

//--------------------- API 2 - Retorna um array de perfis que deram match com voc??.-----------------------------------------

const getMatchs = () => {
  const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${alunoName}/matches`
    axios.get( url, {
      headers: { Authorization: `${autorizationName}`}
    }).then((res) => {
      console.log(res.data.matches)
      setMatchesList(res.data.matches)
    }).catch((err) => {
      console.log(err.response)
      // alert("Mano, deu Rum !!! (getMatch)")
    })
}

//---API 3 - Recebe um id e uma escolha (choice). A escolha ?? a op????o do usu??rio no momento do swipe. Deve ser true ou false.-------




const choosePerson = (choice) => {
  const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${alunoName}/choose-person`
  const body = { id: userId, choice: choice}
    axios.post( url, body, )
    .then((resp) => {
      console.log(resp.data.isMatch)  //deixei por cause de poder hackiar a outra resposta true/false
      if(resp.data.isMatch){
        window.alert("Alguem deu match com voc?? ????")
        
      }
      getPerfilUsuario()
    }).catch((error) => {
      console.log(error.response)
    })
}

//----API 4 -Limpa todos os matches e perfis vistos. ------------------------------------------------------------



const limpar = () => {
  const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${alunoName}/clear`
    axios.put( url, {
      headers: { Authorization: `${autorizationName}`}
    }).then((res) => {
    
      setMatchesList([])      

    }).catch((err) => {
      console.log(err.response)
      alert("Mano, deu Rum !!!")
    })
}


  return (
    <div>
      <Header/>
    <DivGlobal>
      {/* <h3>ASTROMATCH</h3> */}
      {/* <button onClick={trocaTela}>Trocar Tela</button> */}

      {/* <button onClick={vaiPaginaMatch}>Tela Match</button>
      <button onClick={vaiPaginaInicial}>TelaInicial</button>
      <button onClick={vaiPaginaMusicas}>Escolha uma musica</button> */}

      {/* <button onClick={getPerfilUsuario}>Proximo Perfil</button>
      <button onClick={getMatchs}>Seus Matchs</button> */}
        {escolherTela()}
       
    </DivGlobal>
    </div>
  );
}

export default App;
