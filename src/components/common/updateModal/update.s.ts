import styled from "styled-components";

export const BTN = styled.button`
  background-color: #6200ee;
  border: none;
  border-radius: 4px;
  padding: 10px 24px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const UpdateModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h4 {
    font-size: 20px;
    font-weight: 600;
  }

  img {
    cursor: pointer;
  }
`;

export const UpdateModalMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  & h4 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  & input {
    height: 47px;
    border: 1px solid #ebebeb;
    border-radius: 6px;
    outline: none;
    font-size: 17px;
  }
`;

export const UpdateModalFooter = styled.div`
  display: flex;
  margin-top: 28px;

  justify-content: space-between;
  && button {
    border-radius: 4px;
    border: none;
    cursor: pointer;
    padding: 10px 60px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.5s;
  }
  && button:nth-child(1) {
    color: #6200ee;
    border: 1px solid #6200ee;
    background-color: transparent;
  }
  && button:nth-child(1):hover,
  button:nth-child(2):hover {
    transform: scale(1.1);
  }

  && button:nth-child(2) {
    color: white;
    border: 1px solid #6200ee;
    background-color: #6200ee;
  }
`;
export const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: #6200ee;
  border-radius: 0px 6px 6px 6px;
`;