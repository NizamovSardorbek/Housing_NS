import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as logoImg} from "../../assets/logo.svg"
const Container = styled.div`


`

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

background: var(--colorPrimary);
color: #ffffff;
padding: var(--padding);
height: 64px;
font-size: 16px;
`

 const Section = styled.div`
display: flex;
align-items: center;
cursor: ${({logo})=> logo &&'pointer'}
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

export {Container,Wrapper,Section,Logo,Link}