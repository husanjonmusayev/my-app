import styled from "styled-components";

export const EditDeliteWrapper = styled.div`
  display: none;
  flex-direction: column;
  gap: 4px;
  margin-top: 16px;
  width: 32px;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    display: flex;
  }
`;

export const MainCardWrapper = styled.div`
  display: flex;
  width: 430px;
`;

export const Card = styled.div`
  position: relative; // Qo'shilgan qator
  background-color: white;
  width: 398px;
  height: 414px;
  border-radius: 12px;
  padding: 32px;
  cursor: pointer;

  && img{
    width: 100%;
    height: 240px;
    object-fit: cover;
    object-position: center;
     border-radius:10px
  }

  && p {
    margin-bottom: 3px;
  }

  &:hover {
    + ${EditDeliteWrapper} {
      display: flex;
    }
  }
`;

export const CardFotter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  && button {
    padding: 2px 12px;
    font-size: 16px;
    font-weight: 700;
    border: none;
    color: white;
    background-color: red;
    border-radius: 9px;
    cursor: pointer;
    transition: all 0.5s;
  }
  && button:hover {
    transform: scale(1.1);
  }
`;

export const URL = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  gap: 4px;
  && a {
    text-decoration: none;
    color: #01a4ff;
  }
`;

export const DeliteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: #ff4d4f;
  border-radius: 6px 6px 6px 0px;
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
