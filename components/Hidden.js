import styled, { css } from 'styled-components';

export default function Hidden({
  mobile,
  breakpoint = 440,
  children,
  fullWidth,
  ...props
}) {
  return (
    <Container
      mobile={mobile}
      breakpoint={breakpoint}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </Container>
  );
}

const Container = styled.div`
  ${({ mobile, breakpoint }) =>
    mobile
      ? css`
          @media screen and (min-width: ${breakpoint}px) {
            display: none;
          }
        `
      : css`
          @media screen and (max-width: ${breakpoint - 1}px) {
            display: none;
          }
        `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;
