import styled from "styled-components";
import  {ReactComponent as Home} from "../../assets/Home.svg"
import  {ReactComponent as Advanced} from "../../assets/Advanced.svg"
import  {ReactComponent as Search} from "../../assets/Search.svg"


const Container = styled.div`

display: flex;
padding: var(--padding);
padding-top: 10px;
padding-bottom: 10px;
gap: 20px;
`

const Icons = styled.div``
 Icons.Search = styled(Search)`
margin-right: 8px;
`
 Icons.Filter = styled(Advanced)``
 Icons.Houses = styled(Home)``
export {Container,Icons}