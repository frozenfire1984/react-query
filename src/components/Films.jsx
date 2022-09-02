import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useQuery} from "react-query";

const useFetchFilms = () => {

	//const [data, setData] = useState()
	//let test

	const {
		//data: { results = []} = {}
		//...all
		//data: { results = []} = {},
		//data,
		//isLoading,
		//isError,
		//data,
		...other
	} = useQuery(
		'films',
		() => {
			 //fetch("http://localhost:3001/countries/")
				return fetch("https://swapi.dev/api/films/")
				.then(res => res.json())
				/*.then(data => {
					//console.log(data)
				})*/
		}
	)
	
	//console.log(data)

	return {other}



	/*useQuery(
		'films',
		async () => {
			return fetch("http://localhost:3001/countries/")
			//return fetch("https://swapi.dev/api/films/")
				.then(res => res.json())
		}
	)*/
}

const FilmsMount = () => {
	const {
		data: { results = []} = {},
		isLoading,
		isError,
		error,
		isFetching
	} = useFetchFilms()

	return (
		<div>
			{isLoading
				? '...'
				: isError
					? error.message
					: <p>Films: {results.length}</p>
			}
		</div>

	)
}

const Films = () => {
	const {
		//other
		//results
			data: { results = []} = {},
		//results,

		//isLoading,
		//isError,
		//data,
		//isSuccess,
		//data,
		//isError,
		//error,
		//isFetching
	} = useFetchFilms()

	//console.log(test)
	//console.log("isError:" + isError)
	//console.log("isLoading:" + isLoading)
	//console.log("isSuccess:" + isSuccess)
	console.log(results)
	return (

		<div>
			{/*<FilmsMount />*/}
			{/*{isLoading
				? '...'
				: isError
				? error.message
				: results.map((item, index) => (
				<div key={index}>{item.title}</div>
			))}
			<br/>
			{isFetching ? 'Update...' : null}*/}

			<pre>
			{/*{JSON.stringify(results, null, 2)}*/}

			</pre>


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