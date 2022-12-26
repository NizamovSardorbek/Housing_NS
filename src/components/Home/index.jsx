import React from "react";
import { Input, Button } from "../Generic";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Input placeholder={"test"} width={200} />
      <Button>test</Button>
    </Container>
  );
};

export default Home;
