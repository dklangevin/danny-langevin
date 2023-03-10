import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { experience } from '../../constants';
import { useRouter } from 'next/router';
import SkillCard from '../../components/SkillCard';
import { webSkills, otherSkills } from '../../constants';
import Hidden from 'components/Hidden';

export default function ExperienceBlock(props) {
  const router = useRouter();
  const { slug } = router.query;
  const {
    position,
    company,
    logo,
    timeRange,
    skills,
    responsibilities,
    technologies,
  } = experience.find((e) => e.slug === slug) || {};
  return (
    <Container {...props}>
      <Content>
        <Header>
          <WrapImage>
            <CompanyImage src={logo} alt="company-logo" fill sizes="200px" />
          </WrapImage>
          <Info>
            <TopRow>
              <Position>{position}</Position>
              <Hidden breakpoint={650}>
                <TimeRange>{timeRange}</TimeRange>
              </Hidden>
            </TopRow>
            <Company>{company}</Company>
            <Hidden mobile breakpoint={650}>
              <TimeRange>{timeRange}</TimeRange>
            </Hidden>
          </Info>
        </Header>
        <Subtitle>Featured Technologies</Subtitle>
        <Skills>
          {skills?.map((skill) => {
            const { name, icon, logo } = [...webSkills, ...otherSkills].find(
              (s) => s.name === skill
            );
            return (
              <SkillCard key={skill} name={name} icon={icon} logo={logo} />
            );
          })}
        </Skills>
        <Subtitle>Responsibilities</Subtitle>
        <Description>
          {responsibilities?.map((item, i) => (
            <Item key={i}>{item}</Item>
          ))}
        </Description>
        {technologies?.length > 0 && (
          <>
            <Subtitle>All Technologies</Subtitle>
            <Description>
              {technologies?.map((item, i) => (
                <Item key={i}>{item}</Item>
              ))}
            </Description>
          </>
        )}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 32px;
`;

const Content = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.2);
  max-width: 1200px;
`;

const Header = styled.div`
  display: flex;
  gap: 32px;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Position = styled.span`
  font-size: 32px;
  font-weight: 800;
  line-height: 36px;
  text-transform: uppercase;
  @media screen and (max-width: 440px) {
    font-size: 24px;
    line-height: 26px;
  }
`;

const Company = styled.span`
  font-size: 22px;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--celeste);
  @media screen and (max-width: 440px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

const TimeRange = styled.span`
  @media screen and (min-width: 651px) {
    padding-left: 16px;
  }
`;

const WrapImage = styled.div`
  min-width: 100px;
  min-height: 100px;
  position: relative;
  @media screen and (max-width: 440px) {
    min-width: 60px;
    min-height: 60px;
  }
`;

const CompanyImage = styled(Image)`
  object-fit: contain;
`;

const LearnMore = styled(Link)`
  text-decoration: underline;
`;

const Description = styled.ul`
  list-style-type: disc;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Item = styled.li`
  display: list-item;
  line-height: 22px;
`;

const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 16px;
`;

const Subtitle = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  :after {
    content: '';
    display: block;
    width: 100%;
    height: 0px;
    border: 1px solid #eeeeee33;
    margin-top: 1px;
  }
`;
