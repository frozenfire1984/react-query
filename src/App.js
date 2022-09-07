import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {QueryClient, QueryClientProvider, useQuery} from "react-query"
import Main from "./pages/Main";
import News from "./pages/News";
import About from "./pages/About";
import Nav from "./components/Nav";
import {FilmsMutation} from "./components/FilmsMutation";
import Films_init from "./components/Films_init";
import PageWithPagination from "./pages/PageWithPagination";
import {ReactQueryDevtools, ReactQueryDevtoolsPanel} from 'react-query/devtools'
import './styles/style.scss'
import Films from "./components/Films";


const queryClient = new QueryClient()

function App() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="global">
        {/*<button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
        {isOpen ? <Films/> : null}*/}

        <FilmsMutation queryKey={'films'}/>

        {/*<Films_init />*/}
        
        {/*<BrowserRouter>
          <Nav/>
          <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/pagewithpagination'} element={<PageWithPagination/>}/>
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
