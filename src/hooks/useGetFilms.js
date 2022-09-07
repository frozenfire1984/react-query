import {useQuery} from "react-query";

export const useGetFilms = (queryKey = "films") => {
	const url = 'https://swapi.dev/api/films'
	const url_local = 'http://localhost:3001/films'
	
	return useQuery(queryKey, async () => {
		return fetch(url_local)
			.then(res => res.json())
			.catch((e) => {
				throw new Error('Error!')
			})
	}, {
		staleTime: 10000
	})
}


