import styled from 'styled-components'
import { Button } from './buttons';

const StartGame = ({toggle}) => {
  return (
    <Container>
    <div><img src="/Images/dice.png" alt="dice -img" /> 
    </div>
    <div className='Content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
    </div>
    </Container>
  );
};

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    height: 100vh -margin;
    display: flex;
    margin: 0 auto;
    align-items: center;

    .Content{
        h1 {
            font-size:96px;
            white-space: nowrap;
        }
    }
    @media (max-width: 768px) {
        padding: 0 20px;
        
        .Content {
            h1 {
                font-size: 48px;
                white-space: normal;
            }
        }
    }
`;
