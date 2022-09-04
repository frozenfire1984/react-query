import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useQuery} from "react-query";
import {useGetFilms} from "../hooks/useGetFilms";

const FilmsCount = ({queryKey}) => {
	const {
		data: {results = []} = {},
		isLoading,
		isRefetching,
	} = useGetFilms('films');
	return (
		<div>
			{isLoading && 'loading...'}
			{isRefetching && 'update...'}
			<div>{!isLoading && <p>Films count: {results.length}</p>}</div>
		</div>
	)
}

const Films = ({queryKey}) => {
	const {
		data: {results: films = []} = {},
		isError,
		isLoading,
		isRefetching,
		error,
		...other
	} = useGetFilms('films')
	
	console.log(other)
	
	return (
		<div>
			{isLoading && 'loading...'}
			{isRefetching && 'update...'}
			
			{isError
				? error.message
				: films.map((item) => (
					<div key={item.id} >{item.title}</div>
					))
			}
			<hr/>
			<FilmsCount queryKey={queryKey}/>
		
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


export default Films