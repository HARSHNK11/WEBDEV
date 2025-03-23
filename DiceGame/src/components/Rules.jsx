import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game.</h2>
        <p className="text">
        Select any number <br/>
        Click on dice image<br/>
        After click on  dice  if selected number is equal to dice number you will get same point as dice <br/>
        if you get wrong guess then  1 point will be dedcuted<br/>
        </p>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    background-color: #fbf1f1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;
    }
`;