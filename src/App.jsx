import { useState } from 'react'
// import './App.css'

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

import LateralBar from './components/LateralBar';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <MantineProvider>
      <LateralBar></LateralBar>  
    </MantineProvider>
  )
}

export default App
