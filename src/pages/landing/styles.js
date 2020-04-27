import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column; */
  margin-top: 30px;
  padding-bottom: 50px;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;

  div {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      max-width: 500px;
    }
  }
`;

export const Call = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #2f2b27;
  height: 230px;
  color: white;
  justify-content: center;
  align-items: center;
  margin: 40px;

  button {
    margin: 25px 16px;
    height: 51px;
    width: 250px;
    border-radius: 50px;
    background: #6cbf84;
  }
`;
