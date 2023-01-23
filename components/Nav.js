import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
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

  const items = [
    {
      label: 'Experience',
      href: '/experience',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Skills',
      href: '/skills',
    },
    {
      label: 'Education',
      href: '/education',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <Container isTransparent={isTransparent}>
      <Name href='/'>Danny Langevin</Name>
      <List>
        {items.map(({ label, href }, i) => (
          <Item key={i}>
            <Link href={href}>{label}</Link>
          </Item>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 16px;
  display: flex;
  align-items: center;
  font-family: 'Monument';
  transition: all 0.1s;
  z-index: 999;
  ${({ isTransparent }) =>
    !isTransparent &&
    css`
      background: linear-gradient(to right, #2b5876cc, #256e5bcc);
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid white;
    `}
`;

const Name = styled(Link)`
  font-weight: 400;
  font-size: 22px;
  /* font-style: italic; */
  /* text-transform: uppercase; */
  /* letter-spacing: 0.4rem; */
  margin: 0 auto 0 16px;
  /* text-transform: uppercase; */
  cursor: pointer;
  :hover {
    color: turquoise;
  }
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  font-size: 14px;
  font-weight: 200;
  /* text-transform: uppercase; */
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;
