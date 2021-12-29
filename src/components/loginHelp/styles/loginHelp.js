import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin: 60px auto;
  background: #f3f3f3;
  padding: 2.5em;
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: 400;
`;

export const Text = styled.p`
`;

export const ButtonLink = styled.button`
  font-size: 18px;
  width: 100%;
  display: flex;
  text-decoration: none;
  justify-content: center;
  background-color: #0080ff;
  padding: 1em;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  border: none;

  &:hover, &:focus{
    background: #148aff;
  }
`;

export const RadioButtonWrapper = styled.label`
  width: 100%;
  display: block;
  position: relative;
  padding-left: 35px;
  margin-top: 5px;
  margin-left: 30px;
  cursor: pointer;
  font-size: 16px;
  align-self: start;
  height: 32px;
`;

export const RadioButton = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;

  & ~ span{
    position: absolute;
    top: -5px;
    /* top is set to negative to better center the box */
    left: 0;
    height: 27px;
    width: 27px;
    border-radius: 50%;
    border: solid 1px black;
    ;
  }

  &:checked~span{
    box-shadow: 0px 0px 10px -3px #0080ff;
  }

  & ~ span:after{
    display: none;
    content: "";
    position: absolute;
    height: 15px;
    width: 15px;
    top: 5px;
    left: 5px;
    background: #0080ff;
    border-radius: 50%;
  }

   &:checked~span:after{
    display: block;
  }
`;

export const Input = styled.input`
`;

export const Select = styled.select`
`;

export const Option = styled.option`
`;
