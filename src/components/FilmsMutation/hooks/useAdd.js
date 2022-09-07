import {useMutation, useQueryClient} from "react-query";

export const useAdd = () => {
	const queryClient = useQueryClient()
	
	return useMutation('films', (item) => fetch("http://localhost:3001/films", {
			method: "POST",
			body: JSON.stringify(item),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json()).then(data => console.log(data)),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('films')
				//setText("")
			}
		}
	)
}