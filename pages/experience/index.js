import styled, { css } from 'styled-components';
import Link from 'next/link';
import ExperienceCard from 'components/ExperienceCard';
import { experience } from '../../constants';

export default function Experience() {
  return (
    <Container>
      <Content>
        {/* <Title>Experience</Title> */}
        {experience.map((item, i) => (
          <ExperienceCard experience={item} key={i} />
        ))}
        {/* <List>
          {experience.map(({ company, position, slug, preview }) => (
            <Item
              key={company}
              href={`/experience/${slug}`}
              //   onMouseEnter={() => setPreview(preview)}
              //   onMouseLeave={() => setPreview()}
            >
              {position}
            </Item>
          ))}
        </List> */}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (width < 780px) {
    padding: 16px;
  }
`;

const Content = styled.div`
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

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 80px;
  perspective: 600px;
`;

const Item = styled(Link)`
  text-align: left;
  font-family: 'Neue Montreal';
  font-weight: 900;
  font-size: 80px;
  line-height: 68px;
  transform-origin: 0% 0%;
  transform: rotateY(20deg);
  :not(:hover) {
    @supports ((text-stroke: 1px white) or (-webkit-text-stroke: 1px white)) {
      color: transparent;
      -webkit-text-stroke: 1px white;
      text-stroke: 1px white;
      text-shadow: none;
    }
  }
  :hover {
    transform: rotateY(5deg);
    color: var(--celeste);
  }
`;
