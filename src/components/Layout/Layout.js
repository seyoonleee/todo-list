import React from 'react';
import styled from 'styled-components';

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;

const Container = styled.div`
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
