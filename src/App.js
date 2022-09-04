import './styles/style.css'
import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {QueryClient, QueryClientProvider, useQuery} from "react-query"
import Main from "./pages/Main";
import News from "./pages/News";
import About from "./pages/About";
import Nav from "./components/Nav";
import Films from "./components/Films";
import {ReactQueryDevtools} from 'react-query/devtools'


const queryClient = new QueryClient()



function App() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="global">
        {/*<button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
        {isOpen ? <Films/> : null}*/}

        <Films queryKey={'films'}/>
        
        {/*<BrowserRouter>
          <Nav/>
          <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/news'} element={<News/>}/>
            <Route path={'/about'} element={<About/>}/>
          </Routes>
        </BrowserRouter>*/}
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
