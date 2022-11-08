import Alert from 'react-bootstrap/Alert'


const Notification = ({ errorMessage,errortype }) => {
  if(errorMessage !== null){
    return (
      <Alert className='mx-3' variant={errortype}>
        <Alert.Heading>{errorMessage}</Alert.Heading>
      </Alert>
    )
  }
}

export default Notification