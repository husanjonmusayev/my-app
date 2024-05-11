import styled from "styled-components";

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: flex-start;
  gap: 20px;
`;

export const DefaultWrapper = styled.div`
  h1 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: max-content;
    color: #5628ee;
  }
`;
