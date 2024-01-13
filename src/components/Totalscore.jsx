import styled from "styled-components";
const Total = styled.div`
  width: 135px;
  height: 151px;
  text-align: center;
  max-width: 200px;
  h1 {
    font-size: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    white-space: nowrap;
  }
`;
function Totalscore({ score }) {
  return (
    <>
      <Total>
        <h1>{score}</h1>
        <p>Total Score</p>
      </Total>
    </>
  );
}
export default Totalscore;
