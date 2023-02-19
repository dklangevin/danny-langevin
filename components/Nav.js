import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Hidden from 'components/Hidden';
import { IconMenu } from 'icons';
import { useRouter } from 'next/router';
import { navItems } from '@/constants';

const BREAKPOINT = 940;

export default function Nav({ onOpenMobileNav }) {
  const [isTransparent, setIsTransparent] = useState(true);

  const { pathname } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container isTransparent={isTransparent}>
      <Hidden breakpoint={BREAKPOINT} fullWidth>
        <Content>
          <Name href="/">Danny Langevin</Name>
          <List>
            {navItems.map(({ label, href }, i) => (
              <li key={i}>
                <Item
                  href={href}
                  selected={pathname === href}
                  light={!isTransparent}
                >
                  {label}
                </Item>
              </li>
            ))}
          </List>
        </Content>
      </Hidden>
      <Hidden mobile breakpoint={BREAKPOINT} fullWidth>
        <Content>
          <MenuIcon onClick={onOpenMobileNav} />
          <Name href="/">Danny Langevin</Name>
        </Content>
      </Hidden>
    </Container>
  );
}

const Container = styled.div`
  font-family: 'Right Gothic Wide';
  font-size: 24px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.1s;
  z-index: 999;
  ${({ isTransparent }) =>
    !isTransparent &&
    css`
      /* background: linear-gradient(to right, #2b5876cc, #256e5bcc); */
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(8px);
      outline: 1px solid white;
    `}
`;

const Content = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 16px;
`;

const Name = styled(Link)`
  font-weight: 470;
  margin: 0 auto 0 16px;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    color: turquoise;
  }
  @media screen and (max-width: ${BREAKPOINT}px) {
    margin-inline: auto;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 4px;
`;

const Item = styled.a`
  /* font-family: 'Lemon Milk'; */
  font-weight: 200;
  /* text-transform: uppercase; */
  font-size: 22px;
  /* letter-spacing: 0.2ch; */
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  ${({ selected, light }) =>
    selected &&
    (light
      ? css`
          color: var(--celeste);
          font-weight: 500;
        `
      : css`
          /* color: var(--celeste); */
          background: rgba(0, 0, 0, 0.3);
          font-weight: 500;
        `)}
  :hover {
    background: #97efe955;
  }
`;

const MenuIcon = styled(IconMenu)`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  cursor: pointer;
`;

const MobileName = styled(Link)`
  font-weight: 630;
  font-size: 24px;
  text-transform: uppercase;
  margin: 0 auto;
  cursor: pointer;
  :hover {
    color: turquoise;
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
