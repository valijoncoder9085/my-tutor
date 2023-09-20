import {styled} from "styled-components"

const Container = styled.div``;
const Wrapper = styled.div`
  background-color: var(--primary-100);
  margin-top: 80px;
`;

const WrapperContainer = styled.div`
  height: 100%;
  display: grid;
  align-content: center;
  padding: 50px 20px;
`;
const WrapperContainerTitle = styled.div`
  color: var(--primary-500);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;
const WrapperContainerText = styled.div`
  margin-top: 8px;
  color: var(--gray-900);
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.4px;
`;
const WrapperContainerSubtitle = styled.div`
  margin-top: 24px;
  color: var(--gray-700);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const WrapperImg = styled.img`
  width: 100%
`;

export {
  Wrapper,
  Container,
  WrapperContainer,
  WrapperImg,
  WrapperContainerTitle,
  WrapperContainerText,
  WrapperContainerSubtitle
}