import {useMutation, useQueryClient} from "react-query";

export const useRemove = () => {
	const queryClient = useQueryClient()
	
	return useMutation('films', ({id}) => fetch(`http://localhost:3001/films/${id}`, {
			method: "DELETE",
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => res.json())
			.then(data => data)
			.catch((e) => console.log(e.message)),
		{
			/*onSuccess: () => {
				queryClient.invalidateQueries('films')
			}*/
		}
	)
}