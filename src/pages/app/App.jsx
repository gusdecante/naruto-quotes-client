import styled from "styled-components";
import narutoImage from "../../images/naruto.png";
import { Quotes } from "../../components";

export function App() {
  return (
    <Content>
      <Quotes quote={"ok"} speaker={"-random"} />
      <NarutoImage src={narutoImage} alt="Naruto with a kunai" />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImage = styled.img`
  max-width: 50%;
  align-self: flex-end;
`;
