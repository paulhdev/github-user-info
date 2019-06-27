import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 5%;
  background: #696fff;

  h1 {
    color: #fff;
    font-size: 25px;
  }

  nav {
    a {
      margin: 0 10px;
      font-size: 1.2rem;
      text-decoration: none;
      color: #ccc;
      font-weight: 400;

      &:hover {
        color: #fff;
        transition: all 0.7s ease;
      }
    }
  }
`;
