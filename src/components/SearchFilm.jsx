import React from "react";
import {useGetFilm} from "../hooks/useGetFilm";
import {Planet} from "./Planet";
import {useQuery} from "react-query";


const SearchFilm = ({film}) => {
	const url = `https://swapi.dev/api/films?search=${film}`
	const {
		data: {results: films = []} = {},
		isLoading,
		isError,
		error
	} = useQuery(
		['films', film],
		async () => {
			
			await new Promise((resolve => {
				setTimeout(resolve, 1000)
			}))
			
			return fetch(url)
				.then(res => res.json())
				.catch((e) => {
					throw new Error('Error!')
				})
		}, {
			enabled: film.length >= 3
		})
	return (
		<div>
			{isLoading && 'loading...'}
			
			
			{isError
				? error.message
				: films.map((item, index) => (
					<div key={index} style={{border: "1px black solid"}}>
						<b>{item.title}</b>
						{item.planets.map((planet, index) => (
							<Planet key={index} planetUrl={planet} />
						))
						}
					</div>
				))
			}
		</div>
	)
}

export default SearchFilm