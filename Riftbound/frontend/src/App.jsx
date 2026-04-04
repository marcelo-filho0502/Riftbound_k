import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Login from '../pages/Login/Login.jsx'
import Homepage from '../pages/Homepage/Homepage.jsx'


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;