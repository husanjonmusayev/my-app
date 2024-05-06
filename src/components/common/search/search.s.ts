import styled from "styled-components";
interface SearchWrapperProps {
  isFocused: boolean;
}

export const SearchWrapper = styled.div<SearchWrapperProps>`
  width: 300px;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 48px;
  padding: 15px;
  border-radius: 6px;
  background-color: ${({ isFocused }) => (isFocused ? "white" : "transparent")};
  transition: background-color 0.3s;
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  font-size: 16px;
  outline: none;
  &&::placeholder {
    font-size: 16px;
    letter-spacing: 1%;
    font-weight: 400;
  }

  &:focus {
    + ${SearchWrapper} {
      background-color: white;
    }
  }
`;
