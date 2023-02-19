import styled from 'styled-components';
import SkillCard from 'components/SkillCard';
import { webSkills, otherSkills } from '../constants';

export default function Skills() {
  return (
    <Container>
      <Content>
        <SkillsGroup>
          <SkillType>
            <Line />
            Web Skills
            <Line />
          </SkillType>
          <WrapSkills>
            {webSkills?.map(({ name, icon, logo }, i) => (
              <SkillCard name={name} icon={icon} logo={logo} key={i} />
            ))}
          </WrapSkills>
        </SkillsGroup>
        <SkillsGroup>
          <SkillType>
            <Line />
            Other Skills
            <Line />
          </SkillType>
          <WrapSkills>
            {otherSkills?.map(({ name, icon, logo }, i) => (
              <SkillCard name={name} icon={icon} logo={logo} key={i} />
            ))}
          </WrapSkills>
        </SkillsGroup>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 64px;
  width: 100%;
  height: 100%;
  padding-bottom: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (width < 780px) {
    padding: 16px;
  }
`;

const Content = styled.div`
  width: 100%;
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
  /* font-family: 'Glamsy'; */
  font-family: 'Right Gothic Wide';
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  margin-block: 16px;
  font-size: 24px;
  /* text-transform: uppercase; */
  /* :after {
    content: '';
    display: block;
    width: 100%;
    height: 0px;
    border: 1px solid #eeeeee33;
    margin-top: 1px;
  } */
`;

const Line = styled.hr`
  width: 100%;
  border: 1px solid #eeeeee33;
`;
