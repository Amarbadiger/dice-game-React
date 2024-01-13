import Selectednumber from "./Selectednumber";
import Totalscore from "./Totalscore";
import styled from "styled-components";
import Rolldice from "./Rolldice";
import { useState } from "react";
const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 50px;
`;
function Gameplay() {
  const [score, setscore] = useState(0);
  const [selectednumber, setselectednumber] = useState();
  const [currdice, setdice] = useState(1);
  const [error, seterror] = useState();
  const [rest, setreset] = useState();
  function diceRoll() {
    if (!selectednumber) {
      seterror("*You have not selected any number*");
      return;
    } else {
      seterror("");
    }

    setdice(Math.floor(Math.random() * (7 - 1) + 1));

    if (currdice === selectednumber) {
      setscore((prev) => prev + 1);
    } else {
      setscore((prev) => prev - 1);
    }
    setselectednumber(undefined);
  }
  function reset() {
    setscore(0);
  }
  return (
    <>
      <Main>
        <Totalscore score={score} />
        <Selectednumber
          error={error}
          selectednumber={selectednumber}
          setselectednumber={setselectednumber}
        />
      </Main>
      <Rolldice currdice={currdice} dice={diceRoll} reset={reset}></Rolldice>
    </>
  );
}
export default Gameplay;
