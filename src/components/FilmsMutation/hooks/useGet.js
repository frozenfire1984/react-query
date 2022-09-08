import {useQuery} from "react-query";

export const useGet = () => {
	return useQuery("films", () =>
			fetch("http://localhost:3001/films")
				.then(res => res.json())
				.then(data => data)
				.catch((e) => {
					throw new Error('Error!')
				}), {
			//staleTime: 10000,
			//cacheTime: 10000,
			//refetchInterval: 10000
		}
	)
}