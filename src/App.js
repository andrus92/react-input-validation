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
      firstName: '',
      lastName: '',
    };

    this.emailRegex = new RegExp('^(.+)@(.+)$');
  }

  validate = (category, value) => {
    switch(category) {
      case 'email':
          this.setState({isEmailValid: this.emailRegex.test(value)});
        break;
      case 'password':
        // code block
        break;
      case 'firstName':
      case 'lastName':
        // code block
        break;
      default:
        // code block
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
            name='email' 
            value={this.state.email}
            handleChange={this.handleChange}
            isValid={this.state.isEmailValid}
          />
{/* 
          <Input
            type='password'
            name='password' 
            value={this.state.password}
            handleChange={this.handleChange}
          />

          <Input
            type='text'
            name='firstName' 
            value={this.state.firstName}
            handleChange={this.handleChange}
          />

          <Input
            type='password'
            name='lastName' 
            value={this.state.lastName}
            handleChange={this.handleChange}
          /> */}

            <button className='btn' type='submit'>Submit</button>
          </form>
        </div>
          

        
      </div>
      
    );
  }
}

export default App;