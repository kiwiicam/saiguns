import Nav from "./components/Nav";
import './css/App.css'
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from "./pages/Homepage";

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
