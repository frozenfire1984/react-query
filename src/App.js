import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {QueryClient, QueryClientProvider, useQuery} from "react-query"
import Main from "./pages/Main";
import News from "./pages/News";
import About from "./pages/About";
import Nav from "./components/Nav";
import Films from "./components/Films";
import PageWithPagination from "./pages/PageWithPagination";
import {ReactQueryDevtools} from 'react-query/devtools'
import './styles/style.scss'


const queryClient = new QueryClient()

function App() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="global">
        {/*<button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
        {isOpen ? <Films/> : null}*/}

        {/*<Films queryKey={'films'}/>*/}
        
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/pagewithpagination'} element={<PageWithPagination/>}/>
            <Route path={'/news'} element={<News/>}/>
            <Route path={'/about'} element={<About/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
