import styled from "styled-components";
function Startgame({ toggle }) {
  return (
    <Container>
      <div className="dices">
        <img src="public/images/dices 1.png" alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play now</Button>
      </div>
    </Container>
  );
}
export default Startgame;
const Container = styled.div`
  width: 1182px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .dices {
    img {
      width: 649px;
      height: 522px;
    }
  }
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
const Button = styled.button`
  width: 220px;
  padding: 10px 18px;
  color: white;
  border-radius: 5px;
  background: #000;
  font-size: 16px;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.2s ease-in-out;
  }
`;
