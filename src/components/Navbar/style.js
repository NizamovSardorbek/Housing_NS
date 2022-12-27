import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as logoImg} from "../../assets/logo.svg"
const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`

const Main = styled.div`
display: flex;
width: 100%;
background-color: red;
`

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

background-color: #0D263B;
color: #ffffff;
padding: var(--padding);
height: 64px;
font-size: 16px;
width: 100%;

/* max-width: 1440px; */
`

 const Section = styled.div`
display: flex;
align-items: center;
cursor: ${({logo})=> logo &&'pointer'};
.active{
    color: #b8ff06;
}
`
const Logo = styled(logoImg)`
width: 30px;
margin-right:12px ;
& path{
    fill : #ffffff
}
`

const Link = styled(NavLink)`
text-decoration: none;
padding: 32px;
color: #ffff;
`

export {Container,Wrapper,Section,Logo,Link,Main}