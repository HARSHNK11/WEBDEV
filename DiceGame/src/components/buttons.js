import styled from "styled-components";

export const Button = styled.button`
color: white;
min-width: 220px;
border-radius: 5px;
padding:10px 18px;
background: #000000;
border: none;
font-size: 16px;
border: 1px solid transparent;
transition: 0.35s ease-in;
cursor: pointer;
&:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.25s ease-in;
}
`;

export const OutlineButton = styled(Button)`
border: 1px solid black;
background-color: white;
color: black;
&:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
}
    `;