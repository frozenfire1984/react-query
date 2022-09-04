import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useQuery} from "react-query";

const Films_init = ({queryKey}) => {
	const {
		data: {results: films = []} = {},
		isError,
		isLoading,
		isRefetching,
		error,
		...other
	} = useQuery(queryKey, async () => {
		/*await new Promise((resolve => {
			setTimeout(resolve, 5000)
		}))*/
		
		//throw new Error('error')
		
		//return fetch("http://swapi.dev/api/films").then(res => res.json())
		return fetch("http://localhost:3001/films")
			.then(res => res.json())
			.catch((e) => {
				throw new Error('Error!')
			})
	},
		{
			cacheTime: 5000,
			//staleTime: 10000,
			//refetchOnWindowFocus: false
			//seErrorBoundary: (error) => error.response?.status >= 400
		}
	)
	
	console.log(other)
	
	return (
		<div>
			{isLoading && 'loading...'}
			{isRefetching && 'update...'}
			
			{isError
				? error.message
				: films.map((item, index) => (
					<div key={index} >{item.title}</div>
					))
			}
		
		</div>
	)
}

/*const Films = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [items, setItems] = useState([])

	useEffect(() => {
		(async function () {
			setIsError(false)
			setIsLoading(true);
			try {
				const resp = await fetch("http://localhost:3001/countries/")
				let data = await resp.json()
				data = data.results
				setItems(data)
			} catch (e) {
				setIsError(true)
			}
			setIsLoading(false)
		}())
	},[])
	return (
		<div>
			{isLoading
				? '...'
				:
				items.map((item, index) => (
				<div key={index}>{item.title}</div>
				))
			}
		</div>
	)
}*/


export default Films_init