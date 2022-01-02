import styled from "styled-components"

export const SelectContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 95px;
  height: 45px;
`;


export const Select = styled.select`
  display: none;
`;

export const Option = styled.option`
`;

export const Selected = styled.div`
  border: solid 1px grey;
  font-size: 16px;
  border: solid 1px grey;
  display: flex;
  align-items: center;
  background: white;
  height: 100%;
  padding-left: 9px;

  &:after{
    content: "";
    position: absolute;
    left: 74px;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;

    border-top: ${props=>!props.displaySelect && "5px solid black"};
    border-bottom: ${props=>props.displaySelect && "5px solid black"};

  }
`;

export const SelectItems = styled.div`
  position: absolute;
  z-index: 0;
  background: white;
  display: ${props=>props.displaySelect ?"block":"none"};
  width: 350px;
  height: 210px;
  overflow-y: scroll;
  border: solid 1px grey;
`;

export const SelectItem = styled.div`
  margin: 0;
  padding: .7em;
  display: flex;
  align-items: center;
  background: ${props=>props.isActive && "#f0f0f0"};

  &:hover{
    background: #f0f0f0;
  }

`;

export const DialCode = styled.p`
  color: #a8a8a8;
  margin: 0;
  font-weight: ${props=>props.isActive && "bold"}
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
