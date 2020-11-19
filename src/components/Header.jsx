import styled from "styled-components";
import {device} from "./Device"

export const DivHeader = styled.div`
  background-color: #efdcbe;
  display: flex;
  justify-content : space-around;
  align-items: center;
  color : white;
  font-size: 4vh;
  text-decoration: none;
  text-shadow: 1px 1px 2px black;
  @media ${device.mobile} {
    height: 15vh;
    font-size: 17px;
    }

`;

export const DivLogo = styled.div`
display : flex;
padding-right: 18vw;
@media ${device.mobile} {
    padding-right: 0vw;

    }
`;
export const ImgLogo = styled.img`
height: 20vh;
@media ${device.mobile} {
    height: 12vh;
    width: 12vh
    }`

export const A = styled.a`
text-decoration: none;
padding-right: 3vw;
color : white;
&:hover{
    color:black;
    transition: 0.6s;
    @media ${device.mobile} {
        padding-right: 0vw;
    }
}
`

export const PLogo = styled.p`
text-align: center;
font-size: 4vh;
padding-left: 2vh;
@media ${device.mobile} {
display: none    }

`
export const PDescription = styled.p`
text-align: center;
font-size: 25px;
@media ${device.mobile} {
    display : none;
    }
`

export const ImgBan = styled.img`
height: 5vh;
background-repeat: repeat;
width: 100%;
background-color: rgba(239, 220, 190, 0.29);
`


export default function Header() {
  return <div>
  <DivHeader>

      <DivLogo>
          <a href="#3"><ImgLogo src="/images/logo.png" alt="logo"/></a>
          <section>
          <PLogo>Blablachar
          <PDescription>“Le tour de Rome en un éclair”</PDescription>
          </PLogo>
          </section>
      </DivLogo>
      <A href="#1">Trajets</A>
      <A href="#2">Poster un trajet</A>
      <A href="#3">Les chars</A>
      
        
  </DivHeader>
  <div>
  <ImgBan src="/images/banniere.png" alt="banniere"/>
  </div>
  </div>;
}