import React from "react";
import { Outlet, useNavigate} from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Container, Link, Logo, Section, Wrapper } from "./style";
const Home = () => {
const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        <Section onClick={()=> navigate('/home')} logo>
          <Logo /> <h3>Houzing</h3>
        </Section>
        <Section>
          {navbar.map(({ title, path, id }) => {
            return (
              <Link key={id} to={path}>
                {title}
              </Link>
            );
          })}
        </Section>
        <Section>
          <button>Sign</button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Home;
