import styled from "styled-components";

const ScoreCard = ({score}) => {
  return (
    <Score>
            <h1>{score}</h1>
            <p>Total Score</p>
        </Score>
  );
}

export default ScoreCard

const Score = styled.div`
    max-width: 150px;
    padding: 15px;
    
    h1{
        font-size: 100px;
        margin: 0px;
        text-align: center;
        line-height: 100px;
    }
    p{
        margin: 0px;
        font-size: 24px;
        text-align: center;
    font-weight: 500;
    }
`;