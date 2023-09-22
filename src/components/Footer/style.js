import { styled } from "styled-components";


const Wrapper = styled.div`
  background-color: var(--gray-900);
  width: 100%;
  color: #fff;
`
const WrapperTop = styled.div``
const Container = styled.div`
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
`
const WrapperLogo = styled.div`
  max-width: 424px;
  padding: 80px 0;
`
const WrapperLogoImg = styled.img`
  width: 175px;
  height: 46px;
`
const WrapperLogoText = styled.div`
  color: var(--gray-500);
  text-align: justify;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.14px;
`
const WrapperLogoLink = styled.div`
  display: grid;
  column-gap: 24px;
`
const WrapperLogoAppBtn = styled.div`
  max-width: 200px;
  display: grid;
  gap: 12px;
  align-content: center;
  h1{
    color: var(--gray-white);
    text-align: justify;
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: 500;
    line-height: 100%;
    text-transform: uppercase;
  }
  button{
    background-color: var(--gray-900);
    border: none;
    &:hover{
      cursor: pointer;
    }
  }
`

const WrapperLogoUl = styled.ul`
  display: flex;
`
const WrapperLogoUlLi = styled.li`
  display: inline;
  width: 46px;
  height: 46px;
  align-items: center;
  margin: 26px 12px 0 0;
  padding: 14px;
  background-color: rgba(54, 59, 71, 0.40);
  cursor: pointer;
  transition: all .10s ease-in;
  &:hover{
    background-color: var(--primary-500);
    box-shadow: 0px 6px 20px 0px rgba(204, 82, 43, 0.50);
  }
`
const WrapperLogoUlLiImg = styled.img`
  width: 100%;
  height: 100%;
`
const WrapperLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    h1 {
      color: var(--gray-white, #FFF);
      text-align: justify;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    ul {
      padding: 0 30px 0 0;
      display: grid;
      column-gap: 20px;
      li {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        a {
          padding-bottom: 3px;
          color: var(--gray-500);
          font-size: 14px;
          letter-spacing: -0.14px;
          transition: all .3s ease;
          border-bottom: 2px solid var(--gray-900);
          &:hover {
            border-bottom: 2px solid var(--primary-500);
            color: var(--gray-white);
          }
        }
      }
    }
  }
`
const WrapperFooter = styled.div`
  width: 100%;
  border-top: 1px var(--border-50) solid;
`
const WrapperFooterContainer = styled.div`
  max-height: 100px;`
const WrapperFooterLeft = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  color: var(--gray-500);
  font-size: 14px;
  letter-spacing: -0.14px;
  span{
    margin-left: 5px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.14px;
  }
`
const WrapperFooterRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`


export {
  Container,
  WrapperTop,
  Wrapper,
  WrapperFooter,
  WrapperFooterLeft,
  WrapperFooterRight,
  WrapperLogo,
  WrapperLogoImg,
  WrapperLogoText,
  WrapperLogoLink,
  WrapperLogoUl,
  WrapperLogoUlLi,
  WrapperLogoUlLiImg,
  WrapperLink,
  WrapperLogoAppBtn,
  WrapperFooterContainer
}