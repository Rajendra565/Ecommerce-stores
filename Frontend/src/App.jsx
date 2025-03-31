import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import UserLayout from './Components/Layout/UserLayout'
import ManLayout from './Components/Layout/ManLayout'
import Woman from './Components/Layout/Woman'
import Kids from './Components/Layout/Kids'
import Luxe from './Components/Layout/Luxe'

function App() {
  return (
   <BrowserRouter>
      <Routes>
          {/* User Layout */}
        <Route path='/' element={<UserLayout/>}>
        </Route>
        <Route path='/man' element={<ManLayout/>}/>
        <Route path='/woman' element={<Woman/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/Luxe' element={<Luxe/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
