import styled from 'styled-components';

export const Fill = styled.div`
  height: 75px;
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  background-color: #fff;
  width: 100%;
  height: 75px;

  display: flex;
  justify-content: center;
  box-shadow: 0px 2px 6px rgb(192, 169, 168, 0.5);

  div {
    display: flex;
    flex: 1;
    padding-left: 40px;
    padding-right: 40px;
    justify-content: center;
    align-items: center;
    max-width: 1024px;

    img {
      justify-self: center;
    }

    menu {
      display: flex;
      justify-content: flex-end;
      flex: 1;
      font-size: 20px;
      color: #544b3f;

      a {
        text-decoration: none;
        color: #544b3f;
        transition: color 0.2s;

        &:hover {
          color: #6cbf84;
        }

        span {
          width: 80px;
          height: 50px;

          display: flex;
          justify-content: center;
          align-items: center;

          font-weight: 400;
          font-size: 20px;
        }

        &:hover {
          color: #6cbf84;
          font-weight: 700;

          background-position: bottom;
          background-size: 15px 15px;
          background-repeat: no-repeat;

          background-image: radial-gradient(
            circle,
            #6cbf84 25%,
            transparent 33%,
            transparent 33%
          );
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
  }
`;
