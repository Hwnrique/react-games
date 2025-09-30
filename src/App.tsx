import Navbar from './components/Navbar'

import classe from './App.module.css'
import { Outlet } from 'react-router-dom'
import TransformBtn from './components/TransformBtn'

function App() {

  return (
    <div className={classe.app}>
      <Navbar />
      <TransformBtn />
      <Outlet />
    </div>
  )
}

export default App
