import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Button as={Link} to="/login">Login</Button>
      <Button as={Link} to="/signup">Sign Up</Button>
      <Button as={Link} to="/diary">Diary</Button>
      <Button as={Link} to="/dashboard">Dashboard</Button>
    </div>

  )
}

export default Home