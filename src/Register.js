import React, {Component} from 'react';

class Register extends Component {

  onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  
    signup(event) {
        event.preventDefault()
        const formData = new FormData
        fetch("http://localhost:3000/register", {
            body: JSON.stringify({
                username: formData.get("username"),
                name: formData.get("name"),
                password: formData.get("password")
            })
        }).then(response => response.json())
        .then(({token}) => {
            localStorage.setItem("token", token)
        })
    }

  render() {
    return (
      <form className="login-register-form">
          <h2>Register Here</h2>
        <input
        name='name'
        placeholder='Name'
        onChange={e => this.onChange(e)} />
        <input
          name='username'
          placeholder='Username'
          onChange={e => this.onChange(e)} />
        <input
          name='password'
          placeholder='Password'
          type='password'
          onChange={e => this.onChange(e)} />
        <br />
        <input type="submit" value="Register!" />
      </form>
    );
  }
}

export default Register;