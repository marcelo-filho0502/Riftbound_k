import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Login from '../pages/Login/Login.jsx'
import Homepage from '../pages/Homepage/Homepage.jsx'
import Deckbuilder from '../pages/Deckbuilder/deckbilder.jsx';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/deckbuilder" element={<Deckbuilder />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;