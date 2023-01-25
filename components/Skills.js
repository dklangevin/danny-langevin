import styled from 'styled-components';
import SkillCard from 'components/SkillCard';
import { webSkills, otherSkills } from '../constants';

export default function Skills() {
  return (
    <Container>
      <Content>
        <Title>Skills</Title>
        <SkillsGroup>
          {/* <SkillType>Web</SkillType> */}
          <WrapSkills>
            {webSkills?.map(({ name, icon, logo }, i) => (
              <SkillCard name={name} icon={icon} logo={logo} key={i} />
            ))}
          </WrapSkills>
        </SkillsGroup>

        <WrapSkills>
          {otherSkills?.map(({ name, icon, logo }, i) => (
            <SkillCard name={name} icon={icon} logo={logo} key={i} />
          ))}
        </WrapSkills>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #00000000 0%, #222222cc 50%);
  padding-bottom: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 1200px;
`;

const Title = styled.span`
  font-size: 40px;
  font-weight: 900;
  line-height: 36px;
  text-transform: uppercase;
  padding: 32px;
  font-style: italic;
  @media screen and (max-width: 440px) {
    padding: 24px;
    font-size: 36px;
  }
`;

const WrapSkills = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 530px) {
    grid-template-columns: 1fr;
  }
`;

const SkillsGroup = styled.div`
  position: relative;
`;

const SkillType = styled.span`
  font-weight: 900;
  font-size: max(5.5vw, 32px);
  line-height: max(4.8vw, 28px);
  text-transform: uppercase;
  display: inline-block;
  @supports ((text-stroke: 2px white) or (-webkit-text-stroke: 2px white)) {
    color: transparent;
    -webkit-text-stroke: 2px white;
    text-stroke: 2px white;
    text-shadow: none;
  }
`;
