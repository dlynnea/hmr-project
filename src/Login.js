import React, {Component} from 'react';

class Login extends Component {

//     state = {
//     username: '',
//     password: '',
//   }

  onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

  login(event) {
      event.preventDefault()
      const formData = new FormData(event.target)
      fetch("http://localhost:3000/login", {
          method: "POST",
          body: JSON.stringify({
              username: formData.get("username"),
              password: formData.get("password")
          })
      }).then(response => response.json())
      .then(({token}) => {
          localStorage.setItem("token", token)
      })
  }

  render() {
    return (
      <form className="login-register-form" onSubmit={this.login}>
          <h2>Login Here</h2>
        <input
          name='username'
          placeholder='Username'
          onChange={e => this.onChange(e)}
           />
        <input
          name='password'
          placeholder='Password'
          type='password'
          onChange={e => this.onChange(e)}
           />
        <input type="submit" value="login" />
      </form>
    );
  }
}
 
export default Login;