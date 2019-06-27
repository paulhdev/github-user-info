import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;

  max-width: 920px;
  margin: 0 auto;
  padding: 2% 5%;
  margin-top: 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    height: 40px;
    width: 90%;
    padding: 5px;
    border-radius: 3px;
    border: none;
    border-bottom: 1px solid #eee;
    font-size: 1.1rem;
    color: #444;

    &::-webkit-input-placeholder {
      color: #c4c4c4;
    }
  }

  button {
    height: 40px;
    width: 15%;
    border: none;
    background: #90ee90;
    border-radius: 3px;
    margin-left: 5px;
    color: #fff;
    font-weight: bold;
  }
`;
