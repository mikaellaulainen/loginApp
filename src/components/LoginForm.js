import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const LoginForm = ({ handleLogin,username,password,handleUsername,handlePassword,registerAcc }) => {
  return (
    <Form className='col-lg-4 col-md-6 col-sm-9 mx-1 mx-sm-auto mt-3 p-3 border' onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control value={username} onChange={handleUsername} type="username" placeholder="Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={handlePassword} type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <Form.Group>
        <Form.Text>Dont have account?<button onClick={registerAcc} className='register-btn'>Register</button></Form.Text>
      </Form.Group>
    </Form>
  )
}

export default LoginForm