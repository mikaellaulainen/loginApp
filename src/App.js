import { useState } from 'react'

import loginService from './services/login'
import registerService from './services/register'

import LoginForm from './components/LoginForm'
import Logged from './components/Logged'
import Register from './components/Register'
import Notification from './components/Notification'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [register,setRegister] = useState(false)
  const [error,setError] = useState(null)
  const [errortype,setErrortype] = useState(null)

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password
      })
      setUser(user)
      setUsername('')
      setPassword('')
      setError('Logged in successfully!')
      setErrortype('success')
      setTimeout(() => {
        setError(null)
      },3000)
    } catch (error) {
      setError(error.response.data.error)
      setErrortype('danger')
      setTimeout(() => {
        setError(null)
      },3000)
    }
  }

  const handleRegister =async (e) => {
    e.preventDefault()
    try {
      await registerService.register({ username, password })
      setUsername('')
      setPassword('')
      setError('Account created successfully!')
      setErrortype('success')
      setTimeout(() => {
        setError(null)
      },3000)
      setRegister(false)
    } catch (error) {
      setError(error.response.data.error)
      setErrortype('danger')
      setTimeout(() => {
        setError(null)
      },3000)
    }
  }

  const logout = () => {
    setUser(null)
  }

  const registerAcc = (e) => {
    console.log('shall register')
    e.preventDefault()
    setRegister(true)
  }
  return (
    <div className='App'>
      <h1 className='text-center'>Login app</h1>
      <Notification errorMessage={error} errortype={errortype}/>
      {user === null && register===false ? <LoginForm
        handleLogin={handleLogin}
        username={username}
        password={password}
        handlePassword={({ target }) => setPassword(target.value)}
        handleUsername={({ target }) => setUsername(target.value)}
        registerAcc={registerAcc}
      /> : register===true ? <Register
        handleRegister={handleRegister}
        username={username}
        password={password}
        handlePassword={({ target }) => setPassword(target.value)}
        handleUsername={({ target }) => setUsername(target.value)}/>  : <Logged user={user} logout={logout}/>
      }
    </div>
  )
}

export default App
