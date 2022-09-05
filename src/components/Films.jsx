import React, {useEffect, useState} from 'react'

import {useGetFilms} from "../hooks/useGetFilms";
//import Planets from "./Planets";
import {useGetFilm} from "../hooks/useGetFilm";
import SearchFilm from "./SearchFilm";

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
	/*const {
		data: {results: films = []} = {},
		isError,
		isLoading,
		isRefetching,
		error,
		...other
	} = useGetFilms('films')*/
	
	const [film, setFilm] = useState("")
	//const [filmUrl, setFilmUrl] = useState('')
	
	
	return (
		<div>
			<form action="">
				<input
					type="text"
					id={'film'}
					value={film}
					onChange={(e) => setFilm(e.target.value)}
				/>
			</form>
			<SearchFilm film={film}/>
			
			
			{/*{isLoading && 'loading...'}
			{isRefetching && 'update...'}*/}
			
			{/*{isError
				? error.message
				: films.map((item, index) => (
					<div key={index}>{item.title}</div>
				))
			}*/}
			{/*<hr/>
			<FilmsCount queryKey={queryKey}/>*/}
		
		</div>
	)
}




export default Films