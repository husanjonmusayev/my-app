import styled from "styled-components";

export const Container = styled.div`
  && {
    padding-top: 18px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    width: clamp(200px, 95%, 394px);
    @media (min-width: 320px) {
      width: clamp(296px, 95%, 394px);
    }
    @media (min-width: 430px) {
      width: clamp(394px, 90%, 688px);
    }
    @media (min-width: 744px) {
      width: clamp(688px, 85%, 920px);
    }
    @media (min-width: 992px) {
      width: clamp(920px, 80%, 1340px);
    }
    @media (min-width: 1440px) {
      width: clamp(1340px, 75%, 1600px);
    }
  }
`;
