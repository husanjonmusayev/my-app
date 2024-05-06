import styled from "styled-components";

export const BTN = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all, 0.5s;
  &&:hover {
    transform: scale(1.1);
  }
`;
