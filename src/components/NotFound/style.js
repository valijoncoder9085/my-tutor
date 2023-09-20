import {styled,} from "styled-components";
const Container = styled.div`
  
`;
const NotFountWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 112px;
  margin: 80px 0;
`
const NotFoundText = styled.div`
  min-width: 570px;
  display: grid;
  align-content: center;
`
const NotErrorText = styled.div`
  color: #E9EAF0;
  font-size: 5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 80px;
  letter-spacing: -1.6px;
`
const NotErrorOps = styled.div`
  color: #1D2026;
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 52px; /* 108.333% */
  letter-spacing: -0.96px;
  margin: 16px 0;
`
const NotErrorTitle = styled.div`
  color: #4E5566;
  font-size: 1.3rem;
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