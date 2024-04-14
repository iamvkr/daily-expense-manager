import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import Modify from './pages/Modify'
import { store as S } from './Redux/Store.js'

function App() {
  useEffect(() => {
    if (!localStorage.getItem("myDatas") || JSON.parse(localStorage.getItem("myDatas")).length <= 0) {
      // console.log("data do not exist");
      // create a default acc here:
      localStorage.setItem("myDatas", JSON.stringify(
        [{
          AccName: "Default",
          AccData: []
        }]
      ));
      window.location.reload();
    }
  }, [])


  return (
    <Provider store={S}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/index.html' element={<Home />} /> {/* github */}
          <Route path='/add' element={<Add />} />
          <Route path='/modify' element={<Modify />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
