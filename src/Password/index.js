import './index.css'

const Password = props => {
  const {eachPassword, showPasswords} = props
  const {id, website, username, password} = eachPassword

  return (
    <li className="each-list">
      <div>{website[0].toUpperCase()}</div>
      <div>
        <p>{website}</p>
        <p>{username}</p>
        {showPasswords ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-img.png"
            alt="stars"
          />
        ) : (
          <p>{password}</p>
        )}
      </div>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default Password
