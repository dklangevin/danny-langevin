import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import cuBoulderLogo from 'public/logos/cuboulder.svg';
import cuBoulderLogoVeritcal from 'public/logos/cuboulder-vertical.svg';
import Hidden from 'components/Hidden';
import { HEIGHT_MARGIN } from '../constants';

export default function Education(props) {
  return (
    <Container {...props}>
      <Content>
        <Header>
          <Hidden breakpoint={600}>
            <WrapImage>
              <CompanyImage
                src={cuBoulderLogo}
                alt="company-logo"
                fill
                sizes="800px"
              />
            </WrapImage>
          </Hidden>
          <Hidden mobile breakpoint={600}>
            <WrapImage>
              <CompanyImage
                src={cuBoulderLogoVeritcal}
                alt="company-logo"
                fill
              />
            </WrapImage>
          </Hidden>
          <Info>
            <TopRow>
              <Degree>B.S. in Electrical & Computer Engineering</Degree>
              <TimeRange>Graduated in May, 2019</TimeRange>
            </TopRow>
          </Info>
        </Header>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - ${HEIGHT_MARGIN}px);
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  min-height: 120px;
  position: relative;
`;

const CompanyImage = styled(Image)`
  object-fit: contain;
  object-position: left;
`;
