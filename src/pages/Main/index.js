import React, { Component } from "react";
import api from "../../services/api";

import { Container, Form } from "./styles";
import UserAbout from "../../components/UserAbout";

class Main extends Component {
  state = {
    userInput: "",
    user: {
      login: "PauloRev",
      id: 42824466,
      node_id: "MDQ6VXNlcjQyODI0NDY2",
      avatar_url: "https://avatars0.githubusercontent.com/u/42824466?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/PauloRev",
      html_url: "https://github.com/PauloRev",
      followers_url: "https://api.github.com/users/PauloRev/followers",
      following_url:
        "https://api.github.com/users/PauloRev/following{/other_user}",
      gists_url: "https://api.github.com/users/PauloRev/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/PauloRev/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/PauloRev/subscriptions",
      organizations_url: "https://api.github.com/users/PauloRev/orgs",
      repos_url: "https://api.github.com/users/PauloRev/repos",
      events_url: "https://api.github.com/users/PauloRev/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/PauloRev/received_events",
      type: "User",
      site_admin: false,
      name: null,
      company: null,
      blog: "https://phdev.netlify.com",
      location: "Baturité, Ceará",
      email: null,
      hireable: true,
      bio:
        "Desenvolvedor Front-End, gosto de desafios e de aprender coisas novas, atualmente estudando a stack MERN.",
      public_repos: 11,
      public_gists: 0,
      followers: 5,
      following: 6,
      created_at: "2018-08-30T01:58:54Z",
      updated_at: "2019-06-05T02:59:03Z"
    }
  };

  userSearch = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.userSearch}>
          <input
            value={this.state.userInput}
            onChange={e => this.setState({ userInput: e.target.value })}
            placeholder="Nome do usuário..."
          />
          <button>OK</button>
        </Form>
        <UserAbout user={this.state.user} />
      </Container>
    );
  }
}

export default Main;
