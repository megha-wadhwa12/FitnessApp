import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Diary from './Components/Diary'
import { useConst } from '@chakra-ui/react'
import { UserContext } from './Context'


function App() {


  return (
    <>
      <Diary/>
    </>
  )
}

export default App
