import styled from "styled-components"

export const SelectContainer = styled.div`
  position: relative;
  cursor: pointer;
  padding: 1em;
  margin-bottom: 1em;
`;


export const Select = styled.select`
  display: none;
  /* border-radius: 0px;
  font-size: 16px;
  padding: 1em;
  width: 70px;
  border: none; */
`;

export const Option = styled.option`
`;

export const Selected = styled.div`
  border: solid 1px grey;
  font-size: 16px;
  height: 42px;
  width: 93px;
  border: solid 1px grey;
  display: flex;
  align-items: center;
  background: white;
  padding-left: 9px;

  &:after{
    content: "";
    position: absolute;
    left: 88px;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;

    border-top: ${props=>!props.displaySelect && "5px solid black"};
    border-bottom: ${props=>console.log(props.displaySelect)};

  }
`;

export const SelectItems = styled.div`
  position: absolute;
  background: white;
  display: ${props=>props.displaySelect ?"block":"none"};
  width: 350px;
  height: 200px;
  overflow-y: scroll;
  border: solid 1px grey;
`;

export const SelectItem = styled.div`
  margin: 0;
  padding: .7em;
  display: flex;
  align-items: center;
  background: ${props=>props.isActive && "#f0f0f0"}
`;

export const DialCode = styled.p`
  color: #a8a8a8;
  margin: 0;
`;


export const Flag = styled.img`
  width: 16px;
  height: 11px;
  object-fit: cover;
  border: solid .1px grey;
`;

export const SelectText = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0 .5em;
`;
