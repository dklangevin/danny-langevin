import styled, { css } from 'styled-components';
import { useState } from 'react';
import { navItems } from '@/constants';
import { useRouter } from 'next/router';
import { IconClose } from '@/icons';

export default function MobileNav({ onClose, options, setOptions }) {
  const { pathname } = useRouter();
  return (
    <Container onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <CloseIcon onClick={onClose} />
        <List>
          {navItems.map(({ label, href }, i) => (
            <li key={i}>
              <Item href={href} selected={pathname === href}>
                {label}
              </Item>
            </li>
          ))}
        </List>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

const Content = styled.div`
  width: 300px;
  height: 100%;
  min-width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  font-size: 16px;
  font-weight: 900;
  /* background: linear-gradient(29deg, rgb(50, 50, 50), rgb(30, 30, 30)); */
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Item = styled.a`
  /* font-family: 'Lemon Milk'; */
  font-family: 'Right Gothic Wide';
  font-size: 22px;
  font-weight: 200;
  /* text-transform: uppercase; */
  /* letter-spacing: 0.2ch; */
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    css`
      background: rgba(100, 100, 100, 0.3);
    `}
  :hover {
    outline: 1px solid white;
  }
`;

const CloseIcon = styled(IconClose)`
  width: 32px;
  height: 32px;
  margin-left: auto;
  cursor: pointer;
`;
