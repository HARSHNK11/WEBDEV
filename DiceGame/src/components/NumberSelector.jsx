import styled from "styled-components"
const NumberSelector = (
  {error, setError, selectNumber, setSelectNumber}) => {
    const arr = [1,2,3,4,5,6];
const NumSelectorHandler = (Value) =>{
  setSelectNumber(Value)
  setError("")
}
  return (
    <NumberSelecterContainer>
      <p className="error">{error}</p>
        <div className="flex">
        {arr.map((Value,i) =>(
            <Box 
            isSelected= {Value === selectNumber}
            key={i} 
            onClick={() =>NumSelectorHandler(Value)}>
                {Value}</Box>))}
        </div>
        <p>
          Select Number
        </p>
    </NumberSelecterContainer>

  )
}

export default NumberSelector

const NumberSelecterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
      display: flex;
      gap: 24px;
    }
    p{
      font-size:24px;
      font-weight:750;
    }
    .error{
      color: red;
    }
`;

const Box= styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 600;
    background-color: ${(props) => (props.isSelected ? "black":"white")};
    color: ${(props) => (props.isSelected ? "white":"black")}
`;
