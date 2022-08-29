import './styles/style.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from "./pages/Main";
import News from "./pages/News";
import About from "./pages/About";
import Nav from "./components/Nav";
import {QueryClient} from "react-query"



function App() {
  return (
    <div className="global">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path={'/'} element={<Main/>}/>
          <Route path={'/news'} element={<News/>}/>
          <Route path={'/about'} element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
