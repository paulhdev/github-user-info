import React, { Component } from "react";
import api from "../../services/api";

import { Container, Form, Message } from "./styles";
import UserAbout from "../../components/UserAbout";

class Main extends Component {
  state = {
    userInput: "",
    userError: false,
    resApi: false,
    loading: false,
    user: {}
  };

  userSearch = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const res = await api.get(`/${this.state.userInput}`);

      this.setState({
        user: res.data,
        resApi: true,
        userError: false,
        userInput: ""
      });
    } catch {
      this.setState({ userError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <Form withError={this.state.userError} onSubmit={this.userSearch}>
          <input
            value={this.state.userInput}
            onChange={e => this.setState({ userInput: e.target.value })}
            placeholder="Nome do usuário..."
          />
          <button>
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              "OK"
            )}
          </button>
        </Form>
        {this.state.resApi === true ? (
          <UserAbout user={this.state.user} />
        ) : (
          <Message>Informe um nome de usuário...</Message>
        )}
      </Container>
    );
  }
}

export default Main;
