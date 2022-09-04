import {useQuery} from "react-query";

export const useGetFilm = (film) => {
	const url = `https://swapi._dev/api/films?search=${film}`
	//const url_pocemon = `https://https://pokeapi.co/api/v2/pokemon`
	//const url_local = 'http://localhost:3001/films'
	
	return useQuery(
		['films', film],
		async () => {
			return fetch(url)
				.then(res => res.json())
				.catch((e) => {
					throw new Error('Error!')
				})
		}, {
			retry: 1,
			staleTime: 10000,
			enabled: !!film
		})
}


