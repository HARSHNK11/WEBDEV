import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import ScoreCard from "./ScoreCard";
import RollDice from "./RollDice";
import { useState, useEffect } from "react";
import { Button } from "./buttons";
import { OutlineButton } from "./buttons";
import Rules from "./Rules";
  const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectNumber, setSelectNumber] = useState();
  const [currentDice ,setCurrentDice]= useState(1);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);
  const generateRandNo = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () =>{
    if(!selectNumber){ 
      setError("You have not selected any number!!");
      return;
    }
  
    const randomNo = generateRandNo(1,7);
    setCurrentDice(() => randomNo);

    if(selectNumber == randomNo)
      setScore( (prev) => prev+randomNo);
    else
      setScore((prev) =>prev-1);
    setSelectNumber(undefined);
    setError("");
  };
  const resetScore = () => {
    setScore(0);
  };

  useEffect(() => {
    if (score <= -10) {
      setScore(0);
      setError("Game over! Score reset as it reached -10");
      setTimeout(() => setError(""), 3000);
    }
  }, [score]);

  return (
    <MainContainer>
      <div className="topsection">
        <ScoreCard score={score} />
        <NumberSelector
        error={error}
        setError={setError}
        selectNumber={selectNumber}
        setSelectNumber={setSelectNumber}
        />
        </div>
        <RollDice
          currentDice={currentDice} roleDice={roleDice}
        />
        <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button
        onClick={() => setShowRules((prev)=> !prev)}
        >{showRules? "Hide": "Show"} Rules</Button>
        </div>
        {showRules &&<Rules/>}
    </MainContainer>
  );
}

export default GamePlay

const MainContainer = styled.main`
  padding: 20px 50px 0 50px;
  .topsection{
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
`;