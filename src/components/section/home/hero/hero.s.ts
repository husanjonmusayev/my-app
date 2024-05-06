import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  align-items: start;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  && h2 {
    color: white;
  }
  && h3 {
    color: #6200ee;
  }
  && h4{
    color: white;
  }
`;

export const LeftItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RightWrapper = styled.div``;
