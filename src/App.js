import {Component} from 'react'
import {v4} from 'uuid'
import Password from './Password'
import './App.css'

class App extends Component {
  state = {
    passwords: [],
    website: '',
    username: '',
    password: '',
    passwordsCount: 0,
    showPasswords: false,
  }

  getNewPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newPassword = {
      id: v4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwords: [...prevState.passwords, newPassword],
      passwordsCount: prevState.passwordsCount + 1,
    }))
  }

  onChangeWebsite = event => {
    console.log(event.target.value)
    this.setState({website: event.target.value})
  }

  onCheck = event => {
    const {showPasswords} = this.state
    console.log(showPasswords)
    console.log(event.target.value)
  }

  onChangeUsername = event => {
    console.log(event.target.value)
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    console.log(event.target.value)
    this.setState({password: event.target.value})
  }

  render() {
    const {passwords, passwordsCount, showPasswords} = this.state
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="card-1">
          <div>
            <form className="password-form" onSubmit={this.getNewPassword}>
              <h1 className="form-heading">Add New Password</h1>
              <div className="website">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="small-image"
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="website">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="small-image"
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="website">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="small-image"
                />
                <input
                  type="password"
                  className="input"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                />
              </div>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="manager-sm"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt=" password manager"
              className="manager-lg"
            />
          </div>
        </div>
        <div className="card-2">
          <div className="card-2-navbar">
            <div className="card-2-heading">
              <h1>Your passwords</h1>
              <p className="passwords-count">{passwordsCount}</p>
            </div>
            <div className="search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-image"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                onChange={this.onCheck}
              />
            </div>
          </div>
          <hr className="horizontal" />
          <div className="check-box">
            <input type="checkBox" checked={showPasswords} id="check-box" />
            <label for="check-box">Show Passwords</label>
          </div>
          {passwordsCount === 0 ? (
            <div className="no-passwords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-image"
              />
              <p>No passwords</p>
            </div>
          ) : (
            <ul className="list-container">
              {passwords.map(eachPassword => (
                <Password
                  eachPassword={eachPassword}
                  key={eachPassword.id}
                  showPasswords={showPasswords}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default App
