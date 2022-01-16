import React from "react";
import "./sign-in.scss";
import CustomButton from "../custom-button/custom-button";
import { signInWithGoogle } from "../../firebase/firebase.util";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value })
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I Already have a account</h1>
        <span>Sign-in with your email and password </span>

        <form onSubmit={this.handleSubmit}  className="group">
        <label className="label">Email</label>
        <input className="input"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          ></input>
          <label className="label">Password</label>
          <input className="input"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          ></input>
         

          <CustomButton type="submit" value="SIGN-IN"></CustomButton>
          <CustomButton value="GOOGLE SIGN-IN" onClick={signInWithGoogle}></CustomButton>
          
          
        </form>
      </div>
    );
  } 
}
export default SignIn;
