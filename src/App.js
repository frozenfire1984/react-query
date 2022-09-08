import {useEffect, useState} from 'react'
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
	
	
	const [sort, setSort] = useState(true)
  
  const [test2, setTest2] = useState([-1, -2, 5, 8, 20, 30])
  
	const [test, setTest] = useState([
		{
			"id": 20,
			"title": "ZZZ",
			"desc": "Some desc",
			"checked": true,
			"rating": 200
		},
		{
			"id": 10,
			"title": "CCC",
			"desc": "Some desc",
			"checked": false,
			"rating": 200
		},
		{
			"id": 1,
			"title": "WWW",
			"desc": "Some desc",
			"checked": false,
			"rating": 200
		},
		{
			"id": 4,
			"title": "DDD",
			"desc": "Some desc",
			"checked": true,
			"rating": 100
		},
		{
			"id": 2,
			"title": "AAA",
			"desc": "Some desc",
			"checked": true,
			"rating": 100
		},
		{
			"id": 3,
			"title": "EEE",
			"desc": "Some desc",
			"checked": true,
			"rating": 100
		},
		{
			"id": 0,
			"title": "BBB",
			"desc": "Some desc",
			"checked": true,
			"rating": 100
		},
		{
			"id": -100,
			"title": "BAAAAA",
			"desc": "Some desc",
			"checked": true,
			"rating": 100
		},
    {
      "id": -1,
      "title": "TTT",
      "desc": "Some desc",
      "checked": false,
      "rating": 100
    },
	])
  
  const [testChanged, setTestChanged] = useState([])
	
	const onReverseHandler = () => {
		let temp = [...test]
		temp.reverse()
		setTestChanged(temp)
	}
	
	const [numType, setNumType] = useState(true)
	
	function numCompare(a, b) {
		
		if (numType) {
			let t = a
			a = b
			b = t
		}
    
		if (a.id < b.id) {
			return -1;
		}
		if (a.id > b.id) {
			return 1;
		}
		return 0;
	}
	
	const onSortIDHandler = () => {
		let temp = [...testChanged]
		temp.sort(numCompare)
		setNumType(!numType)
    setTestChanged(temp)
	}
  
  const [alphabetType, setAlphabetType] = useState(true)
	
	function alphabetCompare(a, b) {
		if (alphabetType) {
			let t = a
			a = b
			b = t
		}
  
		if (a.title < b.title) {
			return -1;
		}
		if (a.title > b.title) {
			return 1;
		}
		return 0;
	}
	
	const onSortTitleHandler = () => {
		let temp = [...testChanged]
		temp.sort(alphabetCompare)
		setAlphabetType(!alphabetType)
    setTestChanged(temp)
	}
  
  const [checkedType, setCheckedType] = useState(true)
  
  const onCheckedHandler = () => {
    let temp = [...test]
    temp = temp.reduce((accum,current) => {
      if (checkedType ? current.checked : !current.checked) {
        accum.push(current)
      }
      return accum
    },[])
    setCheckedType(!checkedType)
    setTestChanged(temp)
  }
  
  useEffect(() => {
    setTestChanged(test)
  },[test])
	
	
	return (
		<QueryClientProvider client={queryClient}>
			<div className="global">
				
				<button onClick={onReverseHandler}>Reverse</button>
				<button onClick={onSortIDHandler}>Sort By ID</button>
				<button onClick={onSortTitleHandler}>Sort By Title</button>
        &nbsp;
        <button onClick={onCheckedHandler}>Show only checked</button>
				<table>
					<tbody>
					{testChanged?.map((item) => (
						<tr key={item.id}>
							<td><b>{item.id}</b></td>
							<td>{item.title}</td>
              <td>{item.checked && 'checked'}</td>
						</tr>
					))}
					</tbody>
				</table>
				
				
				{/*<button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
        {isOpen ? <Films/> : null}*/}
				
				{/*<FilmsMutation queryKey={'films'}/>*/}
				
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
			<ReactQueryDevtools/>
		</QueryClientProvider>
	);
}

export default App;
