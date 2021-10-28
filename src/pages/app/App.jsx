import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import narutoImage from "../../images/naruto.png";
import { Quotes } from "../../components";
import { getQuote } from "../../services";
import jutsoSound from "../../sounds/jutso.mp3";

const audio = new Audio(jutsoSound);

export function App() {
  const isMounted = useRef(true);
  const [quoteState, setQuoteState] = useState({
    quote: "loading...",
    speaker: "loading speaker",
  });

  const onUpdate = async () => {
    const quote = await getQuote();

    if (isMounted.current) {
      audio.play();
      setQuoteState(quote);
    }
  };

  useEffect(() => {
    onUpdate(); // when the component is mounted

    return () => {
      isMounted.current = false;
    }; // when the component is unmounted
  }, []);

  return (
    <Content>
      <Quotes {...quoteState} onUpdate={onUpdate} />
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
