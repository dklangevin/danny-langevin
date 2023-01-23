import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { experience } from 'constants';
import { useRouter } from 'next/router';

export default function ExperienceBlock(props) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(experience);
  const { position, company, logo, timeRange, description } =
    experience?.find((item) => item.slug === slug) || {};
  return (
    <Container {...props}>
      <Content>
        <Header>
          <WrapImage>
            <CompanyImage src={logo} alt='company-logo' fill sizes='200px' />
          </WrapImage>
          <Info>
            <TopRow>
              <Position>{position}</Position>
              <TimeRange>{timeRange}</TimeRange>
            </TopRow>
            <Company>{company}</Company>
            <LearnMore href={`/experience/${slug}`}>Learn More</LearnMore>
          </Info>
        </Header>
        <Description>
          {description?.map((item, i) => (
            <Item key={i}>{item}</Item>
          ))}
        </Description>
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
`;

const Company = styled.span`
  font-size: 22px;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--celeste);
`;

const TimeRange = styled.span``;

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
