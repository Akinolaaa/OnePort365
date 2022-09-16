import styled from 'styled-components';

export const GreenButton = styled.button`
  min-width: 100px;
  width: auto;
  height: 50px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: green;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    border: 1px solid black;
  }
`

export const WhiteButton = styled(GreenButton)`
  background-color: white;
  color: black;

  &:hover {
    //border: 1px solid black;
  }
`