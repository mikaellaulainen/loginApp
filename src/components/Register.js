import { useState } from 'react'
import { InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FaRegistered } from 'react-icons/fa'


const Register = ({ username,handleUsername,password,handlePassword,handleRegister }) => {
  const [adult,setAdult] = useState(false)
  const [hide,setHide] = useState(true)

  const hidePassword = () => {
    setHide(!hide)
  }

  const handleChange = () => {
    setAdult(!adult)
  }

  return (
    <Form className='col-lg-4 col-md-6 col-sm-9 mx-1 mx-sm-auto mt-3 p-3 border' onSubmit={handleRegister}>
      <div className='text-center'>
        <FaRegistered size={60}/>
        <div>
          Create new Account!
        </div>
      </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control value={username} onChange={handleUsername} type="username" placeholder="Username" />
      </Form.Group>
      <InputGroup>
        <Form.Control value={password} onChange={handlePassword} type={hide ? 'password' : 'text'} placeholder="Password" />
        <Button onClick={hidePassword}>Show</Button>
      </InputGroup>
      <Form.Check className='my-3'
        onChange={handleChange}
        type="switch"
        id="custom-switch"
        label="I'am over 18 years old"
      />
      <Button variant="primary" type="submit" disabled={adult ? false : true}>
        Create
      </Button>
    </Form>
  )
}

export default Register