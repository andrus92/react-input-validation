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
    this.passwordRegex = new RegExp('.*[+\?\*\^\$\%].*');
    // Name and surname should start with capital letter
    this.nameRegex = new RegExp('^[A-Z][a-z]+$');
  }

  validate = (category, value) => {
    switch(category) {
      case 'email':
          this.setState({isEmailValid: this.emailRegex.test(value)});
        break;
      case 'password':
        // should contain at least 8 symbols
        if (value.length >= 8) {
          this.setState({isPasswordValid: this.passwordRegex.test(value)});
        } else {
          this.setState({isPasswordValid: false});
        }
        
        break;
      case 'firstName':
        this.setState({isFirstNameValid: this.nameRegex.test(value)});
        break;
      case 'lastName':
        this.setState({isLastNameValid: this.nameRegex.test(value)});
        break;
      default:
        return;
    }

  }

  handleChange = (event) => {
    console.log('handleChange: ' + event.target.id)
    this.setState({[event.target.id]: event.target.value});
    this.validate(event.target.id, event.target.value);
    /*
    const isValid = validate(event.target.id, event.target.value);
    OR
    const isValid = validate(this.state);
    

    if (!isValid) {

    }
    */
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
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
          />

          <Input
            type='text'
            name='lastName' 
            value={this.state.lastName}
            handleChange={this.handleChange}
            isValid={this.state.isLastNameValid}
          />

          <Input
            type='text'
            name='email' 
            value={this.state.email}
            handleChange={this.handleChange}
            isValid={this.state.isEmailValid}
          />

          <Input
            type='password'
            name='password' 
            value={this.state.password}
            handleChange={this.handleChange}
            isValid={this.state.isPasswordValid}
          />
            
          <button className='btn' type='submit'>Submit</button>
          </form>
        </div>
          

        
      </div>
      
    );
  }
}

export default App;