import {useQuery} from "react-query";

export const useGetPlanets = (queryKey = "planets") => {
	const url = 'https://swapi.dev/api/planets'
	const url_local = 'http://localhost:3001/films'
	
	return useQuery(queryKey, async () => {
		return fetch(url)
			.then(res => res.json())
			.catch((e) => {
				throw new Error('Error!')
			})
	}, {
		staleTime: 10000
	})
}


