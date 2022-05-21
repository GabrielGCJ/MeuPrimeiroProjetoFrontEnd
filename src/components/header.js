import styled from "styled-components"

const BlocoHeader = styled.div`        

    @media screen and ( min-device-width : 10px ) and (max-device-width : 249px) {

        display: flex;
        margin: 20px;

        img{
            width: 130px;
            height: 100px;
            border-radius: 20px;
            border: 2px solid rgb(252,90,103);
            box-shadow:3px 3px rgb(251,115,92) ;
            margin-right: 20px;
        }

        h1{
            font-size: 15px;       
        }
    }

    @media screen and ( min-device-width : 250px ) and (max-device-width : 480px) { 

            display: flex;
            margin: 20px;

        img{
            width: 130px;
            height: 100px;
            border-radius: 20px;
            border: 2px solid rgb(252,90,103);
            box-shadow:3px 3px rgb(251,115,92) ;
            margin-right: 20px;
        }

        h1{
            font-size: 3em;       
        }
    }
    
    @media screen and (min-device-width : 481px) and (max-device-width : 2000px) { 

            display: flex;
            margin: 20px;

            img{
            width: 130px;
            height: 100px;
            border-radius: 20px;
            border: 2px solid rgb(252,90,103);
            box-shadow:3px 3px rgb(251,115,92) ;
            margin-right: 20px;
        }

        h1{
            font-size: 5em;       
        }
    }    
`

export default function Header() {
    return (
        <BlocoHeader>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe63zQQHme6waoiY2ino2ocUyhsgnUJpmH1A&usqp=CAU"/>
            <h1> AstroMatch</h1>
        </BlocoHeader>
    )
}

