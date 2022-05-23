import styled from "styled-components"

const BlocoHeader = styled.div`        

    @media screen and (min-device-width : 10px) and (max-device-width : 249px) {
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
                display:none;
                font-family: Arial Narrow, sans-serif;
            }
    }

    @media screen and (min-device-width : 250px) and (max-device-width : 399px) {
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
                font-size: 5vw;   
                /* background-color:maroon;  */
                color:rgb(253,121,95) ;
                font-family: Arial Narrow, sans-serif; 
            }
    }

    @media screen and (min-device-width : 400px) and (max-device-width : 699px) {
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
                font-size: 5vw;   
                /* background-color:maroon;   */
                color:rgb(253,121,95)  ;
                font-family: Arial Narrow, sans-serif; 
            }
    }

    @media screen and (min-device-width : 700px) and (max-device-width : 2000px) {
        display: flex;
        margin: 20px;

        img{
            width: 130px;
            height: 100px;
            border-radius: 20px;
            border: 2px solid rgb(252,90,103);
            box-shadow:3px 3px rgb(251,115,92) ;
            margin-right: 20px;

            transform: translateY(0px);
            animation: float6 3s ease-in-out;
        }

        @keyframes float6 {
            0% {
            transform: translateY(30px);
            }  

            100%{
            transform: translateY(0px);
            }    
        }

        h1{
            font-size: 5vw;   
            color:rgb(253,121,95) ;
            font-family: Arial Narrow, sans-serif;

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
    }

`

export default function Header() {
    return (
        <BlocoHeader>
            <img alt='some value' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe63zQQHme6waoiY2ino2ocUyhsgnUJpmH1A&usqp=CAU"/>
            <h1> AstroMatch</h1>
        </BlocoHeader>
    )
}

