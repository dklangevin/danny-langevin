import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import cuBoulderLogo from 'public/logos/cuboulder.svg';
import cuBoulderLogoVeritcal from 'public/logos/cuboulder-vertical.svg';
import Hidden from '@/components/Hidden';

export default function Education(props) {
  return (
    <Container {...props}>
      <Content>
        <Header>
          <Hidden>
            <WrapImage>
              <CompanyImage
                src={cuBoulderLogo}
                alt='company-logo'
                fill
                sizes='800px'
              />
            </WrapImage>
          </Hidden>
          <Hidden mobile>
            <WrapImage>
              <CompanyImage
                src={cuBoulderLogoVeritcal}
                alt='company-logo'
                fill
              />
            </WrapImage>
          </Hidden>
          <Info>
            <TopRow>
              <Degree>B.S. in Electrical & Computer Engineering</Degree>
              <TimeRange>Graduated in May, 2019</TimeRange>
            </TopRow>
            {/* <Company>{company}</Company> */}
          </Info>
        </Header>
        {/* <Subtitle>Featured Technologies</Subtitle>
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
        )} */}
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
  flex-direction: column;
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
  flex-direction: column;
`;

const Degree = styled.span`
  font-family: 'Right Gothic Wide';
  font-size: 32px;
  font-weight: 470;
  line-height: 36px;
`;

const TimeRange = styled.span`
  font-size: 24px;
  color: var(--celeste);
`;

const WrapImage = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
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
  display: flex;
  gap: 16px;
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
