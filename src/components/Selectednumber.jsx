import styled from "styled-components";
const Selectednum = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: end;
  .red {
    margin: 5px;
    color: red;
  }
`;
const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  // here we have taken the props from the Box
`;
const Selectcon = styled.div`
  display: flex;
  gap: 24px;
`;
const P = styled.p`
  font-size: 24px;
  margin-top: 30px;
  font-weight: 700;
`;
function Selectednumber({ error, selectednumber, setselectednumber }) {
  const arrnumber = [1, 2, 3, 4, 5, 6];

  return (
    <Selectednum>
      <p className="red">{error}</p>
      <Selectcon>
        {arrnumber.map((value, i) => (
          <Box
            key={i}
            onClick={() => setselectednumber(value)}
            isSelected={value === selectednumber}
          >
            {value}
          </Box>
        ))}
      </Selectcon>
      <div>
        <P>Selected Number</P>
      </div>
    </Selectednum>
  );
}
export default Selectednumber;
