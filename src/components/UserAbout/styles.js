import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  max-width: 920px;
  margin: 30px auto;
  margin-top: 40px;
  padding: 0 5%;

  span {
    font-weight: bold;
  }
`;

export const Card = styled.article`
  width: 18em;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;

  box-shadow: 1px 1px 5px #eee;

  img {
    max-width: 100%;
    width: 250px;
    height: 250px;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 18px;
    border-bottom: 1px solid #eee;
    margin-bottom: 15px;
  }

  h4 {
    font-size: 16px;
    margin-bottom: 15px;
  }

  small {
    font-size: 14px;
    margin-bottom: 15px;
  }

  a {
    color: #696fff;
    text-decoration: none;
  }
`;

export const List = styled.ul`
  list-style: none;

  li {
    margin: 10px 0;
    font-size: 1.1rem;
    padding: 10px 5px;

    &:nth-child(2n - 1) {
      background: #f5f5f5;
    }
  }
`;
