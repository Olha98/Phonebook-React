import React, { Component } from 'react'
import authOperation from '../../../Redux/Operations/authOperations'
import css from '../LoginForm/LoginForm.module.css'
import { connect } from 'react-redux'


const initialState = {
  name: '',
  email: '',
  password: ''
}

class RegisterForm extends Component {
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

    this.props.onAddNewUser({ ...this.state });
    this.setState({ ...initialState })

  }

  render() {
    const { name, email, password } = this.state

    return (
      <div>
        <div className={css.loginBox}>
          <h2>Register</h2>
          <form>
          <div className={css.userBox}>
              <label>User Name</label>
              <input type="text" name="name" value={name} onChange={this.handleChange} />
            </div>
            <div className={css.userBox}>
              <label>Email</label>
              <input type="email" name="email" value={email} onChange={this.handleChange} />
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




export default connect(null, { onAddNewUser: authOperation.addNewUser })(RegisterForm);