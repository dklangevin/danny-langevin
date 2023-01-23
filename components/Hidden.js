import styled, { css } from 'styled-components';

export default function Hidden({
  mobile,
  breakpoint = 440,
  children,
  ...props
}) {
  return (
    <Container mobile={mobile} breakpoint={breakpoint} {...props}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  ${({ mobile, breakpoint }) =>
    mobile
      ? css`
          @media screen and (width < ${breakpoint}px) {
            display: none;
          }
        `
      : css`
          @media screen and (width >= ${breakpoint}px) {
            display: none;
          }
        `}
`;
