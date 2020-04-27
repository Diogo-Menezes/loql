import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  background-color: #fff;
  width: 100%;
  height: 70px;
  padding-left: 40px;
  padding-right: 40px;

  display: flex;
  align-items: center;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);

  img {
    justify-self: center;
  }

  div {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    font-size: 20px;
    color: #544b3f;

    a {
      text-decoration: none;
      color: #544b3f;
      transition: color 0.4s;

      &:hover {
        color: #6cbf84;
      }
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 67px;
      }
      &:hover {
        color: #6cbf84;
        border-bottom: 3px solid #6cbf84;
        margin-bottom: -3px;
      }
    }
  }
  > a {
    padding: 4px 20px;
    margin: 0 40px 0 26px;
    border-radius: 30px;
    border: 3px solid #544b3f;
    border-radius: 30px;

    text-decoration: none;
    text-align: center;
    font-weight: 800;
    font-size: 18px;
    color: black;

    transition: all 0.4s;
    &:hover {
      border-color: #6cbf84;
      color: #6cbf84;
    }
  }
`;
