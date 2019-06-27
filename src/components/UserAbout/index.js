import React from "react";

import { Card, List } from "./styles";

import { Container } from "./styles";

const UserAbout = ({ user }) => {
  return (
    <Container>
      <Card>
        <img src={user.avatar_url} alt="Avatar" />
        <h2>
          <span>Nome: </span> {user.login}
        </h2>
        <h4>
          <span>Site: </span>
          <a href={user.blog} target="blank">
            {user.blog}
          </a>
        </h4>
        <small>
          <span>Local: </span> {user.location}
        </small>
        <List>
          <li>
            <span>Repositórios: </span> {user.public_repos}
          </li>
          <li>
            <span>Seguidores: </span> {user.followers}
          </li>
          <li>
            <span>Seguindo: </span> {user.following}
          </li>
          <li>
            <span>Github: </span>
            <a href={user.html_url} target="blank">
              {user.html_url}
            </a>
          </li>
        </List>
      </Card>
    </Container>
  );
};

export default UserAbout;
