import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Hidden from 'components/Hidden';

export default function ExperienceBlock({
  experience: { position, company, logo, slug, timeRange, description } = {},
  ...props
}) {
  return (
    <Container {...props}>
      <Header>
        <WrapImage>
          <CompanyImage src={logo} alt='company-logo' fill sizes='200px' />
        </WrapImage>
        <Info>
          <TopRow>
            <Position>{position}</Position>
            <Hidden mobile breakpoint={640}>
              <TimeRange>{timeRange}</TimeRange>
            </Hidden>
          </TopRow>
          <Company>{company}</Company>
          <Hidden breakpoint={640}>
            <TimeRange>{timeRange}</TimeRange>
          </Hidden>
          <LearnMore href={`/experience/${slug}`}>Learn More</LearnMore>
        </Info>
      </Header>
      {/* <Description>
        {description?.map((item, i) => (
          <Item key={i}>{item}</Item>
        ))}
      </Description> */}
    </Container>
  );
}

const Container = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  display: flex;
  gap: 32px;
  @media screen and (width < 440px) {
    flex-direction: column;
  }
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
`;

const Position = styled.span`
  font-size: 32px;
  font-weight: 800;
  line-height: 36px;
  text-transform: uppercase;
`;

const Company = styled.span`
  font-size: 22px;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--celeste);
`;

const TimeRange = styled.span`
  white-space: nowrap;
`;

const WrapImage = styled.div`
  min-width: 100px;
  min-height: 100px;
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
