import React, { Component } from 'react'
import css from './LoginForm.module.css'



const initialState = {
  userName: '',
  password: ''
}

export default class LoginForm extends Component {
  state = {
    ...initialState
  }


  handleChange = (e) => {
    console.log(e.target, "e")
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
  }

  //  clickButton = (e) => {
  //   console.log(e.target, "clickButtom")
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { name, number } = this.state;
  //   const errorContacts = this.props.contacts

  //   if (errorContacts) {
  //     console.log(errorContacts.length, "errorContacts.lenght")
  //     const error = errorContacts.map(contact => contact)
  //     error.find(errorItem => errorItem.name === this.state.name && errorItem.number === this.state.number)
  //       ? this.alertShow()
  //       : this.props.onAddContacts({ name, number });
  //   }
  //   this.setState({ ...initialState })
  // }

  render() {
    const { userName, email, password } = this.state
    console.log(this.state)
    return (
      <div>
        <div className={css.loginBox}>
          <h2>Login</h2>
          <form>

            <div className={css.userBox}>
              <label>User Name</label>
              <input type="text" name="userName" required="" value={userName} onChange={this.handleChange} />

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
}