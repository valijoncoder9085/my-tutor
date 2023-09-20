import { styled } from "styled-components";

const Container = styled.div`
`;

const AboutWrapper = styled.div`
  margin: 80px 0;
  display: flex;
  justify-items: center;
  flex-wrap: wrap;
  align-items: center;
`;

const AboutWrapperBody = styled.div`
  width: 50%;
  display: grid;
  align-content: center;
  padding: 0 100px 0 0 ;
`;

const AboutWrapperTitle = styled.div`
  color: var(--gray-100);
  font-size: 5rem;
  font-style: normal;
  font-weight: 600;
  margin: 16px 0;
  line-height: 2.5rem;
  letter-spacing: -1.6px;
`;

const AboutWrapperText = styled.div`
  color: var(--gray-900);
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  margin: 16px 0;
  line-height: 2.5rem;
  letter-spacing: -0.96px;
`;
const AboutWrapperParogrof = styled.div`
  color: var(--gray-600, #6E7485);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  margin: 16px 0;
  line-height: 2rem;
`;

const AboutWrapperImgSection = styled.div`
  width: 50%;
  display: grid;
  align-content: center;
  justify-content: center;
`;

const AboutWrapperImg = styled.img`
  width: 100%;
  height: 100%;
`;

export {
  Container,
  AboutWrapper,
  AboutWrapperBody,
  AboutWrapperImg,
  AboutWrapperImgSection,
  AboutWrapperTitle,
  AboutWrapperText,
  AboutWrapperParogrof
};
