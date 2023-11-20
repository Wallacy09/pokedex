import Header from "../../components/header/Header";
import styled from "styled-components"

function Error (props) {
  return (
    <div>
      <Header />
      <H1>Opss! Tem um pokemon causando interferência nessa página! </H1>
    </div>
  );
}

export default Error ;

export const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`