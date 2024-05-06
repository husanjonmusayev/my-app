import styled from "styled-components";

export const RegisterWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterFormWrapper = styled.div`
  width: 430px;
  height: max-content;
  border-radius: 12px;
  padding: 48px 28px;
  background-color: white;
  box-shadow: 10px 0 10px rgba(0, 0, 0, 0.1);
`;

export const RegisterForma = styled.form`
  h2 {
    text-align: center;
    margin-bottom: 36px;
  }
  label {
    font-size: 14px;
    margin-bottom: 8px;
    font-weight: 500;
  }
  input {
    color: #151515;
    width: 100%;
    padding: 14px 16px;
    border-radius: 6px;
    border: 1px solid #ebebeb;
    outline: none;
  }

  input::placeholder {
    color: black;
    opacity: 28%;
  }
  button {
    color: white;
    width: 100%;
    background-color: #6200ee;
    padding: 10px;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    margin-top: 36px;
    margin-bottom: 16px;
    cursor: pointer;
    transition: all 0.5s;
  }
  button:hover {
    transform: scale(1.1);
  }
`;

export const RegisterFormFooter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 3px;
  a {
    text-decoration: none;
  }
`;
