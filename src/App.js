import React from 'react';
import './App.css';
import Input from './Components/Input';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      isEmailValid: undefined,
      password: '',
      isPasswordValid: undefined,
      firstName: '',
      isFirstNameValid: undefined,
      lastName: '',
      isLastNameValid: undefined,
    };

    this.emailRegex = new RegExp('^[A-Za-z0-9+_.-]+@[A-Za-z0-9-]+[.][A-Za-z]{2,4}$');
    // Password should contain at least on special symbol
    this.passwordRegex = new RegExp('.*[+\?\*\^\$%#&@].*');
    // Name and surname should start with capital letter
    this.nameRegex = new RegExp('^[A-Z][a-z]+$');
  }

  validate = (category, value) => {
    switch(category) {
      case 'email':
        if (value.length === 0) {
          this.setState({isEmailValid: undefined});
        } else {
          this.setState({isEmailValid: this.emailRegex.test(value)});
        }
        break;
      case 'password':
        if (value.length === 0) {
          this.setState({isPasswordValid: undefined});
        } else if (value.length >= 8) { // should contain at least 8 symbols
          this.setState({isPasswordValid: this.passwordRegex.test(value)});
        } else {
          this.setState({isPasswordValid: false});
        }
        break;
      case 'firstName':
        if (value.length === 0) {
          this.setState({isFirstNameValid: undefined});
        } else {
          this.setState({isFirstNameValid: this.nameRegex.test(value)});
        }
        break;
      case 'lastName':
        if (value.length === 0) {
          this.setState({isLastNameValid: undefined});
        } else {
          this.setState({isLastNameValid: this.nameRegex.test(value)});
        }
        break;
      default:
        return;
    }

  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value});
    this.validate(event.target.id, event.target.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Send the data somewhere
    console.log(event)
    // Reset the form
    this.setState(
      {
       email: '',
       isEmailValid: undefined,
       password: '',
       isPasswordValid: undefined,
       firstName: '',
       isFirstNameValid: undefined,
       lastName: '',
       isLastNameValid: undefined,
      }
    );
  }


  renderBtn = () => {
    let disabledFlg = true;
    if (this.state.isFirstNameValid && this.state.isLastNameValid && this.state.isEmailValid && this.state.isPasswordValid) {
      disabledFlg = false;
    }

    return (
      <React.Fragment>
      {disabledFlg 
        ? <button className='btn' disabled type='submit'>Submit</button>
        : <button className='btn' type='submit'>Submit</button>
      }
      </React.Fragment>
    );
  }



  render() {

    return (
      <div className='App'>
        <div className='App__container'>
        <form className='App__form' onSubmit={this.handleSubmit}>
          <Input
            type='text'
            name='firstName' 
            value={this.state.firstName}
            handleChange={this.handleChange}
            isValid={this.state.isFirstNameValid}
            validText='The name is correct'
            invalidText='The name must start with capital letter'
          />

          <Input
            type='text'
            name='lastName' 
            value={this.state.lastName}
            handleChange={this.handleChange}
            isValid={this.state.isLastNameValid}
            validText='The surname is correct'
            invalidText='The surname must start with capital letter'
          />

          <Input
            type='text'
            name='email' 
            value={this.state.email}
            handleChange={this.handleChange}
            isValid={this.state.isEmailValid}
            validText='The email is fine'
            invalidText='The email is incorrect. Please correct it'
          />

          <Input
            type='password'
            name='password' 
            value={this.state.password}
            handleChange={this.handleChange}
            isValid={this.state.isPasswordValid}
            validText='The password is fine'
            invalidText='The password must contain 8 symbols + one special symbol'
          />
            
          {this.renderBtn()}
          </form>
        </div>
      </div>
      
    );
  }
}

export default App;