import styled from 'styled-components';

export const GreenButton = styled.button`
  //min-width: 100px;
  width: auto;
  min-width: 20px;
  //height: auto;
  font-size: .7rem;
  padding: .6rem .7rem;
  background-color: #3AB44A;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.25rem;
  margin: 1px;
  white-space: nowrap;
`

export const WhiteButton = styled(GreenButton)`
  background-color: white;
  border: 0.5px solid grey;
  color: black;

  &:hover {
    background-color: grey;
  }
`
export const GreyButton = styled(GreenButton)`
  font-weight: 600;
  color: #374151;
  background-color: #F3F4F6;
  border: 1px solid #D1D5DB ;
`
/* /* Dropdown Button */
/* A */