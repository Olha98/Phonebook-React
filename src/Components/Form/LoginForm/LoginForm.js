import React, { Component } from 'react'
import css from './LoginForm.module.css'
import authOperation from '../../../Redux/Operations/authOperations'
import { connect } from 'react-redux'



const initialState = {
  email: '',
  password: ''
}

class LoginForm extends Component {
  state = {
    ...initialState
  }


  handleChange = (e) => {
    console.log(e.target, "e")
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
  }

  clickButton = () => {

    this.props.onLoginUser({ ...this.state });
    this.setState({ ...initialState })

  }

  render() {
    const {email, password } = this.state
    console.log(this.state)
    return (
      <div>
        <div className={css.loginBox}>
          <h2>Login</h2>
          <form>

            <div className={css.userBox}>
              <label>Email</label>
              <input type="email" name="email" required="" value={email} onChange={this.handleChange} />

            </div>

            <div className={css.userBox}>
              <label>Password</label>
              <input type="password" name="password" value={password} onChange={this.handleChange} />

            </div>
            <a onClick={this.clickButton}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
           Submit
        </a>
          </form>
        </div>
      </div>
    )
  }
};

export default connect(null, { onLoginUser: authOperation.loginUser })(LoginForm)