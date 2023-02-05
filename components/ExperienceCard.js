import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Hidden from 'components/Hidden';

export default function ExperienceCard({
  experience: {
    position,
    company,
    logo,
    logoStyle,
    backgroundLogoStyle,
    slug,
    timeRange,
    description,
  } = {},
  ...props
}) {
  return (
    <Container {...props}>
      <WrapBackgroundImage>
        <BackgroundImage
          src={logo}
          alt='background-image'
          width={500}
          height={500}
          style={backgroundLogoStyle}
        />
      </WrapBackgroundImage>
      <Header>
        <CompanyImage
          src={logo}
          alt='company-logo'
          width={300}
          height={300}
          style={logoStyle}
        />
        <Info>
          <TopRow>
            <Position>{position}</Position>
          </TopRow>
          <Company>{company}</Company>
          <Hidden mobile breakpoint={640}>
            <TimeRange>{timeRange}</TimeRange>
          </Hidden>
          <LearnMore href={`/experience/${slug}`}>Learn More</LearnMore>
        </Info>
      </Header>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  /* max-height: 200px; */
`;

const Header = styled.div`
  display: flex;
  gap: 32px;
  @media screen and (max-width: 500px) {
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
  font-size: 54px;
  font-weight: 800;
  line-height: 50px;
  text-transform: uppercase;
  @media screen and (min-width: 781px) {
    @supports ((text-stroke: 1px white) or (-webkit-text-stroke: 1px white)) {
      color: transparent;
      -webkit-text-stroke: 1px white;
      text-stroke: 1px white;
      text-shadow: none;
    }
  }
  @media screen and (max-width: 780px) {
    font-size: 40px;
    line-height: 36px;
  }
`;

const Company = styled.span`
  /* font-family: 'Glamsy'; */
  font-family: 'Right Gothic Wide';
  font-size: 26px;
  font-weight: 470;
  /* text-transform: uppercase; */
  letter-spacing: 0.1ch;
  color: var(--celeste);
`;

const TimeRange = styled.span`
  white-space: nowrap;
`;

const WrapImage = styled.div`
  /* min-width: 100px; */
  /* min-height: 100px; */
  /* width: fit-content; */
  position: relative;
`;

const CompanyImage = styled(Image)`
  object-fit: contain;
  filter: grayscale(100%);
  height: 100% !important;
  width: 100%;
  max-width: 200px;
  margin-block: auto;
  @media screen and (width < 780px) {
    max-width: 140px !important;
  }
`;

const WrapBackgroundImage = styled.div`
  width: 50%;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  opacity: 2%;
  overflow: hidden;
`;

const BackgroundImage = styled(Image)`
  object-fit: contain;
  filter: grayscale(100%);
  aspect-ratio: 1;
  position: absolute;
  left: 20%;
  top: 10%;
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
