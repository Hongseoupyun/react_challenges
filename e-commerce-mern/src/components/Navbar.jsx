import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  background-color: crimson;
`;

const Wrapper = styled.div`
  padding:10px 20px;
  display:flex;
  justify-content:space-between;
`
const Left = styled.div`
  
`
const Center = styled.div`
  
`
const Right = styled.div`
  
`

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          left
        </Left>
        <Center>
          center
        </Center>
        <Right>
          right
        </Right>

      </Wrapper>
    </Container>
  );
}
