import styled from "styled-components";
const Dicecontainer = styled.div`
  margin-top: 60px;
  text-align: center;

  img {
    width: 250px;
    height: 250px;
    cursor: pointer;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
const Button = styled.button`
  width: 220px;
  padding: 10px 18px;
  color: balck;
  border-radius: 5px;
  background: white;
  font-size: 16px;
  border: 1px solid transparent;
  margin-top: 10px;
  border: 1px solid black;
  &:hover {
    background-color: #000000;
    color: #ffffff;
    transition: 0.2s ease-in-out;
  }
`;

function Rolldice({ currdice, dice, reset }) {
  return (
    <>
      <Dicecontainer>
        <img
          onClick={dice}
          src={`public/images/dices/dice_${currdice}.png`}
          alt=""
        />
        <p>Click on Dice to roll</p>
        <Button onClick={reset}>Reset Score</Button>
        <br />
      </Dicecontainer>
    </>
  );
}
export default Rolldice;
