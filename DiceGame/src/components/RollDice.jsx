import styled from "styled-components";
const RollDice = ({roleDice,currentDice}) => {

    

  return (
    <DiceContainer>
        <div className="Dice"
            onClick={roleDice}>
            <img src={`/Images/dice_${currentDice}.png`} alt="dice_no" />
        </div>
        <p>
            Click On Dice To Roll
        </p>
    </DiceContainer>

  );
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 48px;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 24px;

    }
    .Dice{
        cursor: pointer;
    }
`;