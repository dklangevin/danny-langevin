import styled, { css } from 'styled-components';
import Link from 'next/link';
import ExperienceCard from 'components/ExperienceCard';
import { experience } from '../constants';

export default function Experience() {
  return (
    <Container>
      <Content>
        <Title>Experience</Title>
        {experience.map((item, i) => (
          <ExperienceCard experience={item} key={i} />
        ))}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #00000000 0%, #222222cc 50%);
  /* margin-bottom: -1px; */
  padding-bottom: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1200px;
`;

const Title = styled.span`
  font-size: 40px;
  font-weight: 900;
  line-height: 36px;
  text-transform: uppercase;
  padding: 32px;
  /* color: #aaaaaa; */
  font-style: italic;
  @media screen and (width < 440px) {
    padding: 24px;
    font-size: 36px;
  }
`;
