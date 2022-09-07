import {useQuery} from "react-query";

export const useGet = () => {
	return useQuery("films", () =>
		fetch("http://localhost:3001/films")
			.then(res => res.json())
			.catch((e) => {
				throw new Error('Error!')
			})
	)
}