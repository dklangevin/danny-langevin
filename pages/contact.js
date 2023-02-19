import { socials } from '../constants';
import styled, { css } from 'styled-components';
import { HEIGHT_MARGIN } from '../constants';

export default function Contact() {
  return (
    <Container>
      <Content>
        {socials.map(({ value, link, Icon }, i) =>
          link ? (
            <a href={link} target="_blank" rel="noreferrer" key={i}>
              <Social>
                <SocialIcon as={Icon} />
                <SocialText underline>{value}</SocialText>
              </Social>
            </a>
          ) : (
            <Social key={i} href={link}>
              <SocialIcon as={Icon} />
              <SocialText>{value}</SocialText>
            </Social>
          )
        )}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - ${HEIGHT_MARGIN}px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 780px) {
    align-items: flex-start;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  max-width: 100%;
  @media screen and (max-width: 440px) {
    padding: 16px;
    gap: 8px;
  }
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  /* font-family: 'Right Gothic Wide'; */
  font-weight: 400;
  font-size: 32px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.2);
  padding: 16px 32px;
  cursor: pointer;
  overflow: hidden;
  :hover {
    color: var(--celeste);
  }
  @media screen and (max-width: 780px) {
    font-size: max(4vw, 18px);
    padding-inline: 16px;
    gap: 16px;
    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

const SocialText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  @media screen and (max-width: 780px) {
    ${({ underline }) =>
      underline &&
      css`
        text-decoration: underline;
      `}
  }
`;

const SocialIcon = styled.div`
  fill: currentColor;
  min-width: 18px;
  min-height: 18px;
`;
