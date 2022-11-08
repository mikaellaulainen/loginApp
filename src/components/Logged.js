import Button from 'react-bootstrap/Button'

const Logged = ({ user, logout }) => {
  console.log(user.username)
  return (
    <div className='logged-in text-center'>
      <h2>Hello {user.username}</h2>
      <p>You are now logged in</p>
      <p>You can logout by pressing <Button onClick={logout}>Logout</Button></p>

    </div>
  )
}

export default Logged