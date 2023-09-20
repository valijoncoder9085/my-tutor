import {styled} from "styled-components";

const Wrapper = styled.div`
  background-color: var(--gray-50);
  padding: 80px 0;
`
const Container = styled.div``
const WrapperLeft = styled.div`

`
const WrapperTitle = styled.div`
  color: var(--primary-500);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 8px;
`
const WrapperText = styled.div`
  color: var(--gray-900);
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.4px;
  margin-bottom: 24px;
`
const WrapperSubtitle = styled.div`
  color: var(--gray-700);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;
`
const WrapperButton = styled.button`
  display: flex;
  align-items: center;
  background-color: var(--primary-500);
  border: none;
  padding: 10px 24px;
  cursor: pointer;
  color: var(--gray-white);
  transition: all .5s ease-in-out;

  &:hover {
    background-color: var(--gray-white);
    color: var(--primary-500);

    .img-1 {
      display: none;
    }

    .img-2 {
      display: block;
    }
  }

  .img-2 {
    display: none;
  }

  img {
    margin-left: 10px;

  }
`

export {
  Wrapper,
  Container,
  WrapperLeft,
  WrapperTitle,
  WrapperText,
  WrapperSubtitle,
  WrapperButton
}