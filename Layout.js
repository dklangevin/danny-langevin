import styled from 'styled-components';
import MobileNav from './components/MobileNav';
import Nav from './components/Nav';
import { useState } from 'react';
import css from 'styled-jsx/css';

export default function Layout({ Component, pageProps }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <Container mobileNavOpen={mobileNavOpen}>
      <Noise />
      <Nav onOpenMobileNav={() => setMobileNavOpen(true)} />
      {mobileNavOpen && <MobileNav onClose={() => setMobileNavOpen(false)} />}
      <Content>
        <Component {...pageProps} />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  ${({ mobileNavOpen }) =>
    mobileNavOpen &&
    css`
      height: 100vh;
      overflow-y: hidden;
      padding-right: 15px;
    `}
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  /* height: calc(100vh - 80px); */
  /* position: absolute;
  top: 80px;
  left: 0; */
  margin-top: 80px;
  z-index: 1;
`;

const Noise = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  :after {
    content: '';
    height: 300%;
    width: 300%;
    opacity: 0.1;
    position: fixed;
    background-image: url(/noise.png);
    animation: grain 1s steps(10) infinite;
  }
`;
