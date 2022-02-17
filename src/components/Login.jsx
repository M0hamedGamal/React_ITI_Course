import React, { Component } from "react";
import Joi from "joi-browser";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: {},
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    if (errors) return;

    console.log("Submit");
  };

  handleChange = (e) => {
    const state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state);
  };

  validate = () => {
    const errors = {};

    const state = { ...this.state };

    delete state.errors;

    const res = Joi.validate(state, this.schema, { abortEarly: false });

    if (res.error == null) {
      this.setState({ errors: {} });
      return null;
    }

    for (let error of res.error.details) {
      errors[error.path] = error.message;
    }

    this.setState({ errors });
    return errors;
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="my-3">
            <label htmlFor="username" className="form-label">
              UserName:
            </label>
            <input
              type="username"
              className="form-control"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            {this.state.errors.username && (
              <div className="alert alert-danger">
                {this.state.errors.username}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            {this.state.errors.password && (
              <div className="alert alert-danger">
                {this.state.errors.password}
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default Login;
