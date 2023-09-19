import {styled,} from "styled-components";
const Container = styled.div`
  max-width: 1920px;
  padding: 0 30px;
  margin: auto;
`;
const NotFountWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`
const NotFoundText = styled.div`
  margin-left: 50px;
  width: 60%;
  height: 100vh;
  display: grid;
  align-content: center;
  padding: 0 100px
`
const NotErrorText = styled.div`
  color: #E9EAF0;
  font-size: 6vw;
  font-style: normal;
  font-weight: 600;
  line-height: 80px;
  letter-spacing: -1.6px;
`
const NotErrorOps = styled.div`
  color: #1D2026;
  font-size: 3vw;
  font-style: normal;
  font-weight: 600;
  line-height: 52px; /* 108.333% */
  letter-spacing: -0.96px;
  margin: 16px 0;
`
const NotErrorTitle = styled.div`
  color: #4E5566;
  font-size: 1.3vw;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin: 32px 0;
`
const NotFoundImageWrapper = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
`

const NotFoundImage = styled.img`
  width: 100%;
  height: 100%;
`

const NotBtnLink = styled.button`
  width: ${({ $w }) => $w && `${$w}px`};
  height: 48px;
  padding: 0 24px;
  background-color: #ff6636;
  color: #ffffff;
  margin-left: ${({ $ml }) => $ml && `${$ml}px`};
  border: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  a{
    color: #ffffff;
  }
  &:hover {
    a{
      color: #ff6636;
    }
    background-color: #ffeee8;
    
  }
`;

export {
  NotBtnLink,
  NotFountWrapper,
  NotFoundText,
  Container,
  NotFoundImage,
  NotFoundImageWrapper,
  NotErrorText,
  NotErrorOps,
  NotErrorTitle
}