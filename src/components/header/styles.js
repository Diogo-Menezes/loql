import styled from 'styled-components';

export const Container = styled.div`
  
  height: 70px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);

  svg {
    position:absolute;
    left:4px;
    justify-self: flex-start;
    height: 64px;
    width: 44px;
    color:#544B3F
  }

  img {
    justify-self: center;
    margin-top: 16px;
    margin-bottom: 6px;
  }
`;